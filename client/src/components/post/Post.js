import { Chat, Favorite, MoreVert, ThumbUp } from "@material-ui/icons";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="assets/1.png" alt="" className="postProfileImg" />
            <span className="postUsername">Username</span>
            <span className="postDate">2 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">this is my post.</span>
          <img src="assets/1.png" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp className="likeIcon" color="primary" />
            <Favorite className="likeIcon" color="error" />
            <span className="postLikeCounter">20 people like it.</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">10 comments.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
