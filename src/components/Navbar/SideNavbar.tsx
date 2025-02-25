import classes from "../../styles/Navbar.module.css";

import { NavLink } from "react-router-dom";

const SideNavbar: React.FC = () => {
  return (
    <>
      <div className={classes.options}>
        <NavLink to="/create">Create new Task</NavLink>
      </div>
      <div className={classes.options}>
        <NavLink to="/todos">View All Tasks</NavLink>
      </div>
      <div className={classes.options}>
        <NavLink to="/">Task scheduled today</NavLink>
      </div>
    </>
  );
};

export default SideNavbar;
