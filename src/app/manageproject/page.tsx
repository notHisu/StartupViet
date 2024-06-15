import styles from "./manageproject.module.css";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getNewsData } from "../api";

import { NewsItem } from "@/config/news";

import ManageProjectList from "@/components/Project/ManageProjectList/ManageProjectList";

export default async function ManageProjectPage() {
  const session = await getServerSession(options);
  const NewsData = async (): Promise<NewsItem[]> => {
    const data = await getNewsData();
    return data;
  };
  // Fetch and log the news data
  const newsData = await NewsData();

  //console.log(newsData);

  return (
    <>
      {session ? (
        <div>
          <h1>Manage Startup Projects</h1>
          {/* <p>{session.user?.name}</p> */}

          <div>
            <ManageProjectList newsData={newsData} />
          </div>
        </div>
      ) : (
        <div>You are not login</div>
      )}
    </>
  );
}
