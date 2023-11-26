import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Icon,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};
interface Prop {
  variant: string;
  children: string;
  handleDismiss: () => void;
}
function Toast({ variant, children, handleDismiss }: Prop) {
  const Icon: Icon = ICONS_BY_VARIANT[variant as keyof typeof ICONS_BY_VARIANT];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={() => handleDismiss()}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
