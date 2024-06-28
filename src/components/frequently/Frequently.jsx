import React from "react";
import classes from "./frequently.module.css";
import { ReactComponent as Arrow } from "../../images/chevron.svg";

const Frequently = () => {
  return (
    <section className={classes.section}>
      <p className={classes.header}>Frequently Asked Questions</p>
      <div className={classes.boxs}>
        <div className={classes.box}>
          <p>How does RefCat Refunds work?</p>
          <Arrow />
        </div>
        <div className={classes.box}>
          <p>How much does it cost?</p>
          <Arrow />
        </div>
        <div className={classes.box}>
          <p>How many times can I do this?</p>
          <Arrow />
        </div>
        <div className={classes.box}>
          <p>Is this service legal?</p>
          <Arrow />
        </div>
      </div>
    </section>
  );
};

export default Frequently;
