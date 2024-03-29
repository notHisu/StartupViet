import styles from "./details.module.css";

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

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>{news.title}</h1>
        <p
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: news.content }}
        ></p>
      </div>
    </div>
  );
}
