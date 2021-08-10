import "./feed.css";
import React, { useContext, useEffect, useState } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Loading } from "../loading/Loading";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedContainer">
        {(!username || username === user.username) && (
          <Share posts={posts} setPosts={setPosts} />
        )}
        {isLoading ? (
          <Loading type="balls" />
        ) : (
          posts.map((post) => <Post key={post._id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
