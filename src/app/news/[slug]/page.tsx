import List from "../List/List";
import styles from "./details.module.css";

async function getNewsData() {
  const res = await fetch("http://localhost:3000/api/news/all", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}

async function getData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/news/${slug}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}

export default async function DetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const news = await getData(params.slug);
  const data = await getNewsData();
  return (
    <div>
      <div className={`${styles.container}`}>
        <h2 className={styles.type}>{news.note}</h2>
        <h1 className={styles.title}>{news.title}</h1>
        {/* <div className={styles.note}>{news.note}</div> */}
        <div className={`row ${styles.info}`}>
          <div className={`col c-12 m-6 l-12 ${styles.post_info}`}>
            <div>
              <p className={styles.info_title}>By:</p>
              <p className={styles.name}>{news.username}</p>
            </div>
            <div className={styles.date}>
              <i className="fa-solid fa-calendar-days"></i>
              <p>
                {new Date(news.date)
                  .toLocaleDateString("en-GB")
                  .split("/")
                  .join("-")}
              </p>
            </div>
          </div>
          {/* <div className={`col c-12 m-6 l-6 ${styles.contact}`}>
            <p className={styles.info_title}>Contact:</p>
            <div className={styles.contact_img}>
              <img src={mail_img} />
                 <img src={zalo_img} />
                 <img src={fb_img} />
            </div>
          </div> */}
        </div>
        {/* <img className={styles.new_img} src={news.image} /> */}
        <img className={styles.new_img} src="https://fakeimg.pl/1000x700" />
        <p
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: news.content }}
        ></p>
      </div>
      <div className={styles.list_news}>
        <List newsData={data} title="More to Read" />
      </div>
    </div>
  );
}
