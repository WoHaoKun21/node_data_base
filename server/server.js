const express = require("express"); // express的作用：创建一个web服务器

const app = express();

app.link(8080, () => {
  app.use(express.static("public"));
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
  });
  app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
  });
  app.get("/help", (req, res) => {});
});
