declare module "slash2";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "omit.js";
declare module "numeral";
declare module "@antv/data-set";
declare module "mockjs";
declare module "react-fittext";
declare module "bizcharts-plugin-slider";
// 添加全局变量
declare let L: any; // 解决全局飘红变量问题

interface Window {
  WW: () => {};
}
