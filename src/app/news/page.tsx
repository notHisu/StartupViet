"use client";
import { getNewsData, getPaginatedNewsData } from "@/app/api";
import List from "./List/List";
import ListMostRead from "./List/ListMostRead/ListMostRead";
import styles from "./news.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface NewsItem {
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

export default function NewsPage() {
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
      {/* <div className={styles.head}>
            </div> */}
      {/*       <div className={`grid wide c-12 ${styles.search_bar}`}>
        <div className={styles.search_bar_item}>
          <label>Location</label>
          <input placeholder="Enter your location" />
        </div>
        <ComboBox className={styles.search_bar_item} options={options} title='Recruitment type' />
                <ComboBox className={styles.search_bar_item} options={options} title='Price range' />
        <Button className={styles.search_btn}>Search</Button>
      </div> */}
      <div className={`grid wide ${styles.container}`}>
        <div className="row">
          <div className="col l-2 m-2 c-12"></div>
          <div>
            {session && (
              <Link href="/news/add">
                <Button className={styles.addNewsButton}>Create News</Button>
              </Link>
            )}

            <ListMostRead newsData={news} />
            <List newsData={paginatedNews} title="Be Good to the World" />
            <div className={styles.pagination}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
