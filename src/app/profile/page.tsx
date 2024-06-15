import styles from "./profile.module.css";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function ProfilePage() {
  const session = await getServerSession(options);

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
