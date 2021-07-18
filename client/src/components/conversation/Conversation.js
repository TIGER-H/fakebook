import axios from "axios";
import React, { useEffect, useState } from "react";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const { data } = await axios.get("/users?userId=" + friendId);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [conversation, currentUser]);

  return (
    <div className="friendsSidebarChats">
      <div className="friendsSidebarChat">
        <img
          src={
            user?.profilePicture
              ? user.profilePicture
              : process.env.PUBLIC_URL + "assets/1.png"
          }
          alt=""
          className="friendsSidebarChatAvatar"
        />
        <div className="friendsSidebarChatinfoWrapper">
          <div className="friendsSidebarChatUsername">{user?.username}</div>
          <span className="friendsSidebarChatinfoLatest">latest</span>
          <span className="timeago">13 min</span>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
