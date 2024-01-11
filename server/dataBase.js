const mysql = require("mysql");
const mySql = mysql.createConnection({
  host: "localhost", // 连接的数据库地址。（默认:localhost）
  user: "root", // mysql的连接用户名
  password: "shiPENG334", // 对应用户的密码
  database: "team", // 所需要连接的数据库的名称（可选）
});

// 数据库建立链接
// mySql.connect();
/* ((err) => {
  // err代表失败
  if (err) {
    console.log("数据库初始化失败");
  } else {
    console.log("数据库初始化成功");
  }
  // 监听insert
  mySql.on("insert", (table, data) => {
    console.log("插入数据：" + table + ": " + JSON.stringify(data));
  });
  // 监听update
  mySql.on("update", (table, data) => {
    console.log("更新数据：" + table + ": " + JSON.stringify(data));
  });
  // 监听delete
  mySql.on("delete", (table, data) => {
    console.log("删除数据：" + table + ": " + JSON.stringify(data));
  });
}) */
// let sqlstring = "";

// alter table `student` add `address` int               -- 在末尾添加字段
// alter table `student` add `address` int first         -- 在开头添加字段
// alter table `student` add `address` int after `name`  -- 在指定字段之后添加字段

// // 插入表格数据
// sqlstring =
//   "insert into user (`username`, `password`, `age`) Values('张三', 'zs!@#456','28')";
// mySql.query(sqlstring, function (err, result) {
//   if (err) {
//     console.log("[INSERT ERROR] - ", err.message);
//     return;
//   }
//   console.log("INSERT ID - ", result);
// });

// // 获取表格数据[查询]
// sqlstring = "select * from user where username='石鹏飞' and id=1"; // select * from user where username='石鹏飞' and id=1
// mySql.query(sqlstring, function (err, result) {
//   if (err) {
//     console.log("[SELECT ERROR] - ", err.message);
//     return;
//   }
//   console.log("数据列表：", result);
// });

// // 数据更新
// sqlstring = "update user Set username='林峰',password='lf@#$567' Where id=1";
// mySql.query(sqlstring, function (err, result) {
//   if (err) {
//     console.log("[UPDATE ERROR] - ", err.message);
//     return;
//   }
//   console.log("UPDATE affectedRows - ", result);
// });

// // 关闭数据库连接
// mySql.end();

module.exports = { mySql };
