import { Button } from "antd";
import axios from "axios";
import active from "../public/active.png";

const Admin = () => {
  // 接口请求
  const getInterFace = () => {
    axios
      .get("/api/query", {
        params: { username: "石鹏飞", age: 23 },
      })
      .then((res) => {
        console.log("查询结果：", res.data);
      });
  };
  return (
    <div>
      管理权限
      <img src={active} style={{ width: 100 }} alt="" />
      <button onClick={getInterFace}>查询</button>
    </div>
  );
};

export default Admin;
