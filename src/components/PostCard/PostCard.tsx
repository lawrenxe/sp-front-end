import React from "react";
import { Card } from "../InfoGrid/InfoGrid";
import "./PostCard.css";

interface PostCardProps {
  postCard: Card;
}

export const PostCard = ({ postCard }: PostCardProps) => {
  return (
    <div className="card">
      <img className="post-image" src={postCard.image_url}></img>
      <div className="post-title">
        <p className="post-name">{postCard.sneaker_name}</p>
        <p className="post-price">A${postCard.price}</p>
      </div>
      <div className="post-info">
        <p className="post-last-purchase">
          Latest purchase: {postCard.last_purchase}
        </p>
        <p className="post-poster">Posted by: {postCard.poster_name}</p>
        <p className="post-verified-by">
          Verfied by {postCard.verified_count} users
        </p>
      </div>
    </div>
  );
};
