import styles from "./ToastShelf.module.css";
import Toast from "../Toast";
interface toastInfo {
  id: string;
  message: string;
  variant: string;
}
interface Props {
  toasts: toastInfo[];
}
function ToastShelf({ toasts }: Props) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((tst) => (
        <li className={styles.toastWrapper}>
          <Toast variant={tst.variant} handleDismiss={() => null}>
            {tst.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
