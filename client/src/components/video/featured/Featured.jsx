import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{true === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option >Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="http://www.nexushd.org/attachments/202108/20210809134311d48f8d76f7dbeb17cbedab51562ecca7.png"
        alt=""
      />
      <div className="featuredInfo">
        <span className="featuredDesc">
          2020年夏季奥林匹克运动会闭幕式于当地时间2021年8月8日星期日晚上在东京国立竞技场举行。奥运会旗将从东京移交到2024年夏季奥林匹克运动会举办城市巴黎。
          2020年东京奥运会闭幕式理念 “Worlds we share”
        </span>
        <div className="featuredButtons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
};
