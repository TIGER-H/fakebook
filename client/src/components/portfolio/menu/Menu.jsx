import "./menu.scss";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  const menuList = ["intro", "portfolio", "works", "testimonials", "contact"];
  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={"menu" + (menuOpen ? " active" : "")}>
      <ul>
        {menuList.map((menuItem) => (
          <li key={menuItem}>
            <a href={`#${menuItem}`} className="menuListText" onClick={handleClick}>{menuItem}</a>
          </li>
        ))}
        {/* <li className="menulist" onClick={handleClick}>
          <a href="#intro" className="menuListText">
            Intro
          </a>
        </li>
        <li className="menulist">
          <a href="#portfolio" className="menuListText">
            Portfolio
          </a>
        </li>
        <li className="menulist">
          <a href="#works" className="menuListText">
            Works
          </a>
        </li>
        <li className="menulist">
          <a href="#testimonials" className="menuListText">
            Testimonials
          </a>
        </li>
        <li className="menulist">
          <a href="#contact" className="menuListText">
            Contact
          </a>
        </li> */}
      </ul>
    </div>
  );
};
