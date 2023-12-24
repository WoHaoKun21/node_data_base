import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <div>你好，react测试成功？</div>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
