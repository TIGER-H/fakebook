import "./sidebar.css";
import React, { useEffect, useState } from "react";
import {
  Bookmark,
  CalendarToday,
  Chat,
  ExpandMore,
  People,
  PlayCircleFilled,
  RssFeed,
} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users/all")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListText">Feed</span>
          </li>
          <li className="sidebarItem">
            <Link
              to="/friends"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Chat className="sidebarIcon" />
              <span className="sidebarListText">Chat</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListText">Video</span>
          </li>
          <li className="sidebarItem">
            <Link
              to="/quotes"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListText">Quotes</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <Link
              to="/portfolio"
              style={{ display: "flex", alignItems: "center" }}
            >
              <CalendarToday className="sidebarIcon" />
              <span className="sidebarListText">Portfolio</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <People className="sidebarIcon" />
            <span className="sidebarListText">Groups</span>
          </li>
          <li className="sidebarItem">
            <ExpandMore className="sidebarIcon" />
            <span className="sidebarListText">Show more</span>
          </li>

          <hr className="sidebarHr" />
          <h2>All users</h2>
          <ul className="sidebarFriendList">
            {users &&
              users.map((u) => (
                <li key={u._id} className="sidebarFriend">
                  <img
                    src="assets/1.png"
                    alt="profilepic"
                    className="sidebarFriendImg"
                  />
                  <Link
                    to={`/profile/${u.username}`}
                    className="sidebarFriendName"
                  >
                    {u.username}
                  </Link>
                </li>
              ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
