import styles from "./ToastShelf.module.css";
import Toast from "../Toast";
function ToastShelf() {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast variant="notice">Lorem ipsum dolor sit amet.</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="notice">Lorem ipsum dolor sit amet.</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
