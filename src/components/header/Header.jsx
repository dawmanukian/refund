import React, { useState } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { ReactComponent as LogoM } from "../../images/logo_mob.svg";
import { ReactComponent as Menu } from "../../images/menu.svg";
import MobileMenu from "../mobile_menu/MobileMenu";
import { useLocation } from "react-router-dom";

const Header = ({onOpen}) => {

  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation();

  return (
    <header className={classes.header}>
      <div className={classes.links}>
        <Link to={"/"} style={{ margin: "0px" }}>
          <LogoM className={classes.logoM}/>
        </Link>
        <Link to={"/"} style={{ margin: "0px" }}>
          <Logo />
        </Link>
        <Link to={"/contacts"} className={classes.lnk} style={location.pathname === "/contacts" ? { borderBottom: "2px solid #fff" } : null}>Contacts</Link>
        <Link to={"/stores"} className={classes.lnk} style={location.pathname === "/stores" ? { borderBottom: "2px solid #fff" } : null}>Stores</Link>
        <Link to={"/faq"} className={classes.lnk} style={location.pathname === "/faq" ? { borderBottom: "2px solid #fff" } : null}>FAQ</Link>
      </div>
      <Link to={"/order"}>
        <button className={classes.submit}>SUBMIT ORDER</button>
      </Link>
      <Menu className={classes.menu_icon} onClick={onOpen}/>
    </header>
  );
};

export default Header;
