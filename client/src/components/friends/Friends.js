import axios from "axios";
import React, { useEffect, useState } from "react";

const Friends = ({ username }) => {
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/users/?username=${username}`);
      const friendsList = await axios.get(`/users/friends/${data._id}`);
      setFriends(friendsList.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div className="friends">
      {friends.map((friend) => (
        <div>{friend.username}</div>
      ))}
      <div className="followings">
        <div className="followingContainer">
          <img src="" alt="" className="friendImg" />
          <div className="friendName"></div>
        </div>
      </div>
      <div className="followers">
        <div className="followerContainer">
          <img src="" alt="" className="friendImg" />
          <div className="friendName"></div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
