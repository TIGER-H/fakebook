import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="Navbarcontainer">
      <div className="NavbarLeft">
        <Link to="/" >
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
        <div className="navbarUser">
          <img src="assets/1.png" alt="" className="navbarUserAvatar" />
          <span className="navbarUsername">Taige Huang</span>
        </div>
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
