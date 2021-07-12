import { MoreVert } from "@material-ui/icons";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="" alt="" className="postProfileImg" />
            <span className="postUsername">Username</span>
            <span className="postDate">xx min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">this is my post.</span>
            <img src="" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft"></div>
            <div className="postBottomRight"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
