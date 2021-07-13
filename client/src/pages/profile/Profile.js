import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Post from "../../components/post/Post";
import Share from "../../components/share/Share";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.css";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="profile">
        <div className="profileTop">
          <div className="profileCover">
            <img src="assets/cover.png" alt="" className="profileCoverImg" />
            <img src="assets/1.png" alt="" className="profileAvatar" />
          </div>
          <div className="profileUserInfo">
            <span className="profileUsername">Taige Huang</span>
            <span className="profileUserDesc">Halo</span>
          </div>
        </div>
        <div className="profileBottom">
          <div className="profileBottomLeft">
            <Sidebar />
          </div>
          <div className="profileBottomRight">
            <Share />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
