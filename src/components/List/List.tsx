import styles from "./List.module.css";
import ItemColumn from "./ItemColumn/ItemColumn";
import Button from "@/components/Button/Button";
import { symlink } from "fs";
import Link from "next/link";

export default function List({
  newsData,
  title,
}: {
  newsData: any;
  title: string;
}) {
  const ListNews = newsData;
  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Link href="/news/view-all">
          <Button className={styles.btn}>View all</Button>
        </Link>
      </div>
      <div className={`row ${styles.listNews}`}>
        {ListNews ? (
          ListNews.map((item: any) => (
            <div className="col l-3" key={item._id}>
              <ItemColumn item={item} />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
