import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { ReactComponent as LogoM } from "../../images/logo_mob.svg";
import { ReactComponent as Menu } from "../../images/menu.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.links}>
        <Link to={"/"} style={{ margin: "0px" }}>
          <LogoM className={classes.logoM}/>
        </Link>
        <Link to={"/"} style={{ margin: "0px" }}>
          <Logo />
        </Link>
        <Link to={"/contacts"}>Contacts</Link>
        <Link to={"/stores"}>Stores</Link>
        <Link to={"/faq"}>FAQ</Link>
      </div>
      <Link to={"/order"}>
        <button className={classes.submit}>SUBMIT ORDER</button>
      </Link>
      <Menu className={classes.menu_icon} />
    </header>
  );
};

export default Header;
