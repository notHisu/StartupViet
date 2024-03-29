import Link from "next/link";
import styles from "./ItemMostRead.module.css";

export default function ItemMostRead({
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
    <Link href={`/news/${item._id}`}>
      <div
        className={`${styles.bg_img}`}
        style={{
          // background: `url(${item.img})`,
          background: "url(https://fakeimg.pl/1000x700)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.type}>{/* <p>{item.type}</p> */}</div>
        <div>
          <h2 className={styles.title}>{item.title}</h2>
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
    </Link>
  );
}
