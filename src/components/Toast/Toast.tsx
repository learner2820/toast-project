import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
interface Prop {}
function Toast() {
  return (
    <div className={`${styles.toast} ${styles.notice}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>16 photos have been uploaded</p>
      <button className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
