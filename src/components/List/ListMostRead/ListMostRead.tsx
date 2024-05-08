import Image from "next/image";
import ItemRow from "../ItemRow/ItemRow";
import styles from "./ListMostRead.module.css";
import ItemMostRead from "./ItemMostRead/ItemMostRead";

export default function ListMostRead({ newsData }: { newsData: any }) {
  const ListNews = newsData;

  const featuredNews = ListNews
    ? ListNews.filter((item: any) => item.featured === true)
    : [];

  const itemMostRead = featuredNews[0];
  /*   const ListNews = [
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
  ]; */
  return (
    <div className="row">
      <div className="col l-9 m-8 c-12">
        {itemMostRead && <ItemMostRead item={itemMostRead} />}
      </div>
      <div className={`col l-3 m-4 c-12 ${styles.listNewsRow}`}>
        {featuredNews.map((item: any) => (
          <ItemRow item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
