// 引入db模块
const { requestQuery, connection } = require("../database/db");
// cnpm install moment --save 格式化时间模块
const moment = require("moment");
// cnpm i string-random --save
const random = require('string-random');

// cnpm i bcryptjs --save 加密模块
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const JWT = require("./token");
const stringRandom = require("string-random");

const svgCaptcha = require('svg-captcha')


// 定义一个变量来临时存储手机号
var tempPhone = null;
// 定义一个变量来存储手机临时验证码
var tempCode = null;
// 定义一个变量来存储随机验证码
var tempCaptcha = null;






// 用户列表
exports.UserList = async (req, res) => {
    const userSql = "select * from hg_users";
    const userList = await requestQuery(userSql);
    res.json({
        data: userList,
    })
}
// 用户注册
exports.UserRegister = async (req, res) => {
    // 需要post他发送请求
    console.log(req.body); //{ user_name: 'admin' }
    let user_name = req.body.user_name;
    let login_password = req.body.login_password;
    let phone = req.body.phone;

    let sql_name = "select user_name from hg_users where user_name =? and is_show = 1"
    // 获取当前时间
    let nowDate = moment().format('YYYY-MM-DD hh:mm:ss');
    console.log(nowDate);
    connection.query(sql_name, user_name, (err, result_name) => {
        if (err) {
            return res.json({
                msg: "用户注册失败",
                status: 1001,
                data: err
            })
        }
        // 需求如果用户名存在不能注册，用户名不存在但是手机号存在也不能注册
        // 如果result_name为空，说明用户不存在
        if (result_name == "") { //条件成立说明用户名不存在
            // 验证手机号是否存在
            let sql_phone = "select phone from hg_users where phone = ? "
            connection.query(sql_phone, phone, (err, result_phone) => {
                if (err) {
                    return res.json({
                        msg: "用户注册失败",
                        status: 1002,
                        data: err
                    })
                }
                //如果result_phone为空，说明手机号可用
                if (result_phone == "") {
                    // insert into hg_users set user_name = ""
                    let sql_register = `insert into hg_users set user_name =?,login_password=?,phone=?,is_show=1,create_time="${nowDate}"`
                    // 给密码加密
                    const hasshpassword = bcrypt.hashSync(login_password, salt);
                    connection.query(sql_register, [user_name, hasshpassword, phone], (err, result) => {
                        if (err) {
                            return res.json({
                                msg: "用户注册失败",
                                status: 1003,
                                data: err
                            })
                        }
                        // console.log(result);
                        if (result.affectedRows == 1) {
                            return res.json({
                                msg: "注册成功，可用去登录了",
                                status: 200,
                                data: result
                            })
                        } else {
                            return res.json({
                                msg: "用户注册失败",
                                status: 1003,
                                data: err
                            })
                        }
                    })
                } else {
                    return res.json({
                        msg: "该手机号已经存在，请更换手机号注册",
                        status: 500,
                    })
                }
            })
        } else {
            return res.json({
                msg: "该用户名已经存在，请更换用户名注册",
                status: 501,
            })
        }
    })
}

// 用户登录
exports.UserLogin = async (req, res) => {
    // 需要post他发送请求
    const user_name = req.body.user_name;
    const captcha = req.body.captcha.toLocaleLowerCase();
    if (captcha != tempCaptcha) {
        return res.json({
            status: 4004,
            msg: "验证码不正确"
        })
    }
    // 判断用户名是否存在
    // select user_name from hg_username where user_name = "" and is_show=1
    const sql = `select user_name,login_password from hg_users where user_name =? and is_show=1`;
    connection.query(sql, [user_name], (err, result) => {
        if (err) {
            return res.json({
                msg: "数据库查询失败",
                status: 500,
            })
        }
        if (result == "") {
            return res.json({
                msg: "该用户不存在，快去注册一个吧",
                status: 1004,
            })
        } else {
            // console.log(result);

            const login_password = bcrypt.compareSync(req.body.login_password, result[0].login_password);
            console.log(login_password); //是一个布尔值，true or false
            if (login_password !== true) {
                return res.status(500).json({
                    msg: "密码错误，请重新输入"
                })
            } else {
                let token = JWT.createToken({
                    login: true,
                    user_name: user_name
                })
                return res.json({
                    status: 200,
                    msg: "登录成功",
                    data: result,
                    token: token

                })
            }
        }
    })
}

// 获取验证码的接口
exports.GetIdentifyingCode = async (req, res) => {
    // 第一步：输入正确手机号
    // 第二步：点击获取验证码，发送请求
    // 第三步：短信内容+随机验证码
    // console.log(req.body.phone);
    var phone = req.body.phone;
    tempPhone = req.body.phone; //临时手机号变量赋值
    var identCode = ("000" + Math.floor(Math.random() * 999999)).slice(-6);
    // console.log(identCode);
    tempCode = identCode;
    res.json({
        msg: "发送成功",
        status: 200,
        data: identCode
    })
}


//短信登录
exports.PhoneLogin = async (req, res) => {
    console.log(req.body.phone);
    console.log(req.body.code);
    var phone = req.body.phone;
    var code = req.body.code;
    var captcha = req.body.captcha.toLocaleLowerCase();
    if (code != tempCode) {
        return res.json({
            status: 1002,
            msg: "验证码不正确"
        })
    } else if (phone != tempPhone) {
        return res.json({
            status: 4003,
            msg: "手机号不正确"
        })
    } else if (captcha != tempCaptcha) {
        return res.json({
            status: 4004,
            msg: "验证码不正确"
        })
    } else {
        // 判断手机号是否存在
        // 1、手机号不存在，将该手机号注册成为用户
        const sql_phone = `select * from hg_users where phone =? and is_show=1`
        const phone_result = await requestQuery(sql_phone, phone)
        // console.log(phone_result);
        if (phone_result.length == 0) {
            // 手机号不存在要注册一个账号
            // 1.需要随机生成一个用户名
            const user_name = "hg_" + stringRandom(10);
            let nowDate = moment().format('YYYY-MM-DD hh:mm:ss');//获取当前时间
            let sql_register = `insert into hg_users set (user_name,phone,is_show,create_time) values ("${user_name}","${phone}","1","${nowDate}",)`;
            // 注册
            let phoneRegister = await requestQuery(sql_register);
            let result = await requestQuery(sql_phone, phone)
            // console.log(1111111111);
            // console.log(result);
            // console.log(phoneRegister);

            if (phoneRegister.affectedRows == 1) { //说明注册成功
                let token = JWT.createToken({
                    login: true,
                    phone: result[0].phone
                })
                return res.json({
                    status: 200,
                    msg: "登录成功",
                    data: result,
                    token: token
                })
            } else {
                return res.json({
                    status: 500,
                    msg: "服务器错误",
                })
            }
        } else {
            // 2、如果手机号存在，直接登录
            let token = JWT.createToken({
                login: true,
                phone: phone_result[0].phone
            })
            return res.json({
                status: 200,
                msg: "登录成功",
                data: phone_result,
                token: token
            })
        }
    }
}

// 生成验证码
exports.SvgCaptcha = async (req, res) => {
    console.log(213);
    var captcha = svgCaptcha.create({
        size: 4,//随机字符串的大小
        ignoreChars: '0o1i',//过滤掉一些字符，例如0o1i
        noise: 2,//噪声线数
        color: true,//字符将具有不同的颜色而不是灰色，如果设置了背景选项，则为true
        background: '#cc9966'// SVG图片的背景颜色
    });
    tempCaptcha = captcha.text.toLocaleLowerCase();
    res.type("svg");
    res.status(200).send(captcha.data);

}
