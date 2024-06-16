"use client";
import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import { getNewsData, getPaginatedNewsData } from "@/app/api";
import List from "@/components/List/List";
import ListMostRead from "@/components//List/ListMostRead/ListMostRead";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export interface NewsItem {
  // Define the properties of a news item here
  _id: string;
  title: string;
  note: string;
  image: string;
  content: string;
  featured: boolean;
  date: string;
  user: string;
}
export default function HomePage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const { data: session } = useSession();

  const [news, setNews] = useState<NewsItem[] | null>(null);

  const [paginatedNews, setPaginatedNews] = useState(null);

  useEffect(() => {
    getNewsData()
      .then((data) => setNews(data))
      .catch((error) => console.error(error));

    getPaginatedNewsData(page, limit)
      .then((data) => setPaginatedNews(data))
      .catch((error) => console.error(error));
  }, [page, limit]);
  return (
    <div>
      <div className={styles.container}>
        <h1>Startup (noun):</h1>
        <h2>/ˈstɑːt.ʌp/</h2>
        <p>a small business that has just been started</p>
        <div>
          <Button className={styles.button}>How can we help you?</Button>
        </div>
      </div>
      <div className={`${styles.container_body}`}>
        <div className="row">
          <div className="col l-2 m-2 c-12"></div>
          <div>
            {/* {session && (
              <Link href="/news/add">
                <Button className={styles.addNewsButton}>Create News</Button>
              </Link>
            )} */}

            <ListMostRead newsData={news} />
            <List newsData={paginatedNews} title="Be Good to the World" />
            {/* <div className={styles.pagination}>
              <Button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className={styles.btn}
              >
                Previous
              </Button>
              <Button
                onClick={() => setPage(page + 1)}
                disabled={paginatedNews ? paginatedNews.length < limit : true}
                className={styles.btn}
              >
                Next
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
