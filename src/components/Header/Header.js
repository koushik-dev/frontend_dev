import { NavLink as Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <span className="header__title">π§βπ»Let's become a Frontend Dev π©βπ»</span>
      </Link>
    </header>
  );
};

export default Header;
