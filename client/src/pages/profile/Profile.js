import { Add, Remove } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { AuthContext } from "../../context/AuthContext";
import "./profile.css";
import userService from "../../services/users";

const Profile = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);
  const PF = `${process.env.PUBLIC_URL}/assets/`;

  useEffect(() => {
    // returned a Promise.
    userService.getOneByUsername(username).then((data) => {
      setUser(data);
      setFollowed(currentUser.following.includes(data._id));
    });
  }, [username, currentUser.following]);

  const handleFollow = async () => {
    try {
      if (followed) {
        userService.unfollow(user._id, currentUser._id);
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        userService.follow(user._id, currentUser._id);
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="profile">
        <div className="profileTop">
          <div className="profileCover">
            <img
              src={user.coverPicture ? user.coverPicture : PF + "cover.png"}
              alt=""
              className="profileCoverImg"
            />
            <img
              src={
                user.profilePicture ? user.profilePicture : PF + "default.png"
              }
              alt=""
              className="profileAvatar"
            />
          </div>
          <div className="profileUserInfo">
            <span className="profileUsername">{user.username}</span>
            <span className="profileUserDesc">{user.description}</span>
          </div>
        </div>
        <div className="profileMiddle">
          <div className="profileMiddleContainer">
            <Link to={`/profile/${user.username}`} className="profileFloatUser">
              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : process.env.PUBLIC_URL + "/assets/default.png"
                }
                alt=""
                className="profileFloatUserAvatar"
              />
              <span className="profileFloatUsername">{user.username}</span>
            </Link>
            {user.username !== currentUser.username && (
              <div className="profileFollowButton" onClick={handleFollow}>
                {followed ? "Unfollow" : "Follow"}
                {followed ? <Remove /> : <Add />}
              </div>
            )}
          </div>
        </div>
        <div className="profileBottom">
          <div className="profileBottomLeft">
            <Sidebar className="profileSidebar" />
          </div>
          <div className="profileBottomRight">
            <Feed username={username} className="profileFeed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
