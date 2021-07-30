import { Mail, Person } from "@material-ui/icons";
import "./topbar.scss";

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar" + (menuOpen ? " active" : "")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="p-logo">
            TG Huang
          </a>
          <div className="itemContainer">
            <Person className="icon" />{" "}
            <span style={{ marginRight: 10 }}>+86 137 3227 6503</span>
            <Mail className="icon" />
            <span>tigerhqaq@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
