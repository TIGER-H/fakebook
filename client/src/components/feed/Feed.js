import "./feed.css";
import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
