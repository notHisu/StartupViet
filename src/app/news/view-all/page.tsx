"use client";

import { useState, useEffect } from "react";
import List from "@/components/List/List";
import styles from "./viewAll.module.css";
import { getNewsData } from "@/app/api";
import ItemColumn from "@/components/List/ItemColumn/ItemColumn";
import { NewsItem } from "@/config/news";

export default function ViewAllPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("date"); // New state for the sort option

  useEffect(() => {
    const fetchData = async () => {
      const result = await getNewsData();
      setData(result);
    };

    fetchData();
  }, []);

  const filteredData = data?.filter((item: NewsItem) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // New function to sort the data
  const sortedData = filteredData?.sort((a: NewsItem, b: NewsItem) => {
    switch (sortOption) {
      case "date":
        return new Date(b.date).getDate() - new Date(a.date).getDate(); // Assuming the items have a 'date' property
      case "alphabet":
        return a.title.localeCompare(b.title); // Assuming the items have a 'title' property
      default:
        return 0;
    }
  });

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="date">Sort by date</option>
        <option value="alphabet">Sort alphabetically</option>
      </select>
      <div className={`row ${styles.listNews}`}>
        {sortedData ? (
          sortedData.map((item: any) => (
            <div className="col l-3" key={item._id}>
              <ItemColumn item={item} />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
