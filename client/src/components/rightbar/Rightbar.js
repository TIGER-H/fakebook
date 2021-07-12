import "./rightbar.css";
import React from "react";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/1.png" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Username</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
