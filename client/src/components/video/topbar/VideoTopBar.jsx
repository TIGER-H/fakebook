import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./videotopbar.scss";

export const VideoTopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

  return (
    <div className={isScrolled ? "videoTopbar scrolled" : "videoTopbar"}>
      <div className="videoTopbarContainer">
        <div className="videoTopbarLeft">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="videoTopbarRight">
          <Search className="icon" />
          <Notifications className="icon" />
          <img
            src="https://th.bing.com/th/id/OIP.GmE7pKa1eon7JYYjDc56AQHaKg?pid=ImgDet&rs=1"
            alt=""
          />
          <div className="topbarProfile">
            <ArrowDropDown className="icon" />
            <div className="topbar-options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
