import { useEffect } from "react";
import axios from "axios";
import active from "../public/active.png";

const Admin = () => {
  // 接口请求
  const getInterFace = () => {
    axios("/api/query", {
      params: { id: 1 },
    }).then((res: any) => {
      console.log("接口数据：", res);
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
