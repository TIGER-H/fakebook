import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='Navbarcontainer'>
      <div className='NavbarLeft'>
        <span className='logo'>Fakebook</span>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input placeholder='Search Fakebook' className='searchInput' />
        </div>
      </div>

      <div className='NavbarCenter'>
        <div className='navfeed'>Homepage</div>
        <div className='navfriends'>Friends</div>
      </div>

      <div className='NavbarRight'>
        <div className='navbarIcons'>
          <div className='navbarIconItem'>
            <Person />
            <span className='navbarIconBadge'>1</span>
          </div>
          <div className='navbarIconItem'>
            <Chat />
            <span className='navbarIconBadge'>1</span>
          </div>
          <div className='navbarIconItem'>
            <Notifications />
            <span className='navbarIconBadge'>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
