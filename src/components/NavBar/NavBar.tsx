"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";

import Links from "./Links/Links";
import Image from "next/image";
import Button from "../Button/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import Dropdown from "../Dropdown/Dropdown";

export default function NavBar() {
  const { data: session , status} = useSession();

  const links = [
    {
      href: "/profile",
      text: (
        <>
          <FaUser /> Profile
        </>
      ),
    },
    {
      href: "/settings",
      text: (
        <>
          <FaCog /> Settings
        </>
      ),
    },
    /*     {
      href: "/logout",
      text: (
        <>
          <FaSignOutAlt /> Logout
        </>
      ),
    }, */
  ];
  
  console.log(session);
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
          {status === "authenticated" ? (
            <div className={styles.user}>
            <Dropdown links={links} text={`${session.user?._id}`} />
            <Button onClick={signOut} className="styles.button">
              Logout
            </Button>
          </div>
          ) : (
            <Button onClick={signIn} className="styles.button">
              Login
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
