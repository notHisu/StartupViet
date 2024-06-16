import Button from "@/components/Button/Button";
import List from "@/components/List/List";
import styles from "./details.module.css";
import Image from "next/image";
import Link from "next/link";
import { getNewsData, getNewsDataBySlug } from "@/app/api";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

interface DetailsPageProps {
  params: {
    slug: string;
  };
}

export default async function DetailsPage({ params }: DetailsPageProps) {
  const news = await getNewsDataBySlug(params.slug);
  const data = await getNewsData();

  const session = await getServerSession(options);
  const canEdited =
    session && (session.user.isAdmin || session?.user?.name === news.username);

  return (
    <div>
      <div className={styles.container}>
        <Image
          className={`l-12 ${styles.new_img}`}
          src={`/${news.image}`}
          width={1000}
          height={700}
          alt="Description of image"
        />

        <h1 className={styles.title}>{news.title}</h1>
        {/* <div className={styles.note}>{news.note}</div> */}
        <div className={`row ${styles.info}`}>
          <div className={`col c-12 m-6 l-12 ${styles.post_info}`}>
            <div>
              <p className={styles.info_title}>By:</p>
              <p className={styles.name}>{news.username}</p>
            </div>
            <div className={styles.date}>
              {/* <i className="fa-solid fa-calendar-days"></i> */}
              <p>
                {new Date(news.date)
                  .toLocaleDateString("en-GB")
                  .split("/")
                  .join("-")}
              </p>
            </div>
            <h2 className={styles.type}>{news.note}</h2>

            {canEdited && (
              <Link href={`/news/${params.slug}/edit`}>
                <Button className={styles.editButton}>Edit</Button>
              </Link>
            )}
          </div>

          <div className={`col c-12 m-6 l-12 ${styles.post_info}`}>
            {/* fix day nhe */}
            <p>Cam kết ủng hộ dự án: 0 VND</p>
            <p>Còn: 0 ngày nữa</p>
            <button type="button">Ủng hộ</button>
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

        <p
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: news.content.replace(/\n/g, "<br />"),
          }}
        ></p>
      </div>
      <div className={styles.list_news}>
        <List newsData={data} title="More to Read" />
      </div>
    </div>
  );
}
