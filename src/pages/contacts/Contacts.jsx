import React from "react";
import classes from "./contacts.module.css";
import { ReactComponent as Tg } from "../../images/telegram.svg";
import { ReactComponent as Dc } from "../../images/discord.svg";
import { ReactComponent as Mail } from "../../images/mail.svg";
import { ReactComponent as TgD } from "../../images/tg_.svg";
import { ReactComponent as DcD } from "../../images/dc_.svg";
import { ReactComponent as MailD } from "../../images/mail_.svg";

const Contacts = () => {
  return (
    <div>
      <div className={classes.contacts}>
        <svg
          width="758"
          height="398"
          viewBox="0 0 758 398"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_320_1200)">
            <ellipse cx="379" cy="199" rx="279" ry="99" fill="#373737" />
          </g>
          <defs>
            <filter
              id="filter0_f_320_1200"
              x="0"
              y="0"
              width="758"
              height="398"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_320_1200"
              />
            </filter>
          </defs>
        </svg>
        <div className={classes.data}>
          <span>Have questions? Write to us...</span>
          <p>Contacts</p>
        </div>
      </div>
      <div className={classes.soc}>
        <div className={classes.soc_data}>
          <div className={classes.sc_panel}>
            <a href="https://t.me/RefCat_Connect" className={classes.sc}>
              <span className={classes.header}>Telegram</span>
              <Tg className={classes.icon} />
              <span className={classes.click}>Click here...</span>
            </a>
            <a href="https://t.me/RefCat_Connect" className={classes.sc}>
              <span className={classes.header}>Discord</span>
              <Dc className={classes.icon} />
              <span className={classes.click}>Click here...</span>
            </a>
            <a href="https://t.me/RefCat_Connect" className={classes.sc}>
              <span className={classes.header}>Gmail</span>
              <Mail className={classes.icon} />
              <span className={classes.click}>Click here...</span>
            </a>
          </div>
          <div className={classes.soc_inf}>
            <p className={classes.help}>Can't get over?</p>
            <span className={classes.inf}>Copy the data from here:</span>
            <div className={classes.links}>
              <div className={classes.soc_link}>
                <TgD />
                <span>https://t.me/RefCat_Connect</span>
              </div>
              <div className={classes.soc_link}>
                <DcD />
                <span>Discord</span>
              </div>
              <div className={classes.soc_link}>
                <MailD />
                <span>RefCat@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
