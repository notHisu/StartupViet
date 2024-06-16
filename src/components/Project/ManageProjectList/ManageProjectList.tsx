// components/ProjectList.tsx

import React from "react";
import Image from "next/image";
import { NewsItem } from "@/config/news"; // Ensure the correct path to your NewsItem type/interface

import Link from "next/link";
import Button from "@/components/Button/Button";

interface Props {
  newsData: NewsItem[];
}

const ManageProjectList: React.FC<Props> = ({ newsData }) => {
  return (
    <div>
      {newsData.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h2> {item.title}</h2>
          <p>
            <strong>Catagory:</strong>
            {item.note}
          </p>
          <p>
            <strong>Username:</strong> {item.username}
          </p>
          {/* <p>
            <strong>UserID:</strong> {item.userid}
          </p> */}

          {/* <div
            style={{
              width: '100px',
              height: '100px',
              position: 'relative',
            }}
          >
            <Image
              src={`/path/to/images/${item.image}`} // Ensure your image path is correct
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
          </div> */}
          <p>
            <strong>Featured:</strong> {item.featured ? "Yes" : "No"}
          </p>
          <p>
            <strong>Date:</strong> {new Date(item.date).toLocaleDateString()}
          </p>

          <br />
          <p>{item.content}</p>
          <br />

          <Link href={`/news/${item._id}/edit`}>
            <Button className={""}>Edit</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ManageProjectList;
