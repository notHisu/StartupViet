import Link from "next/link";
import styles from "./NavLink.module.css";

export default function NavLink({
  item,
}: {
  item: { name: string; path: string };
}) {
  return (
    <div className={styles.container}>
      <Link href={item.path} className={styles.link}>
        {item.name}
      </Link>
    </div>
  );
}
