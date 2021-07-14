import { Chat, Favorite, MoreVert, ThumbUp } from "@material-ui/icons";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./post.css";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [liked, setLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/api/users?userId=${post.userId}`
      );
      setUser(data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLikeClick = async () => {
    try {
      await axios.put(`http://localhost:3001/api/post/${post._id}/like`, {
        userId: currentUser._id,
      });
      setLikes(liked ? likes - 1 : likes + 1);
      setLiked(!liked);
    } catch (error) {}
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : process.env.PUBLIC_URL + "/assets/default.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
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
          <img
            src={post.img ? post.img : process.env.PUBLIC_URL + "/assets/1.png"}
            alt=""
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp className="likeIcon" color="primary" />
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
          <div className="postBottomButton" onClick={handleLikeClick}>
            👍赞
          </div>
          <div className="postBottomButton">💬评论</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
