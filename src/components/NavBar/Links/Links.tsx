import { link } from "fs";
import styles from "./Links.module.css";
import NavLink from "./NavLink/NavLink";

export default function Links() {
  const links = [
    { name: "News", path: "/news" },
    { name: "Spaces", path: "/spaces" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Test", path: "/test" },
  ];

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <NavLink item={link} key={link.name} />
      ))}
    </div>
  );
}
