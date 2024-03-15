import { link } from "fs";
import styles from "./Links.module.css";
import NavLink from "./NavLink/NavLink";

export default function Links() {
  const links = [
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <NavLink item={link} key={link.name} />
      ))}
    </div>
  );
}
