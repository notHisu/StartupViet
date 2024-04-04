"use client";
import React, { useState, useEffect } from "react";
import styles from "./edit.module.css";
import { deleteNewsById, getNewsDataBySlug, updateNewsById } from "@/app/api";
import Button from "@/components/Button/Button";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface NewsData {
  title: string;
  content: string;
}

interface EditPageProps {
  params: {
    slug: string;
  };
}

export default function EditPage({ params }: EditPageProps) {
  const router = useRouter();
  const [newsData, setNewsData] = useState<NewsData>({
    title: "",
    content: "",
  });

  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsDataBySlug(params.slug);
        setNewsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params.slug]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    setNewsData({ ...newsData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jsonData = JSON.stringify(newsData);
    console.log(jsonData);

    try {
      await updateNewsById(params.slug, jsonData);
      alert("News updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update news!");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNewsById(params.slug);
      alert("News deleted successfully!");
      await router.push("/news");
    } catch (error) {
      console.error(error);
      alert("Failed to delete news!");
    }
  };

  const handleBack = () => {
    router.back();
  };

  if (!session) {
    redirect(`/api/auth/signin?callbackUrl=/`);
  }
  return (
    <div className={styles.container}>
      <Button className="" onClick={handleBack}>
        Back
      </Button>
      <Button className="" onClick={handleDelete}>
        Delete
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
