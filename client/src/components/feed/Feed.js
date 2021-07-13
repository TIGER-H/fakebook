import "./feed.css";
import React, { useEffect, useState } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/post/timeline/60eaacce3b22b7605c09b977"
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
