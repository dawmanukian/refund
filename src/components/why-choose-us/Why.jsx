import React from "react";
import classes from "./why.module.css";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as Low } from "../../images/low.svg";
import { ReactComponent as Regular } from "../../images/regular.svg";
import { ReactComponent as UpTo } from "../../images/upto.svg";

import { ReactComponent as Amazon } from "../../images/amazon.svg";
import { ReactComponent as Apple } from "../../images/apple.svg";
import { ReactComponent as PayPal } from "../../images/paypal.svg";
import { ReactComponent as Dell } from "../../images/dell.svg";
import { ReactComponent as Ebay } from "../../images/ebay.svg";
import { ReactComponent as Razer } from "../../images/razer.svg";

const Why = () => {
  return (
    <section className={classes.section}>
      <p className={classes.header}>Why choose us?</p>
      <div className={classes.boxs}>
        <div className={classes.box}>
          <div className={classes.head}>
            <Heart />
            <span>Most Customer & Centric service</span>
          </div>
          <p>
            Our service is the epitome of customer-centricity, consistently
            prioritizing your needs above all else to ensure unparalleled
            satisfaction.
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.head}>
            <Low />
            <span>Low price & HIGH quality</span>
          </div>
          <p>
            We deliver the perfect balance of low prices and high quality,
            ensuring you receive what do you need without compromising on
            service standards.
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.head}>
            <Regular />
            <span>Regular UPDATES</span>
          </div>
          <p>
            We ensure your satisfaction by providing regular updates to meet and
            exceed your expectations.
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.head}>
            <UpTo />
            <span>Up-to-date methods</span>
          </div>
          <p>
            For work, we use only our own developments, as well as unpopular
            methods of completing the order for maximum speed
          </p>
        </div>
      </div>
      <div>
        <p className={classes.get_ref}>GET REFUNDS FROM TOP COMPANIES</p>
        <div className={classes.brands}>
          <Amazon />
          <Apple />
          <PayPal />
          <Ebay />
          <Dell />
          <Razer />
        </div>
      </div>
    </section>
  );
};

export default Why;
