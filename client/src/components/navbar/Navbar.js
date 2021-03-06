import {
  Search,
  Person,
  Chat,
  Notifications,
  Home,
  People,
} from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    window.localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="Navbarcontainer">
      <div className="NavbarLeft">
        <Link to="/">
          <span className="logo">Fakebook</span>
        </Link>
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search Fakebook" className="searchInput" />
        </div>
      </div>

      <div className="NavbarCenter">
        <div className="navfeed">
          <Link to="/">
            <Home fontSize="large" color="primary">
              Homepage
            </Home>
          </Link>
        </div>
        <div className="navfriends">
          <Link>
            <People fontSize="large">Friends</People>
          </Link>
        </div>
      </div>

      <div className="NavbarRight">
        <Link to={`/profile/${user.username}`} className="navbarUser">
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : process.env.PUBLIC_URL + "/assets/default.png"
            }
            alt=""
            className="navbarUserAvatar"
          />
          <span className="navbarUsername">{user.username}</span>
        </Link>
        <button className="navbarLogout" onClick={handleLogout}>
          Log out
        </button>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person className="navbarIcon" />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat className="navbarIcon" />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Notifications className="navbarIcon" />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
