import React from "react";
import Message from "../../components/message/Message";
import Navbar from "../../components/navbar/Navbar";
import "./friends.css";

const Friends = () => {
  return (
    <div>
      <Navbar />
      <div className="friends">
        <div className="friendsSidebar">
          <div className="friendsSidebarTop">
            <div className="friendsSidebarTopinfo">
              <img
                src="assets/1.png"
                alt=""
                className="friendsSidebarTopAvatar"
              />
              <span className="friendsSidebarTopTitle">聊天</span>
            </div>
            <div className="friendsSidebarButtons">
              <div className="friendsSidebarButton">B</div>
              <div className="friendsSidebarButton">B</div>
            </div>
          </div>
          <div className="friendsSidebarSearchWrapper">
            <input
              placeholder="搜索联系人"
              className="friendsSidebarSearch"
            ></input>
          </div>

          <div className="friendsSidebarChats">
            <div className="friendsSidebarChat">
              <img
                src="assets/1.png"
                alt=""
                className="friendsSidebarChatAvatar"
              />
              <div className="friendsSidebarChatinfoWrapper">
                <div className="friendsSidebarChatUsername">Huang Sihao</div>
                <span className="friendsSidebarChatinfoLatest">latest</span>
                <span className="timeago">13 min</span>
              </div>
            </div>
            <div className="friendsSidebarChat">
              <img
                src="assets/1.png"
                alt=""
                className="friendsSidebarChatAvatar"
              />
              <div className="friendsSidebarChatinfoWrapper">
                <div className="friendsSidebarChatUsername">Huang Sihao</div>
                <span className="friendsSidebarChatinfoLatest">latest</span>
                <span className="timeago">13 min</span>
              </div>
            </div>
          </div>
        </div>
        <div className="friendsChatbox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop"></div>
            <div className="chatBoxContent">
              <Message own />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <input
                type="text"
                className="chatBoxInput"
                placeholder="Say something..."
              />
              <button className="chatBoxSend">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
