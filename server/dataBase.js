const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost", // 连接的数据库地址。（默认:localhost）
  user: "root", // mysql的连接用户名
  password: "shiPENG334", // 对应用户的密码
  database: "team", // 所需要连接的数据库的名称（可选）
});

// 数据库建立链接
connection.connect();
let sqlstring = "";

// // 插入表格数据
// sqlstring =
//   "insert into user (`username`, `password`, `age`) Values('石鹏飞', 'spf!@#456','18')";
// connection.query(sqlstring, function (err, result) {
//   if (err) {
//     console.log("[INSERT ERROR] - ", err.message);
//     return;
//   }
//   console.log("INSERT ID - ", result);
// });

// 获取表格数据[查询]
sqlstring = "select * from user where username='石鹏飞' and id=1";
connection.query(sqlstring, function (err, result) {
  if (err) {
    console.log("[SELECT ERROR] - ", err.message);
    return;
  }
  console.log("数据列表：", result);
});

// // 数据更新
// sqlstring = "update user Set username='林峰',password='lf@#$567' Where id=1";
// connection.query(sqlstring, function (err, result) {
//   if (err) {
//     console.log("[UPDATE ERROR] - ", err.message);
//     return;
//   }
//   console.log("UPDATE affectedRows - ", result);
// });

// 关闭数据库连接
connection.end();
