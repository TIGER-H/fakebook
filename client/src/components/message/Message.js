import React from "react";
import TimeAgo from "timeago-react";
import "./message.css";

const Message = ({ own, message }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src="assets/1.png" alt="" className="messageImg" />
        <p className="messageText">{message?.text}</p>
      </div>
      <div className="messageBottom">
        <TimeAgo
          datetime={message.createdAt}
          locale="zh_CN"
          className="messageDate"
        />
      </div>
    </div>
  );
};

export default Message;
