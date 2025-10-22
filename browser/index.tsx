import { createRoot } from "react-dom/client";
import Router from "./src/router"; // 入口页面
import "./global.less"; // 全局样式

const root = createRoot(document.getElementById("root")!);
root.render(<Router />);
