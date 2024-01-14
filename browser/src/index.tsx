import { useEffect } from "react";
import axios from "axios";
import active from "../public/active.png";

const Admin = () => {
  // 接口请求
  const getInterFace = () => {
    fetch("/api/query?id=1", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: any) => {
        console.log("查询结果：", res);
      });
  };
  useEffect(() => {
    getInterFace();
  }, []);
  return (
    <div>
      管理权限
      <img src={active} style={{ width: 100 }} alt="" />
    </div>
  );
};

export default Admin;
