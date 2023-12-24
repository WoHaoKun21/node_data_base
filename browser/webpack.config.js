const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin"); // 使用 html-webpack-plugin 可以自定义一个html模板，最终html文件会被打包到 dist文件夹，并且也会把打包好的js文件引入。
const cross = require("cross-env");

console.log("开发模式：", cross.length);

module.exports = {
  // 打包入口配置
  entry: {
    index: "/index.js",
  },
  // 打包出口配置
  output: {
    path: path.resolve(__dirname, "dist"), // 打包后的数据目录
    filename: "[name].[hash].js", // 打包后输出文件的文件名，“name”对应入口文件的app名称
    publicPath: "/", // 打包后静态资源的路径
  },
  // 配置模块，主要处理文件模块
  module: {
    rules: [
      {
        test: /\.jsx?$/, // babel-loader处理的文件扩展名
        exclude: /(node_modules|bower_components)/, // 忽略目录
        use: {
          // 转换规则
          loader: "babel-loader", // loader名称，自动加载.babelrc文件，有对应文件，下面的options配置会被忽略
          // options: {// 语法库  ES6语法库           react语法库
          //     presets: ["@babel/preset-env", "@babel/preset-react"]
          // }
        },
      },
      {
        test: /\.css$/, // 匹配项
        use: ["css-loader"], // 使用的loader
      },
    ],
  },
  // 配置插件，主要处理打包时的操作：如文件移动等
  plugins: [
    new htmlWebpackPlugin({ template: "./index.html" }), // 配置模版文件
  ],
  // 配置开发地址
  devServer: {
    // host: "120.0.2.3", // 开发服务器的地址
    port: 8080, // 地址端口号
    open: true, // 浏览器自动启动
    hot: true, // 热更新
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"), // 指定webpack-dev-server根目录
    port: 8080, // 指定端口，默认是8080，为了防止和其他服务器端口冲突可以进行修改
    compress: true, // 是否进行压缩所有来自项目路径下“dist/”目录的文件
    open: true,
    hot: true,
    proxy: {
      // 代理
      "/check": {
        // 请求地址——接口文档上的真实接口地址
        target: "http://www.bjlink32.com/check.php", // 开发测试服务器的接口地址
        changeOrigin: true, // 是否开启跨域
        pathRewrite: { "^/data": "" }, //重写，如果接口文档没有写“/”的话，那么这里就进行重写
      },
    },
    // overlay: {
    //   warnings: true,
    //   errors: true,
    // },
  },
  mode: "development", // 运行模式：development开发模式，production生产模式
  devtool: "source-map", // 用来开发调试——不用的时候关闭，因为体积太大
};
