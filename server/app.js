const express = require("express");
var bodyParser = require("body-parser");
const { mySql } = require("./dataBase");

const app = express(); //使用express函数
const prot = 8080; // 端口号——随意，不冲突就好
const hostName = "192.168.2.19"; // 自己电脑的ip地址，可在终端通过“ipconfig”查看——IPv4地址

app.use(bodyParser.json()); // 支持post请求参数格式
app.use(bodyParser.urlencoded({ extended: true }));

// 查询接口用户
app.get("/query", (request, response) => {
  mySql.connect();
  const sqlstring = `select * from user`;
  mySql.query(sqlstring, function (err, result) {
    if (err) {
      response.send({ code: 500, msg: err.sqlMessage });
      return;
    }
    response.send({ code: 200, msg: "操作成功", rows: result });
  });
  mySql.end(); // 关闭数据库连接
});

// 编辑接口
app.post("/form", (request, response) => {});

// 启动服务器并进行监听
app.listen(prot, hostName);
