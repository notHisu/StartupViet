import Link from "next/link";
import styles from "./ItemRow.module.css";
import Image from "next/image";
import { NewsItem } from "@/config/news";

export default function List({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item._id}`}>
      <div className={`${styles.newItemRow}`}>
        {/* <Image
          className="l-5"
          src={item.img}
          alt="logo"
          width={372}
          height={288}
        /> */}
        <div
          className={`l-4 ${styles.img}`}
          style={{
            background: `url(${item.image})`,
            //background: `url()`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className={`${styles.container}`}>
          <p className={styles.type}>{item.note}</p>
          <div className={styles.context}>
            {/* <h2 className={styles.title}>{item.title}</h2> */}
            <p className={styles.note}>{item.content}</p>
          </div>
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
