// cnpm i jsonwebtoken --save  
const jwt = require('jsonwebtoken');
const str = "dkmfidkfnfjnkwewla"

// 创建token的方法
function createToken(obj) {
    obj.time = Date.now()
    console.log(obj);
    return jwt.sign(obj, str, { expiresIn: 60 * 60 });

}
// 验证token
function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, str, (err, data) => {
            if (err) {
                reject('token失效')
            }
            resolve(data)
        });
    })
}



module.exports = {
    createToken,
    verifyToken
}