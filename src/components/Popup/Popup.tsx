import Input from "../Input/Input";
import styles from "./Popup.module.css";
import { useState } from "react";

interface Popup {
  show: boolean;
  onClose: any;
  children: React.ReactNode;
}
const Popup = ({ show, children, onClose }: Popup) => {
  return show ? (
    <>
      <div className={styles.overlay}>
        <div className={styles.popup}>
          {children}
          <button onClick={onClose} className={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Popup;
