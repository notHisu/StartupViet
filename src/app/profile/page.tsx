"use client";
import styles from "./profile.module.css";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Popup from "@/components/Popup/Popup";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { getUserBalanceById } from "../api";

export default function ProfilePage() {
  const { data: session } = useSession();

  const [donate, setDonate] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  const [inpDonate, setInpDonate] = useState(0);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  function updateDonate(newDonate: number) {
    setDonate((pre) => {
      return pre + newDonate;
    });
  }
  function HandleConfirm() {
    updateDonate(inpDonate);
    togglePopup();
    setInpDonate(0);
  }
  return (
    <>
      {session ? (
        <div className={styles.container}>
          <h1>Profile</h1>
          <div className={styles.bx_info}>
            <div>
              <p className={styles.name}>{session.user?.name}</p>
              <p>Số dư tài khoản: {donate} VND</p>
            </div>
            <div>
              <Button className={styles.btn} onClick={togglePopup}>
                Nạp tiền ví điện tử
              </Button>
            </div>
          </div>
          <Popup
            show={showPopup}
            onConfirm={HandleConfirm}
            onClose={togglePopup}
          >
            <h2>AddWalletFund</h2>
            <div className={styles.box_info}>
              <div className={styles.info}>
                <p>Loại thẻ: </p>
                {/* <p>Vietcombank</p> */}
                <Input
                  placeholder="Vietcombank"
                  className={styles.inp}
                  type="text"
                />
              </div>
              <div className={styles.info}>
                <p>Số thẻ: </p>
                <Input
                  placeholder="1234556"
                  className={styles.inp}
                  type="text"
                />
              </div>
              <div className={styles.info}>
                <p>Mã bảo mật: </p>
                <Input placeholder="000" className={styles.inp} type="text" />
              </div>
              <div className={styles.info}>
                <p>Số tiền muốn thêm(VND): </p>
                <Input
                  placeholder={``}
                  value={`${inpDonate}`}
                  setValue={setInpDonate}
                  className={styles.inp}
                  type="text"
                />
              </div>
            </div>
          </Popup>
        </div>
      ) : (
        <div>You are not login</div>
      )}
    </>
  );
}
