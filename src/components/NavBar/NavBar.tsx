import Link from "next/link";
import styles from "./NavBar.module.css";
import Links from "./Links/Links";
import Image from "next/image";
import Button from "../Button/Button";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className={styles.imgContainer}
        />
      </Link>
      <div>
        <Links />
      </div>
      <div>
        <Link href="/login">
          <Button className="styles.button">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}
