"use client";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/login" && (
        <div className={styles.footer}>
          {/* <div className={styles.footer_contain}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.png"
                alt="logo"
                width={10}
                height={10}
                className={styles.imgContainer}
              />
            </Link>
            <p>
              The startup community in cyberspace promotes the entrepreneurial
              spirit among young people, while supporting the search for
              investors, ideas and members for new projects.
            </p>
          </div> */}
          <div className={styles.container}>
            <p>Where you can begin your journey</p>
            <p>© 2024 Startup Community</p>
          </div>
        </div>
      )}
    </>
  );
}
