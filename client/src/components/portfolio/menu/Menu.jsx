import "./menu.scss";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu" + (menuOpen ? " active" : "")}>
      <ul>
        <li className="menulist">
          <a href="#home" className="Home">
            Home
          </a>
        </li>
        <li className="menulist">
          <a href="" className="Home">
            Home
          </a>
        </li>
        <li className="menulist">
          <a href="" className="Home">
            Home
          </a>
        </li>
      </ul>
    </div>
  );
};
