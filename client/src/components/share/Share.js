import { Button } from "@material-ui/core";
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./share.css";

const Share = () => {
  const { user } = useContext(AuthContext);
  const [description, setDescription] = useState("");
  // const description = useRef();
  const [file, setFile] = useState(null);

  const handleShare = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description,
    };
    setDescription("");
    try {
      await axios.post("http://localhost:3001/api/post", newPost);
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
            <label htmlFor="file" className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
      </div>
    </div>
  );
};

export default Share;
