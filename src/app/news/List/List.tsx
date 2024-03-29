import styles from "./List.module.css";
import ItemColumn from "./ItemColumn/ItemColumn";
import Button from "@/components/Button/Button";
import { symlink } from "fs";

export default async function List({
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
        <Button className={styles.btn}>View all</Button>
      </div>
      <div className={`row ${styles.listNews}`}>
        {ListNews.map((item: any) => (
          <div className="col l-3" key={item._id}>
            <ItemColumn item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
