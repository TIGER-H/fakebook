import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { useState } from "react";
import "./works.scss";

const datas = [
  {
    id: "1",
    icon: "http://starship-ent.com/img/logo.png",
    title: "Web Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
  },
  {
    id: "2",
    icon: "http://starship-ent.com/img/logo.png",
    title: "Mobile Application",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  },
  {
    id: "3",
    icon: "http://starship-ent.com/img/logo.png",
    title: "Branding",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  },
];

export const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : datas.length - 1)
      : setCurrentSlide(currentSlide < datas.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works">
      <div className="arrow left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeft
          // style={{
          //   marginRight: 100,
          //   cursor: "pointer",
          //   color: "white",
          // }}
          fontSize="large"
        />
      </div>
      <div className="arrow right" onClick={handleClick}>
        <KeyboardArrowRight
          // style={{ marginLeft: 100, cursor: "pointer", color: "white" }}
          fontSize="large"
        />
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {datas.map((data) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <span>Go to</span>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
