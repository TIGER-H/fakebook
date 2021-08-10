import "./rightbar.css";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Loading } from "../loading/Loading";

const Rightbar = () => {
  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  useEffect(() => {
    const getFriends = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "http://localhost:3001/api/users/friends/" + user._id
        );
        setFriends(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);
  // if (isLoading) return <Loading type="rightSk" />;
  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <h4 className="rightbarTitle">Friends</h4>

        <ul className="rightbarFriendsList">
          {isLoading ? (
            <Loading type="rightSk" />
          ) : (
            friends.map((friend) => (
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
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
