import "./sidebar.css";
import React, { useEffect, useState } from "react";
import {
  Bookmark,
  CalendarToday,
  Chat,
  Dashboard,
  ExpandMore,
  Notes,
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
      .get("/users")
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
            <Link to="/friends">
              <Chat className="sidebarIcon" />
              <span className="sidebarListText">Chat</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to="/video">
              <PlayCircleFilled className="sidebarIcon" />
              <span className="sidebarListText">Video</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to="/quotes">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListText">Quotes</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to="/portfolio">
              <CalendarToday className="sidebarIcon" />
              <span className="sidebarListText">Portfolio</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to="/memo">
              <Notes className="sidebarIcon" />
              <span className="sidebarListText">MD Editor</span>
            </Link>
          </li>
          <li className="sidebarItem">
            <Link to="/dashboard">
              <Dashboard className="sidebarIcon" />
              <span className="sidebarListText">Dashboard</span>
            </Link>
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
                  <Link
                    to={`/profile/${u.username}`}
                    className="sidebarFriendName"
                  >
                    <img
                      src={
                        u.profilePicture
                          ? u.profilePicture
                          : process.env.PUBLIC_URL + "/assets/default.png"
                      }
                      alt="profilepic"
                      className="sidebarFriendImg"
                    />
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
