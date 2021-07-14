import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./share.css";

const Share = () => {
  const { user } = useContext(AuthContext);
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
            placeholder="shareInput Here"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
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
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
