const express = require("express"); // 引入express模块
const bodyParser = require("body-parser"); // 解析post请求参数
const mysql = require("mysql"); // 引入mysql模块
const IP = require("ip"); // 引入ip模块：实时获取电脑ip
// const OS = require("os"); // 引入os模块：获取本机ip列表

// 创建数据库连接
const connection = mysql.createConnection({
  host: "localhost", // 连接的数据库地址。（默认:localhost）
  user: "root", // mysql的连接用户名
  password: "shiPENG334", // 对应用户的密码
  database: "team", // 所需要连接的数据库的名称（可选）
});
connection.connect();

const app = express(); //使用express函数
const prot = 8080; // 端口号——随意，不冲突就好
const hostName = IP.address(); // 自己电脑的ip地址，可在终端通过“ipconfig”查看——IPv4地址

app.use(bodyParser.json()); // 支持post请求参数格式
app.use(bodyParser.urlencoded({ extended: true }));

const USER_INSTER = "insert into user ";
const USER_SELECT = "select * from user ";
const USER_UPDATE = "update user Set ";
const USER_DELETE = "delete from users where ";

// 查询接口用户
app.get("/query", (request, response) => {
  let params = " where ";
  if (Object.keys(request.query).length > 0) {
    for (let i = 0; i < Object.keys(request.query).length; i++) {
      params += `${Object.keys(request.query)[i]}='${
        request.query[Object.keys(request.query)[i]]
      }' and `;
    }
    params = params.substring(0, params.length - 4);
  } else {
    params = "";
  }

  connection.query(USER_SELECT + params, function (err, result) {
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

// const interfaces = OS.networkInterfaces(); // 获取本机ip列表
