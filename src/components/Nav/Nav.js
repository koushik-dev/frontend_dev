import "./Nav.scss";
import { NavLink as Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link className="nav__link" activeClassName="nav__link__active" to="/html">HTML</Link>
      <Link className="nav__link" activeClassName="nav__link__active" to="/css">CSS</Link>
      <Link className="nav__link" activeClassName="nav__link__active" to="/js">Javascript</Link>
      <Link className="nav__link" activeClassName="nav__link__active" to="/jsx">React</Link>
    </nav>
  );
};

export default Nav;
