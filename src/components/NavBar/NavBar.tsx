import Link from "next/link";
import styles from "./NavBar.module.css";
import Links from "./Links/Links";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo{" "}
      </Link>
      <div>
        <Links />
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </div>
  );
}
