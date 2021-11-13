import TextEditor from "../../components/TextEditor";
import Tools from "../../components/Tools";
import styles from "./index.module.scss"

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <TextEditor />
      </div>
      <div className={styles.tools}>
        <Tools />
      </div>
    </div>
  );
};

export default MainLayout;
