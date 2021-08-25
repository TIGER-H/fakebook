import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import consts from "../../../shared/consts";
import "./featured.scss";

// type: movie/tv
export const Featured = ({ type }) => {
  const [upcoming, setUpcoming] = useState({});
  const genres = type === "movie" ? consts.GENRE_MOVIE : consts.GENRE_TV;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${consts.API_KEY}`
      )
      .then((res) => setUpcoming(res.data.results[0]));
  }, []);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            {genres.map((option) => (
              <option name={option.name} key={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <img
        src={`${consts.BASE_URL}${consts.SIZE}${upcoming.backdrop_path}`}
        alt=""
      />
      <div className="featuredInfo">
        <h1 className="featureTitle">{upcoming.title}</h1>
        <span className="featuredDesc">{upcoming.overview}</span>
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
