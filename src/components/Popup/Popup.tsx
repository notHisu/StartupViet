import Input from "../Input/Input";
import styles from "./Popup.module.css";
interface Popup {
  show: boolean;
  onClose: any;
  donate: string;
  setDonate: any;
}
const Popup = ({ show, onClose, donate, setDonate }: Popup) => {
  if (!show) {
    return null;
  }

  return (
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
              value={donate}
              setValue={setDonate}
              className={styles.inp}
              type="text"
            />
          </div>
        </div>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
