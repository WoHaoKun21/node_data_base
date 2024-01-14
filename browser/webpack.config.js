const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin"); // 使用 html-webpack-plugin 可以自定义一个html模板，最终html文件会被打包到 dist文件夹，并且也会把打包好的js文件引入。
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除dist目录
const WebpackBar = require("webpackbar"); // 引入进度条显示
const webpack = require("webpack"); // 自动加载模块，而不必到处import或require
const CopyPlugin = require("copy-webpack-plugin");
// webpack内置插件，对js进行压缩
const TerserPlugin = require("terser-webpack-plugin");
// 第三方包：对CSS进行压缩的
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const Target = process.env.NODE_ENV; // 系统变量——用来判断开发模式

module.exports = {
  // 打包入口配置
  entry: {
    index: "/index.tsx",
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
      // 针对react组件模块
      {
        test: /\.(ts|tsx)$/, // babel-loader处理的文件扩展名
        exclude: /(node_modules|bower_components)/, // 忽略目录
        use: [
          "babel-loader",
          {
            // 转换规则
            loader: "ts-loader", // loader名称，自动加载.babelrc文件，有对应文件，下面的options配置会被忽略
          },
        ],
      },
      {
        test: /\.(js|jsx)$/, // babel-loader处理的文件扩展名
        exclude: /(node_modules|bower_components)/, // 忽略目录
        use: {
          // 转换规则
          loader: "babel-loader", // loader名称，自动加载.babelrc文件，有对应文件，下面的options配置会被忽略
        },
      },
      // 使用的loader——针对样式文件模块
      {
        test: /\.css$/, // 匹配项
        use: [
          {
            // 从下往上执行
            loader: MiniCssExtractPlugin.loader, // 最后将css插入到style标签里面去，不能和style-loader共用
          },
          {
            loader: "css-loader", // 允许import来进行载入，并将css文件合并成一个
            options: {
              modules: true, // 是否开启模块化
            },
          },
        ],
      },
      {
        test: /\.less$/, // 匹配项
        use: [
          {
            // 从下往上执行
            loader: MiniCssExtractPlugin.loader, // 最后将css插入到style标签里面去，不能和style-loader共用
          },
          {
            loader: "css-loader", // 允许import来进行载入，并将css文件合并成一个
            options: {
              modules: true, // 是否开启模块化
            },
          },
          {
            loader: "less-loader", // 将less文件转换为css文件
          },
        ],
      },
      {
        test: /\.scss$/, // 支持sass样式
        use: [
          {
            // 从下往上执行
            loader: MiniCssExtractPlugin.loader, // 最后将css插入到style标签里面去
          },
          {
            loader: "css-loader", // 允许import来进行载入，并将css文件合并成一个
            options: {
              modules: true, // 是否开启模块化
            },
          },
          {
            loader: "sass-loader", // 将.scss文件转换为css文件
          },
        ],
      },
      // 针对一些静态文件：图片、字体等
      {
        test: /\.(png|jpe?g|gif|svg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              // url-loader里面的选项
              limit: 8192, // 8字节以下的图片进行打包，再插入到js/css中——限制
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/, // 要检测的对象
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  // 配置插件，主要处理打包时的操作：如文件移动等
  plugins: [
    // 配置模版文件
    new htmlWebpackPlugin({
      filename: "index.html", // 生成的html文件名，默认是引入的文件名
      title: "测试标题", // html标题
      template: "./index.html", // 模版文件
      chunks: ["index"], // 引入的js文件,对应
    }),
    // css打包插件——将css提取出来放入到指定文件夹下面
    new MiniCssExtractPlugin({
      filename: "css/[name]_[hash].css", // 从js入口文件打包后的css文件名
      chunkFilename: "css/[name]_[hash].css", // 从非js入口文件打包后的css文件名
    }),
    new CleanWebpackPlugin(), // 清除dist目录
    new WebpackBar(), // 进度条显示，打包和启动时候显示进度条
    // 页面可以省略指定包得导入
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      axios: "axios",
    }),
    // 文件复制
    new CopyPlugin({
      patterns: [
        { from: __dirname + "/public", to: __dirname + "/dist" }, // 将指定位置的文件/文件夹下面的文件/文件夹移动到目标文件夹下面
        // { from: __dirname + "/public", to: __dirname + "/dist" },// 其他配置
      ],
    }),
  ],
  // 配置开发地址
  devServer: {
    // contentBase: path.join(__dirname, "dist"), // 指定webpack-dev-server根目录
    port: 8000, // 指定端口，默认是8080，为了防止和其他服务器端口冲突可以进行修改
    compress: true, // 是否进行压缩所有来自项目路径下“dist/”目录的文件
    open: false, // 是否自动打开浏览器
    hot: true,
    proxy: {
      // 代理
      "/api": {
        // 请求地址——接口文档上的真实接口地址
        target: "http://192.168.0.173:8080", // 开发测试服务器的接口地址
        changeOrigin: true, // 是否开启跨域
        pathRewrite: { "^/api": "" }, //重写，如果接口文档没有写“/”的话，那么这里就进行重写
      },
    },
  },
  // webpack配置项：文件压缩、优化
  optimization: {
    minimize: true,
    minimizer: [
      // 自定义TerserPlugin压缩
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(), // CSS压缩
    ],
  },
  mode: Target === "build" ? "production" : "development", // production开发环境，development开发环境
  // 支持热重载
  devtool: Target === "dev" ? "source-map" : false, // 用来开发调试——不用的时候关闭，因为体积太大
  resolve: {
    // 扩展名忽略，import导入的时候可以省略扩展名
    extensions: [".js", ".jsx", ".ts", ".tsx", ".less", ".scss", ".css"],
    // 快速导入地址
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
};
