import classes from "../../styles/Navbar.module.css";

const SideNavbar: React.FC = () => {
  return (
    <>
      <div className={classes.options}>Create new Task</div>
      <div className={classes.options}>View All Tasks</div>
      <div className={classes.options}>Task scheduled today</div>
      <div className={classes.options}>Info</div>
    </>
  );
};

export default SideNavbar;
