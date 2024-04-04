import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export default async function TestPage() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <div>
          <h1>Test Page</h1>
        </div>
      ) : (
        <div>
          <h1>You are not login</h1>
        </div>
      )}
    </>
  );
}
