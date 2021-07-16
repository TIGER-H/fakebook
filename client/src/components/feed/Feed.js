import "./feed.css";
import React, { useContext, useEffect, useState } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      // username ? profile page : home page
      const res = username
        ? await axios.get("http://localhost:3001/api/post/profile/" + username)
        : await axios.get(
            "http://localhost:3001/api/post/timeline/" + user._id
          );
      // sort posts

      setPosts(
        res.data.sort((p1, p2) => {
          const date1 = new Date(p1.createdAt);
          const date2 = new Date(p2.createdAt);
          return date2 - date1;
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedContainer">
        {(!username || username === user.username) && (
          <Share posts={posts} setPosts={setPosts} />
        )}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
