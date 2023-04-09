import React from "react";
import { PostCard } from "../PostCard/PostCard";
import "./InfoGrid.css";

export interface Card {
  id: number;
  sneaker_name: string;
  image_url: string;
  price: number;
  last_purchase: string;
  poster_name: string;
  verified_count: number;
}

const InfoGrid = () => {
  const testPosts: Card[] = [
    {
      id: 0,
      image_url: "src/assets/test/sothebys-com.brightspotcdn.jpg",
      sneaker_name: "AJ whatever whatever",
      price: 200,
      last_purchase: "04/09/2023 @ 6:58am",
      poster_name: "lawrence",
      verified_count: 3,
    },
    {
      id: 1,
      image_url: "src/assets/test/download.jpg",
      sneaker_name: "Yeezy whatever",
      price: 150,
      last_purchase: "04/09/2023 @ 7:58am",
      poster_name: "otto",
      verified_count: 4,
    },
    {
      id: 2,
      image_url: "src/assets/test/Nike-Dunk-Low-Panda-on-Feet.webp",
      sneaker_name: "dunk whatever",
      price: 160,
      last_purchase: "04/09/2023 @ 4:58am",
      poster_name: "valo",
      verified_count: 2,
    },
    {
      id: 0,
      image_url: "src/assets/test/sothebys-com.brightspotcdn.jpg",
      sneaker_name: "AJ whatever whatever",
      price: 200,
      last_purchase: "04/09/2023 @ 6:58am",
      poster_name: "lawrence",
      verified_count: 3,
    },
    {
      id: 1,
      image_url: "src/assets/test/download.jpg",
      sneaker_name: "Yeezy whatever",
      price: 150,
      last_purchase: "04/09/2023 @ 7:58am",
      poster_name: "otto",
      verified_count: 4,
    },
    {
      id: 2,
      image_url: "src/assets/test/Nike-Dunk-Low-Panda-on-Feet.webp",
      sneaker_name: "dunk whatever",
      price: 160,
      last_purchase: "04/09/2023 @ 4:58am",
      poster_name: "valo",
      verified_count: 2,
    },
    {
      id: 0,
      image_url: "src/assets/test/sothebys-com.brightspotcdn.jpg",
      sneaker_name: "AJ whatever whatever",
      price: 200,
      last_purchase: "04/09/2023 @ 6:58am",
      poster_name: "lawrence",
      verified_count: 3,
    },
    {
      id: 1,
      image_url: "src/assets/test/download.jpg",
      sneaker_name: "Yeezy whatever",
      price: 150,
      last_purchase: "04/09/2023 @ 7:58am",
      poster_name: "otto",
      verified_count: 4,
    },
    {
      id: 2,
      image_url: "src/assets/test/Nike-Dunk-Low-Panda-on-Feet.webp",
      sneaker_name: "dunk whatever",
      price: 160,
      last_purchase: "04/09/2023 @ 4:58am",
      poster_name: "valo",
      verified_count: 2,
    },
    {
      id: 0,
      image_url: "src/assets/test/sothebys-com.brightspotcdn.jpg",
      sneaker_name: "AJ whatever whatever",
      price: 200,
      last_purchase: "04/09/2023 @ 6:58am",
      poster_name: "lawrence",
      verified_count: 3,
    },
    {
      id: 1,
      image_url: "src/assets/test/download.jpg",
      sneaker_name: "Yeezy whatever",
      price: 150,
      last_purchase: "04/09/2023 @ 7:58am",
      poster_name: "otto",
      verified_count: 4,
    },
    {
      id: 2,
      image_url: "src/assets/test/Nike-Dunk-Low-Panda-on-Feet.webp",
      sneaker_name: "dunk whatever",
      price: 160,
      last_purchase: "04/09/2023 @ 4:58am",
      poster_name: "valo",
      verified_count: 2,
    },
    {
      id: 0,
      image_url: "src/assets/test/sothebys-com.brightspotcdn.jpg",
      sneaker_name: "AJ whatever whatever",
      price: 200,
      last_purchase: "04/09/2023 @ 6:58am",
      poster_name: "lawrence",
      verified_count: 3,
    },
    {
      id: 1,
      image_url: "src/assets/test/download.jpg",
      sneaker_name: "Yeezy whatever",
      price: 150,
      last_purchase: "04/09/2023 @ 7:58am",
      poster_name: "otto",
      verified_count: 4,
    },
    {
      id: 2,
      image_url: "src/assets/test/Nike-Dunk-Low-Panda-on-Feet.webp",
      sneaker_name: "dunk whatever",
      price: 160,
      last_purchase: "04/09/2023 @ 4:58am",
      poster_name: "valo",
      verified_count: 2,
    },
  ];

  return (
    <div className="grid">
      {testPosts.map((post) => {
        return <PostCard postCard={post} />;
      })}
    </div>
  );
};

export default InfoGrid;
