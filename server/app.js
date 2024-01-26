const express = require("express");
var bodyParser = require("body-parser");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost", // 连接的数据库地址。（默认:localhost）
  user: "root", // mysql的连接用户名
  password: "shiPENG334", // 对应用户的密码
  database: "team", // 所需要连接的数据库的名称（可选）
});
connection.connect();

const app = express(); //使用express函数
const prot = 8080; // 端口号——随意，不冲突就好
const hostName = "192.168.0.173"; // 自己电脑的ip地址，可在终端通过“ipconfig”查看——IPv4地址

app.use(bodyParser.json()); // 支持post请求参数格式
app.use(bodyParser.urlencoded({ extended: true }));

let USER_INSTER = "insert into user";
let USER_SELECT = "select * from user";
let USER_UPDATE = "update user Set";
let USER_DELETE = "delete from users where";

// 查询接口用户
app.get("/query", (request, response) => {
  const sqlstring = `${USER_SELECT}`; //  where username="" or age=""
  let params = "";
  if (Object.keys(request.query).length > 0) {
    for (let i = 0; i < Object.keys(request.query).length; i++) {
      params += `${Object.keys(request.query)[i]}='${
        request.query[Object.keys(request.query)[i]]
      }' and `;
    }
    params = params.substring(0, params.length - 4);
  }
  connection.query(sqlstring + " where " + params, function (err, result) {
    if (err) {
      response.send({ code: 500, msg: err.sqlMessage });
      throw err;
    }
    response.send({
      code: 200,
      msg: "操作成功",
      rows: result,
      total: result.length,
    });
  });
});

// 编辑接口
app.post("/form", (request, response) => {});

// 启动服务器并进行监听
app.listen(prot, hostName);
