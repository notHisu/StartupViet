import List from "./List/List";
import ListMostRead from "./List/ListMostRead/ListMostRead";
import styles from "./news.module.css";
import Button from "@/components/Button/Button";

async function getNewsData() {
  const res = await fetch("http://localhost:3000/api/news/all", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}

export default async function NewsPage() {
  const data = await getNewsData();

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
            <ListMostRead newsData={data} />
            <List newsData={data} title="Be Good to the World" />
            {/* <div className={styles.pagination}>
              <div className={`${styles.btn_pagination} ${styles.btn_default}`}>
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className={`${styles.btn_pagination} ${styles.btn_active}`}>
                1
              </div>
              ...
              <div className={`${styles.btn_pagination}`}>5</div>
              <div className={`${styles.btn_pagination} ${styles.btn_next}`}>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
