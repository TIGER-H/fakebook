import { Favorite, MoreVert, ThumbUp } from "@material-ui/icons";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./post.css";
import TimeAgo from "timeago-react";
import { Button, Menu, MenuItem } from "@material-ui/core";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [liked, setLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

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
  }, [post.userId, post.createdAt]);

  const handleLikeClick = async () => {
    try {
      await axios.put(`http://localhost:3001/api/post/${post._id}/like`, {
        userId: currentUser._id,
      });
      setLikes(liked ? likes - 1 : likes + 1);
      setLiked(!liked);
    } catch (error) {}
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/post/${post._id}`, {
        data: { userId: currentUser._id },
      });
      setAnchorEl(null);

      // to refresh here
    } catch (error) {
      setAnchorEl(null);
      console.log(error);
    }
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
              <TimeAgo
                datetime={post.createdAt}
                locale="zh_CN"
                className="postDate"
              ></TimeAgo>
            </div>
          </div>
          <div className="postTopRight">
            <Button
              aria-controls="tr-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </Button>
            <Menu
              id="tr-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {user._id === currentUser._id && (
                <MenuItem onClick={handleDelete}>删除</MenuItem>
              )}
            </Menu>
          </div>
        </div>
        <div className="postCenter">
          <p className="postText">{post.description}</p>
          <img src={post.img} alt="" className="postImg" />
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
