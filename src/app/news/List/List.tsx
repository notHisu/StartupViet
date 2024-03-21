import styles from "./List.module.css";

import ItemColumn from "./ItemColumn/ItemColumn";
import Button from "@/components/Button/Button";
import { symlink } from "fs";

export default function List() {
  const ListNews = [
    {
      img: "/NewItem.png",
      type: "Travel",
      title:
        "Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...",
      time: "Nov 17, 2023",
      name: "Evan",
      note: "The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against",
    },
    {
      img: "/NewItem.png",
      type: "Travel",
      title:
        "Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...",
      time: "Nov 17, 2023",
      name: "Evan",
      note: "The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against",
    },
    {
      img: "/NewItem.png",
      type: "Travel",
      title:
        "Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...",
      time: "Nov 17, 2023",
      name: "Evan",
      note: "The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against",
    },
    {
      img: "/NewItem.png",
      type: "Travel",
      title:
        "Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...",
      time: "Nov 17, 2023",
      name: "Evan",
      note: "The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against",
    },
    {
      img: "/NewItem.png",
      type: "Travel",
      title:
        "Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...",
      time: "Nov 17, 2023",
      name: "Evan",
      note: "The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against",
    },
    {
      img: "/NewItem.png",
      type: "Travel",
      title:
        "Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...",
      time: "Nov 17, 2023",
      name: "Evan",
      note: "The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against",
    },
    {
      img: "/NewItem.png",
      type: "Travel",
      title:
        "Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...",
      time: "Nov 17, 2023",
      name: "Evan",
      note: "The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against",
    },
    {
      img: "/NewItem.png",
      type: "Travel",
      title:
        "Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...",
      time: "Nov 17, 2023",
      name: "Evan",
      note: "The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against",
    },
  ];
  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <h2 className={styles.title}>Be Good to the World</h2>
        <Button className={styles.btn}>View all</Button>
      </div>
      <div className={`row ${styles.listNews}`}>
        {ListNews.map((item, i) => (
          <div className="col l-3" key={i}>
            <ItemColumn item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
