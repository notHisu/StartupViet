import styles from "./profile.module.css";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(options);

  return (
    <>
      <div>
          <h1>Profile</h1>
          <p>
            Test 
            content 1
            <br />
            content 1
            <br />
            content 1
            <br />
            content 1
            <br />
            content 1
            <br />
            content 1
            <br />
            content 1
            <br />
            content 1
          </p>
        </div>
    </>
  );
}
