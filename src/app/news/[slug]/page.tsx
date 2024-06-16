"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import List from "@/components/List/List";
import styles from "./details.module.css";
import Image from "next/image";
import Link from "next/link";
import { getNewsData, getNewsDataBySlug } from "@/app/api";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Input from "@/components/Input/Input";
import Popup from "@/components/Popup/Popup";
import { NewsItem } from "@/config/news";
import { UserData } from "@/types/user";
import { useSession } from "next-auth/react";

interface DetailsPageProps {
  params: {
    slug: string;
  };
}

interface Session {
  user: UserData;
}

export default function DetailsPage({ params }: DetailsPageProps) {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [data, setData] = useState<NewsItem | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    getNewsDataBySlug(params.slug)
      .then((data) => setNews(data))
      .catch((error) => console.error(error));

    getNewsData()
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [params.slug]);

  const canEdited =
    session && (session.user.isAdmin || session?.user?.name === news?.username);

  const [donate, setDonate] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  const [inpDonate, setInpDonate] = useState(0);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  function updateDonate(newDonate: number) {
    setDonate((pre) => {
      return pre + newDonate;
    });
  }
  function HandleConfirm() {
    updateDonate(inpDonate);
    togglePopup();
    setInpDonate(0);
  }

  return (
    <div>
      <div className={styles.container}>
        <Image
          className={`l-12 ${styles.new_img}`}
          src={`/${news?.image}`}
          width={1000}
          height={700}
          alt="Description of image"
        />

        <h1 className={styles.title}>{news?.title}</h1>
        {/* <div className={styles.note}>{news.note}</div> */}
        <div className={`row ${styles.info}`}>
          <div className={`col c-12 m-6 l-12 ${styles.post_info}`}>
            <div>
              <p className={styles.info_title}>By:</p>
              <p className={styles.name}>{news?.username}</p>
            </div>
            <div className={styles.date}>
              {/* <i className="fa-solid fa-calendar-days"></i> */}
              <p>
                {news?.date
                  ? new Date(news.date)
                      .toLocaleDateString("en-GB")
                      .split("/")
                      .join("-")
                  : "N/A"}
              </p>
            </div>
            <h2 className={styles.type}>{news?.note}</h2>

            {canEdited && (
              <Link href={`/news/${params.slug}/edit`}>
                <Button className={styles.editButton}>Edit</Button>
              </Link>
            )}
          </div>

          <div className={`col c-12 m-6 l-12 ${styles.post_info}`}>
            {/* fix day nhe */}
            <p>Cam kết ủng hộ dự án: {donate}VND</p>
            <p>Còn: 0 ngày nữa</p>
            <Button onClick={togglePopup}>Ủng hộ</Button>
          </div>
        </div>

        <Popup show={showPopup} onConfirm={HandleConfirm} onClose={togglePopup}>
          <h2>Ủng hộ</h2>
          <div className={styles.box_popup_info}>
            <div className={styles.popup_info}>
              <p>Tên người ủng hộ: </p>
              <Input placeholder="abc" className={styles.inp} type="text" />
            </div>
            <div className={styles.popup_info}>
              <p className="l-6">Ẩn danh: </p>
              <div className="l-6">
                <Input placeholder="" type="checkbox" />
              </div>
            </div>
            <div className={styles.popup_info}>
              <p>Nội dung tin nhắn ủng hộ: </p>
              <Input placeholder="abc" className={styles.inp} type="text" />
            </div>
            <div className={styles.popup_info}>
              <p>Số tiền ủng hộ: </p>
              <Input
                placeholder={``}
                value={`${inpDonate}`}
                setValue={setInpDonate}
                className={styles.inp}
                type="text"
              />
            </div>
          </div>
        </Popup>

        {/* <img className={styles.new_img} src={news.image} /> */}

        <p
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: news?.content ? news.content.replace(/\n/g, "<br />") : "",
          }}
        ></p>
      </div>
      <div className={styles.list_news}>
        <List newsData={data} title="More to Read" />
      </div>
    </div>
  );
}
