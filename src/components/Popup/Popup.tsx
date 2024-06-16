import Input from "../Input/Input";
import styles from "./Popup.module.css";
import { useState } from "react";

interface Popup {
  show: boolean;
  onClose: any;
  onConfirm: any;
  children: React.ReactNode;
}
const Popup = ({ show, children, onClose, onConfirm }: Popup) => {
  return show ? (
    <>
      <div className={styles.overlay}>
        <div className={styles.popup}>
          {children}
          <button onClick={onClose} className={styles.closeButton}>
            Hủy
          </button>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Xác nhận
          </button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Popup;
