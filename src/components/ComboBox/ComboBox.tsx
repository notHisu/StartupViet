import styles from "./ComboBox.module.css";

export default function ComboBox() {
  return (
    <div className={styles.combobox}>
      <select className={styles.select_selected}>
        <option value="" disabled selected hidden>
          Select an option
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
      {/* <span className={styles.custom_arrow}></span> */}
    </div>
  );
}
