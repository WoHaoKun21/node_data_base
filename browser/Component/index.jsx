// 环境支持less、scss、css样式
import styles from "./index.less";
import stylesTwo from "./index.scss";
import stylesThree from "./index.css";
import d from "../public/active.png";

const App = () => {
  return <div className={styles.container}>你好，react测试成功？</div>;
};
export default App;
