// 环境支持less、scss、css样式
import styles from "./index.less";
import stylesTwo from "./index.scss";
import stylesThree from "./index.css";

const App = () => {
  return <div className={styles.container}>首页</div>;
};
export default App;
