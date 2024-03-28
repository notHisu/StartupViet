import styles from "./ItemRow.module.css";
import Image from "next/image";

export default function List({
  item,
}: {
  item: {
    _id: string;
    title: string;
    note: string;
    username: string;
    img: string;
    content: string;
    date: string;
  };
}) {
  return (
    <div className={`${styles.newItemRow}`}>
      <Image
        className="l-5"
        src={item.img}
        alt="logo"
        width={372}
        height={288}
      />
      <div className={`${styles.container}`}>
        {/* <p className={styles.type}>{item.type}</p> */}
        <div className={styles.context}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.note}>{item.note}</p>
        </div>
        <div className={styles.box_info}>
          <div className={styles.info}>
            <i className="fa-solid fa-calendar-days"></i>
            <p>
              {new Date(item.date)
                .toLocaleDateString("en-GB")
                .split("/")
                .join("-")}
            </p>
          </div>
          <div className={styles.info}>
            <i className="fa-solid fa-user"></i>
            <p>{item.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
