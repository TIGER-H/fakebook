import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./share.css";

const Share = ({ posts, setPosts }) => {
  const { user } = useContext(AuthContext);
  const [description, setDescription] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const [inputSource, setInputSource] = useState("");

  console.log(inputVisible);

  const handleShare = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description,
      img: inputSource,
    };
    console.log(newPost);
    setInputVisible(false);
    setInputSource("");
    setDescription("");
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/post",
        newPost
      );
      setPosts(
        posts.concat(data).sort((p1, p2) => {
          const date1 = new Date(p1.createdAt);
          const date2 = new Date(p2.createdAt);
          return date2 - date1;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : process.env.PUBLIC_URL + "/assets/default.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder={`What's in your mind ${user.username}?`}
            onChange={({ target }) => setDescription(target.value)}
            value={description}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={handleShare}>
          <div className="shareOptions">
            <div
              className="shareOption"
              onClick={() => setInputVisible(!inputVisible)}
            >
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button
            type="submit"
            variant="contained"
            color="primary"
            className="shareButton"
          >
            Share
          </button>
        </form>
        {inputVisible && (
          <input
            className="shareSource"
            type="url"
            value={inputSource}
            placeholder="源地址"
            onChange={({ target }) => setInputSource(target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default Share;
