import styles from "./ItemColumn.module.css";
import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function List({
  item,
}: {
  item: {
    img: string;
    name: string;
    type: string;
    title: string;
    note: string;
    time: string;
  };
}) {
  return (
    <div className={`${styles.newItemRow}`}>
      <Image src={item.img} alt="logo" width={372} height={288} />
      <div className={`${styles.container}`}>
        <p className={styles.type}>{item.type}</p>
        <div className={styles.context}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.note}>{item.note}</p>
        </div>
        <div className={styles.box_info}>
          <div className={styles.info}>
            <i className="fa-solid fa-calendar-days"></i>
            {/* <FontAwesomeIcon icon="fa-solid fa-calendar-days" /> */}
            <p>{item.time}</p>
          </div>
          <div className={styles.info}>
            <i className="fa-solid fa-user"></i>
            <p>{item.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
