import Input from "../Input/Input";
import styles from "./Popup.module.css";
import { useState } from "react";

interface Popup {
  show: boolean;
  onClose: any;
  donate: string;
  updateDonate: any;
}
const Popup = ({ show, onClose, donate, updateDonate }: Popup) => {
  const [inpDonate, setInpDonate] = useState("0");
  function HandleClose() {
    updateDonate(inpDonate);
    onClose();
  }
  return show ? (
    <>
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <h2>AddWalletFund</h2>
          <div className={styles.box_info}>
            <div className={styles.info}>
              <p>Loại thẻ: </p>
              {/* <p>Vietcombank</p> */}
              <Input
                placeholder="Vietcombank"
                className={styles.inp}
                type="text"
              />
            </div>
            <div className={styles.info}>
              <p>Số thẻ: </p>
              <Input placeholder="1234556" className={styles.inp} type="text" />
            </div>
            <div className={styles.info}>
              <p>Mã bảo mật: </p>
              <Input placeholder="000" className={styles.inp} type="text" />
            </div>
            <div className={styles.info}>
              <p>Số tiền muốn thêm(VND): </p>
              <Input
                placeholder={`${donate}`}
                value={inpDonate}
                setValue={setInpDonate}
                className={styles.inp}
                type="text"
              />
            </div>
          </div>
          <button onClick={HandleClose} className={styles.closeButton}>
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
