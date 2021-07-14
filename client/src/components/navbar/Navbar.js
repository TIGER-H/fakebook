import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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
        <div className="navfeed">Homepage</div>
        <div className="navfriends">Friends</div>
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
          <span className="navbarUsername">Taige Huang</span>
        </Link>
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
