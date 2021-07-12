import './sidebar.css';
import React from 'react';
import {
  Bookmark,
  CalendarToday,
  Chat,
  ExpandMore,
  People,
  PlayCircleFilled,
  RssFeed,
} from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarItem'>
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListText'>Feed</span>
          </li>
          <li className='sidebarItem'>
            <Chat className='sidebarIcon' />
            <span className='sidebarListText'>Chat</span>
          </li>
          <li className='sidebarItem'>
            <PlayCircleFilled className='sidebarIcon' />
            <span className='sidebarListText'>Video</span>
          </li>
          <li className='sidebarItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListText'>Bookmark</span>
          </li>
          <li className='sidebarItem'>
            <CalendarToday className='sidebarIcon' />
            <span className='sidebarListText'>Events</span>
          </li>
          <li className='sidebarItem'>
            <People className='sidebarIcon' />
            <span className='sidebarListText'>Groups</span>
          </li>
          <li className='sidebarItem'>
            <ExpandMore className='sidebarIcon' />
            <span className='sidebarListText'>Show more</span>
          </li>

          <hr className='sidebarHr' />
          <ul className='sidebarFriendList'>
            <li className='sidebarFriend'>
              <img src='assets/1.png' alt='profilepic' className='sidebarFriendImg' />
              <span className='sidebarFriendName'>Taige Huang</span>
            </li>
            <li className='sidebarFriend'>
              <img src='assets/1.png' alt='profilepic' className='sidebarFriendImg' />
              <span className='sidebarFriendName'>Taige Huang</span>
            </li>
            <li className='sidebarFriend'>
              <img src='assets/1.png' alt='profilepic' className='sidebarFriendImg' />
              <span className='sidebarFriendName'>Taige Huang</span>
            </li>
            <li className='sidebarFriend'>
              <img src='assets/1.png' alt='profilepic' className='sidebarFriendImg' />
              <span className='sidebarFriendName'>Taige Huang</span>
            </li>
            <li className='sidebarFriend'>
              <img src='assets/1.png' alt='profilepic' className='sidebarFriendImg' />
              <span className='sidebarFriendName'>Taige Huang</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
