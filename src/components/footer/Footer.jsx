import React from "react";
import classes from "./footer.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Telegram } from "../../images/tg.svg";
import { ReactComponent as WhatsApp } from "../../images/wa.svg";
import { ReactComponent as DiscordM } from "../../images/dc_m.svg";
import { ReactComponent as TelegramM } from "../../images/tg_m.svg";
import { ReactComponent as Discord } from "../../images/dc.svg";
import { ReactComponent as EmailM } from "../../images/mail_m.svg";
import { ReactComponent as Email } from "../../images/email.svg";
import { ReactComponent as Logo } from "../../images/Logo2.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.data}>
        <div className={classes.panel}>
          <Logo />
          <p className={classes.refcat}>
            RefCat Refunds is the industry leading refund service, providing
            efficient solutions to its customers with notable results.
          </p>
        </div>
        <div className={classes.links_panel}>
          <div className={classes.links}>
            <Link to={"/contacts"}>Contacts</Link>
            <Link to={"/stores"}>Stores</Link>
            <Link to={"/order"}>Order</Link>
          </div>
          <div className={classes.links}>
            <Link to={"/faq"}>FAQ</Link>
            <Link to={"/privacy"}>Privacy</Link>
            <Link to={"/terms"}>Terms</Link>
          </div>
        </div>
      </div>
      <div className={classes.social}>
        <div className={classes.texts}>
          <span>All Rights Reserved © RefCat 2024.</span>
          <div className={classes.line}></div>
          <span>Terms and Conditions</span>
        </div>
        <div className={classes.soc}>
          <Telegram />
          <WhatsApp />
          <Discord />
          <Email />
        </div>
      </div>
      <div className={classes.data_m}>
        <div className={classes.links_panel}>
          <div className={classes.links}>
            <Link to={"/contacts"}>Contacts</Link>
            <Link to={"/stores"}>Stores</Link>
            <Link to={"/order"}>Order</Link>
          </div>
          <div className={classes.links}>
            <Link to={"/faq"}>FAQ</Link>
            <Link to={"/privacy"}>Privacy</Link>
            <Link to={"/terms"}>Terms</Link>
          </div>
        </div>
        <div className={classes.text_block}>
          <p>RefCat Refunds is the industry leading refund service,</p>
          <p>providing efficient</p>
          <p>solutions to its customers with notable results.</p>
        </div>
        <div className={classes.m_links}>
          <TelegramM />
          <DiscordM />
          <EmailM />
        </div>
        <p className={classes.trm}>All Rights Reserved © RefCat 2024.</p>
        <p className={classes.trm}>Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
