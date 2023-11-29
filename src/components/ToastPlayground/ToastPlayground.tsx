import { useState } from "react";
import toastLogo from "../../assets/toast.png";
import styles from "./ToastPlayground.module.css";
import Button from "../Button";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
interface toastInfo {
  id: string;
  message: string;
  variant: string;
}
const newToasts: toastInfo[] = [
  {
    id: crypto.randomUUID(),
    message: "Oh no!",
    variant: "error",
  },
  {
    id: crypto.randomUUID(),
    message: "Logged in",
    variant: "success",
  },
];
function ToastPlayground() {
  const [toasts, setToasts] = useState(newToasts);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const handleDismiss = () => {
    //setIsRendered(false);
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src={toastLogo} />
        <h1>Toast Playground</h1>
      </header>
      {/* {isRendered && (
        <Toast variant={variant} handleDismiss={handleDismiss}>
          {message}
        </Toast>
      )} */}
      <ToastShelf toasts={toasts} />
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;
              return (
                <label key={id} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={(event) => {
                      setVariant(option);
                    }}
                  />
                  {option}
                </label>
              );
            })}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={() => {
                setIsRendered(true);
              }}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
