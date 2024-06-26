import Link from "next/link";
import styles from "./ItemMostRead.module.css";
import { NewsItem } from "@/config/news";

export default function ItemMostRead({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item._id}`}>
      <div
        className={`${styles.bg_img}`}
        style={{
          background: `url(${item.image})`,
          // background: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className={styles.type}>
            <p>{item.note}</p>
          </div>
          <h2 className={styles.title}>{item.title}</h2>
        </div>
        <div className={styles.box_info}>
          <div className={styles.info}>
            <p>By:</p>
            <p>{item.username}</p>
          </div>
          <p className={styles.note}>{item.content}</p>

          {/* <div className={styles.box_info}>
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
          </div> */}
        </div>
      </div>
    </Link>
  );
}
