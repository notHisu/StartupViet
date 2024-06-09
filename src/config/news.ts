import { getNewsData } from "@/app/api";

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

export const newsData = getNewsData();
