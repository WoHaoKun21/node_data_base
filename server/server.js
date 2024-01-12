const express = require("express");
var bodyParser = require("body-parser");
const { mySql } = require("./dataBase");

const app = express(); //使用express函数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 查询接口用户
app.get("/query", (request, response) => {
  console.log("接口参数：", request.query);
  mySql.connect();
  const sqlstring = `select * from user`;
  mySql.query(sqlstring, function (err, result) {
    if (err) {
      response.send({ code: 500, msg: err.sqlMessage });
      return;
    }
    response.send(result);
  });
  mySql.end(); // 关闭数据库连接
});

// 编辑接口
app.post("/form", (request, response) => {
  console.log("POST接口执行");
  response.send(request.body); //参数
});

app.listen(5000);
