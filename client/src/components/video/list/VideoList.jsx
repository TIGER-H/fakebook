import "./videolist.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { ListItem } from "./listitem/ListItem";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import consts from "../../../shared/consts";

export const VideoList = ({ type }) => {
  const [list, setList] = useState([]);
  console.log(type, list);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${consts.API_KEY}&page=1`
      )
      .then((res) => setList(res.data.results.slice(0, 10)));
  }, []);

  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right") {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="videoList">
      <span className="listTitle">{type.split("_").join(" ")}</span>
      <div className="listWrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {list.map((listitem, index) => (
            <ListItem itemid={listitem.id} index={index} key={listitem.id} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};
