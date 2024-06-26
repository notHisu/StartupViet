import Link from "next/link";
import styles from "./ItemColumn.module.css";
import Image from "next/image";
import { NewsItem } from "@/config/news";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function List({ item }: { item: NewsItem }) {
  const imagePath = "/" + item?.image;
  return (
    <Link href={`/news/${item._id}`}>
      <div className={`${styles.newItemRow}`}>
        <Image
          src={imagePath}
          alt={item.title}
          width={372}
          height={288}
          unoptimized
        />
        {/* <img className={styles.img} src={`/${item.img}`} /> */}
        <div className={`${styles.container}`}>
          {/* <p className={styles.type}>{item.note}</p> */}
          <div className={styles.context}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.note}>{item.content}</p>
          </div>
          {/* <div className={styles.box_info}>
            <div className={styles.info}>
              <i className="fa-solid fa-calendar-days"></i>
              <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
              <p>
                {new Date(item.date)
                  .toLocaleDateString("en-GB")
                  .split("/")
                  .join("-")}
              </p>
            </div>
            <div>
              <i className="fa-solid fa-user"></i>
              <p className={styles.info_txt}>{item.username}</p>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
