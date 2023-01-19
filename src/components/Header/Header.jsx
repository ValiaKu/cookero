import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src='https://237693.n3cdn1.secureserver.net/wp-content/themes/scaleet/assets/img/scaleet-logo.svg'
        alt='Pic'></img>
    </header>
  );
};

export default Header;
