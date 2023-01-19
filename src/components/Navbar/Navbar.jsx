import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  return (
    <div>
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={classes.item}>Settings</div>
      </nav>
      <Friends friends={props.state.friends} />
    </div>
  );
};

export default Navbar;
