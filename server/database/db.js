var mysql = require('mysql'); //cnpm install mysql --save
const connection = mysql.createConnection({
    host: 'localhost',  //域名或者IP地址
    user: 'root',   //mysql 数据库的用户名
    password: '',   //mysql数据库的密码
    database: 'shop'   //要连接数据库的名字
});

// const userSql = "select * from hg_users"
// connection.query(userSql, (err, data) => {
//     if (!err) {
//         console.log(data);
//     }
// })

// 封装查询的方法，给不同sql查询对应的数据
function requestQuery(sql, sqlArr) {
    return new Promise((resolve, reject) => {
        connection.query(sql, sqlArr, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}
module.exports = {
    connection,
    requestQuery
};