import "./feed.css";
import React, { useEffect, useState } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      // username ? go to profile page : home page
      const res = username
        ? await axios.get("http://localhost:3001/api/post/profile/" + username)
        : await axios.get(
            "http://localhost:3001/api/post/timeline/60eaacce3b22b7605c09b977"
          );
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, [username]);
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
