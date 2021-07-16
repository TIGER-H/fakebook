import "./rightbar.css";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Rightbar = () => {
  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  

  useEffect(() => {
    const getFriends = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3001/api/users/friends/" + user._id
        );
        console.log("getFriends!");
        setFriends(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <h4 className="rightbarTitle">Friends</h4>

        <ul className="rightbarFriendsList">
          {friends.map((friend) => (
            <li key={friend._id} className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src={
                    friend.profilePicture
                      ? friend.profilePicture
                      : process.env.PUBLIC_URL + "/assets/default.png"
                  }
                  alt=""
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <Link
                to={`profile/${friend.username}`}
                className="rightbarUsername"
                style={{ textDecoration: "none" }}
              >
                {friend.username}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
