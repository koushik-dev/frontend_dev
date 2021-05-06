import { NavLink as Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <span className="header__title">🧑‍💻Let's become a Frontend Dev 👩‍💻</span>
      </Link>
    </header>
  );
};

export default Header;
