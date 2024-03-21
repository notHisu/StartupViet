import Image from "next/image";
import ItemRow from "../ItemRow/ItemRow";
import styles from "./ListMostRead.module.css";
import ItemMostRead from "./ItemMostRead/ItemMostRead";

export default function ListMostRead() {
  const itemMostRead = {
    img: "/NewItem.png",
    type: "Travel",
    title:
      "Vacations That Will Make You Superhuman1 The university defended how it handled allegations against ...",
    time: "Nov 17, 2023",
    name: "Evan",
    note: "The university defended how it handled allegations against The university defended how it handled allegations against The university defended how it handled allegations against",
  };
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
  ];
  return (
    <div className="row">
      <div className="col l-8 m-8 c-12">
        <ItemMostRead item={itemMostRead} />
      </div>
      <div className={`col l-4 m-4 c-12 ${styles.listNewsRow}`}>
        {ListNews.map((item, i) => (
          <div className="" key={i}>
            <ItemRow item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
