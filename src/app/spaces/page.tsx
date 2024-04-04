import styles from "./spaces.module.css";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function SpacesPage() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <div>
          <h1>Spaces</h1>
        </div>
      ) : (
        <div>You are not login</div>
      )}
    </>
  );
}
