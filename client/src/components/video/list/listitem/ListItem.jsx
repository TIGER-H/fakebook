import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import consts from "../../../../shared/consts";

import "./listitem.scss";

export const ListItem = ({ itemid, index }) => {
  const [isHoverd, setIsHovered] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${itemid}?api_key=${consts.API_KEY}`
      )
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, []);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listitem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // style={{ left: isHoverd && index * 225 - 50 + index * 2.5 }}
    >
      <img src={`${consts.BASE_URL}${consts.SIZE}${item.poster_path}`} alt="" />
      {isHoverd && (
        <div className="listItemHoverContainer">
          <video src={trailer} autoPlay={true} loop></video>
          <div className="listItemInfo">
            <h3 className="listItenTie">{item.title}</h3>
            <div className="itemInfoTop">
              <span>{item.runtime} min</span>
              <span className="itemInfoAgeLimit">
                {item.adult ? "ADULT" : "ALL"}
              </span>
              <span>{item.release_date}</span>
            </div>
            <div className="itemInfodesc">{item.overview}</div>
            {item.genres.map((genre) => (
              <span className="itemInfogenre" key={genre.id}>
                {genre.name}
              </span>
            ))}
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
