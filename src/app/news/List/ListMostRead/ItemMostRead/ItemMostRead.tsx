import styles from "./ItemMostRead.module.css";

export default function ItemMostRead({
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
    <div
      className={`${styles.bg_img}`}
      style={{
        background: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.type}>
        <p>{item.type}</p>
      </div>
      <div>
        <h2 className={styles.title}>{item.title}</h2>
        <div className={styles.box_info}>
          <div className={styles.info}>
            <i className="fa-solid fa-calendar-days"></i>
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
