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
          <div className={styles.footer_contain}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={20}
                className={styles.imgContainer}
              />
            </Link>
          </div>
          <div className={styles.container}>
            <p>Where you can begin your journey</p>
            <p>© 2024 Startup Community</p>
          </div>
        </div>
      )}
    </>
  );
}
