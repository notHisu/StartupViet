"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Links from "./Links/Links";
import Image from "next/image";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <>
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
          {!session ? (
            <Button onClick={signIn} className="styles.button">
              Login
            </Button>
          ) : (
            <div className={styles.user}>
              <p>{session.user?.name}</p>
              <Button onClick={signOut} className="styles.button">
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
