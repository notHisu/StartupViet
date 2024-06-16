"use client";
import styles from "./profile.module.css";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Popup from "@/components/Popup/Popup";
import Button from "@/components/Button/Button";

export default function ProfilePage() {
  const { data: session } = useSession();

  const [donate, setDonate] = useState("0");

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {session ? (
        <div className={styles.container}>
          <h1>Profile</h1>
          <div className={styles.bx_info}>
            <div className={styles.info}>
              <p className={styles.name}>{session.user?.name}</p>
              <p>Số dư tài khoản: {donate} VND</p>
            </div>
            <div>
              <Button
                className={styles.btn}
                disabled={false}
                onClick={togglePopup}
              >
                Nạp tiền ví điện tử
              </Button>
            </div>
          </div>
          <Popup
            donate={donate}
            show={showPopup}
            setDonate={setDonate}
            onClose={togglePopup}
          />
        </div>
      ) : (
        <div>You are not login</div>
      )}
    </>
  );
}
