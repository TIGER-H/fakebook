import { KeyboardArrowDown } from "@material-ui/icons";
import "./intro.scss";

export const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="https://pbs.twimg.com/media/E7iKbwQUcAMb0Vu?format=jpg&name=900x900" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Taige Huang</h1>
          <h3>
            Neverland<span>UZZU</span>
          </h3>
          <a href="#portfolio">
            <KeyboardArrowDown fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};
