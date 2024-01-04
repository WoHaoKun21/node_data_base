import React from "react";
import { createRoot } from "react-dom/client";
import "./global.less"; // 全局样式
import App from "./src"; // 入口页面

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
