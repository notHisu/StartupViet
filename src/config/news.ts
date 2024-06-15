import { getNewsData } from "@/app/api";

export interface NewsItem {
  // Define the properties of a news item here
  _id: string;
  title: string;
  note: string;
  username: string;
  userid: string;
  image: string;
  content: string;
  featured: boolean;
  date: string;
}

export const newsData = getNewsData();
