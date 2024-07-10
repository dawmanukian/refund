import React from "react";
import classes from "./mobile-menu.module.css";

const MobileMenu = ({ onHideMenu }) => {
  return (
    <div className={classes.menu}>
      <svg
        onClick={onHideMenu}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div>
        <ul>
          <a href="./contacts">
            <li>Contacts</li>
          </a>
          <a href="./stores">
            <li>Stores</li>
          </a>
          <a href="./faq">
            <li>FAQ</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
