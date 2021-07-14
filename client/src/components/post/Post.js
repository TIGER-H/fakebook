import { Chat, Favorite, MoreVert, ThumbUp } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./post.css";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [liked, setLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/api/users?userId=${post.userId}`
      );
      setUser(data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLikeClick = () => {};

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="assets/1.png" alt="" className="postProfileImg" />
            <div className="postUserInfo">
              <span className="postUsername">{user.username}</span>
              <span className="postDate">{post.createdAt}</span>
            </div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.description}</span>
          <img src="assets/1.png" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp
              className="likeIcon"
              color="primary"
              onClick={() => setLikes(likes + 1)}
            />
            <Favorite className="likeIcon" color="error" />
            <span className="postLikeCounter">{likes} people like it.</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {post.comments.length} comments.
            </span>
          </div>
        </div>
        <div className="postBottomButtons">
          <div className="postBottomButton">👍赞</div>
          <div className="postBottomButton">💬评论</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
