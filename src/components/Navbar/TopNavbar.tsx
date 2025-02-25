import classes from "../../styles/Navbar.module.css";

const TopNavbar: React.FC = () => {
  return (
    <div className={classes.topnav}>
      <div className={classes.appname}>Todos</div>
      <input
        type="search"
        className={classes.searchInput}
        placeholder="Search task....."
      />
    </div>
  );
};

export default TopNavbar;
