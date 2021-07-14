import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/api/users?username=${username}`
      );
      setUser(data);
      console.log(data);
    };
    fetchUser();
  }, []);

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
            <span className="profileUsername">{user.username}</span>
            <span className="profileUserDesc">{user.description}</span>
          </div>
        </div>
        <div className="profileBottom">
          <div className="profileBottomLeft">
            <Sidebar />
          </div>
          <div className="profileBottomRight">
            <Feed username="test" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
