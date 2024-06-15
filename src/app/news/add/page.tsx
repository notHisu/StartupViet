"use client";
import { useSession } from "next-auth/react";
import styles from "./add.module.css";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button/Button";
import { addNews } from "@/app/api";
interface NewsData {
  title: string;
  content: string;
  note: string;
  username: string;
  image: string;
  featured: boolean;
  userid: string;
}

export default function AddPage() {
  const { data: session } = useSession();
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/news");
  }

  const [newsData, setNewsData] = useState<NewsData>({
    title: "",
    content: "",
    note: "",
    username: "",
    image: "",
    featured: false,
    userid: session?.user._id || "",
  });

  const [imageName, setImageName] = useState("");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageName(event.target.files[0].name);
    } else {
      setImageName("");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    if (e.target.name === "image") {
      if (e.target.files && e.target.files.length > 0) {
        setNewsData({ ...newsData, image: e.target.files[0].name });
      } else {
        setNewsData({ ...newsData, image: "none" });
      }
    } else {
      setNewsData({ ...newsData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newsData.username = session?.user?.name || "";
    const jsonData = JSON.stringify(newsData);
    console.log(jsonData);

    try {
      await addNews(jsonData);
      alert("News added successfully!");
      router.push("/news");
    } catch (error) {
      console.error(error);
      alert("Failed to add news!");
    }
  };
  return (
    <div className={styles.container}>
      <Button className="" onClick={handleBack}>
        Back
      </Button>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newsData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Note:
          <input
            type="text"
            name="note"
            value={newsData.note}
            onChange={handleChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={session?.user?.name || ""}
            readOnly
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <label>
          Featured:
          <input
            type="checkbox"
            name="featured"
            checked={newsData.featured}
            onChange={(e) =>
              setNewsData({ ...newsData, featured: e.target.checked })
            }
          />
        </label>
        <label>
          Content:
          <textarea
            name="content"
            value={newsData.content}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
