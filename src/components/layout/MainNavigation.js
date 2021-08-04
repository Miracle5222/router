import { Link } from "react-router-dom";
import classes from "./MainNavigation.modules.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>Hello</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetups</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/NewMeetups">NewMeetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
