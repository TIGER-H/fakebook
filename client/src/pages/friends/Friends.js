import React, { useContext, useEffect, useRef, useState } from "react";
import Message from "../../components/message/Message";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import "./friends.css";
import axios from "axios";
import Conversation from "../../components/conversation/Conversation";

const baseUrl = "http://localhost:3001";

const Friends = () => {
  const { user } = useContext(AuthContext);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    try {
      const getConversations = async () => {
        const { data } = await axios.get(
          baseUrl + `/api/conversation/${user._id}`
        );
        setConversations(data);
      };
      getConversations();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get("/message/" + currentChat?._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    try {
      const { data } = await axios.post("/message", message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

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
          {conversations.map((c) => (
            <div key={c._id} onClick={() => setCurrentChat(c)}>
              <Conversation conversation={c} currentUser={user} />
            </div>
          ))}
        </div>
        <div className="friendsChatbox">
          {currentChat ? (
            <div className="chatBoxWrapper">
              <div className="chatBoxTop"></div>
              <div className="chatBoxContent">
                {messages.map((m) => (
                  <div ref={scrollRef}>
                    <Message
                      key={m._id}
                      message={m}
                      own={m.sender === user._id}
                    />
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="chatBoxBottom">
                <input
                  type="text"
                  className="chatBoxInput"
                  placeholder="Say something..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit" className="chatBoxSend">
                  send
                </button>
              </form>
            </div>
          ) : (
            <p className="noConversationText">Open a conversation to start!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;
