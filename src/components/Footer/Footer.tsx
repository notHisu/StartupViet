import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_contain}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className={styles.imgContainer}
          />
        </Link>
        <p>
          The startup community in cyberspace promotes the entrepreneurial
          spirit among young people, while supporting the search for investors,
          ideas and members for new projects.
        </p>
      </div>
      <div className={styles.container}>
        <p>Where you can begin your journey</p>
        <p>© 2024 Startup Community</p>
      </div>
    </div>
  );
}
