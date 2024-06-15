import styles from "./profile.module.css";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function ManagePostPage() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <div>
          <h1>Profile</h1>
          <p>Test 
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
      ) : (
        <div>You are not login</div>
      )}
    </>
  );
}
