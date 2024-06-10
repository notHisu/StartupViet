import Link from "next/link";
import styles from "./Dropdown.module.css";

interface Link {
  href: string;
  text: string | JSX.Element;
}

interface DropdownProps {
  links: Link[];
  text: string;
}

export default function Dropdown({ links, text }: DropdownProps) {
  return (
    <div>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>{text}</button>
        <div className={styles.dropdownContent}>
          <div className={styles.contentContainer}>
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
