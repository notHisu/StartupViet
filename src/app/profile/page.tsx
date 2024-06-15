"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div>
          <h1>Profile</h1>
          <p>{session.user?.name}</p>
          <p>Số dư tài khoản: 0</p>
          <button type="button">Nạp tiền ví điện tử</button>
        </div>
      ) : (
        <div>You are not login</div>
      )}
    </>
  );
}
