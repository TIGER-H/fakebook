import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listitem.scss";
export const ListItem = ({ index }) => {
  const [isHoverd, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listitem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHoverd && index * 225 - 50 + index * 2.5 }}
    >
      <img
        src="http://www.nexushd.org/attachments/202001/202001051516284041fde2171940cde5a5e490bb78bc17.jpg.thumb.jpg"
        alt=""
      />
      {isHoverd && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="listItemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 40 mins</span>
              <span className="itemInfoAgeLimit">+16</span>
              <span>1999</span>
            </div>
            <div className="itemInfodesc">
              Documentation and examples for Bootstrap typography, including
              global settings, headings, body text, lists, and more.
            </div>
            <div className="itemInfogenre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};
