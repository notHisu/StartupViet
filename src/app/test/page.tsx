"use client";
import { getNewsData } from "@/api";
import { useEffect, useState } from "react";

/* export default async function TestPage() {
  const newsData = await getNewsData();
  console.log(newsData);
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}
 */
async function testGetNewsData() {
  const res = await fetch("http://localhost:3000/api/news/all");
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}

export default function TestPage() {
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data..."); // Log the fetching data
      try {
        const data = await testGetNewsData();
        setNewsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!newsData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  console.log("News data: ", newsData); // Log the news data

  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}
