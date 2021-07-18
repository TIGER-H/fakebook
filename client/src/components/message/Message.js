import React from "react";
import "./message.css";

const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src="assets/1.png" alt="" className="messageImg" />
        <p className="messageText">
          say something!!ay something!!ay something!!ay something!!ay
          something!!ay something!!ay something!!ay something!!ay something!!ay
          something!!ay something!!ay something!!ay something!!ay something!!ay
          something!!ay something!!
        </p>
      </div>
      <div className="messageBottom">1 min ago</div>
    </div>
  );
};

export default Message;
