const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin"); // 使用 html-webpack-plugin 可以自定义一个html模板，最终html文件会被打包到 dist文件夹，并且也会把打包好的js文件引入。
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除dist目录
const WebpackBar = require("webpackbar"); // 引入进度条显示
const webpack = require("webpack"); // 自动加载模块，而不必到处import或require

module.exports = {
  // 打包入口配置
  entry: {
    index: "/index.js",
  },
  // 打包出口配置
  output: {
    path: path.resolve(__dirname, "dist"), // 打包后的数据目录
    publicPath: "/", // 打包后静态资源的路径
    filename: "js/[name]_[chunkhash].js", // 打包后输出文件的文件名，“name”对应入口文件的app名称
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
    new htmlWebpackPlugin({
      filename: "index.html", // 生成的html文件名，默认是引入的文件名
      title: "测试标题", // html标题
      template: "./index.html", // 模版文件
      chunks: ["index"], // 引入的js文件,对应
    }), // 配置模版文件
    new CleanWebpackPlugin(), // 清除dist目录
    new WebpackBar(), // 进度条显示，打包和启动时候显示进度条
    // 页面可以省略指定包得导入
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
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
      "/api": {
        // 请求地址——接口文档上的真实接口地址
        target: "http://www.bjlink32.com/check.php", // 开发测试服务器的接口地址
        changeOrigin: true, // 是否开启跨域
        pathRewrite: { "^/data": "" }, //重写，如果接口文档没有写“/”的话，那么这里就进行重写
      },
    },
  },
  mode: "development", // 运行模式：development开发模式，production生产模式
  devtool: "source-map", // 用来开发调试——不用的时候关闭，因为体积太大
  // 扩展名忽略，import导入的时候可以省略扩展名
  resolve: {
    extensions: [".js", ".jsx", ".less", ".scss", ".css"],
  },
};
