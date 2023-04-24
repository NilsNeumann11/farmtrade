import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul className="nav-positioning">
          <li className="nav-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/events"}>Events</Link>
          </li>
          <li className="nav-item">
            <Link to={"/freshboard"}>Fresh Board</Link>
          </li>
          <li className="nav-item">
            <Link to={"/whatsnew"}>What`s new</Link>
          </li>
          <li className="nav-item">
            <Link to={"/profile"}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
