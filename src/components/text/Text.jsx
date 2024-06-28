import React from "react";
import classes from "./text.module.css";
import Top from "../../images/top.png";
import Btm from "../../images/btm.png";

const Text = () => {
  return (
    <section className={classes.section}>
      <div className={classes.block}>
        <img src={Top} alt="" className={classes.top} />
        <p className={classes.text}>
          Our measure of success? Your satisfaction
        </p>
        <img src={Btm} alt="" className={classes.btm} />
      </div>
      <div className={classes.lines}>
        <div className={classes.r}></div>
        <div className={classes.line}></div>
        <div className={classes.r}></div>
      </div>
      <p className={classes.command}>RefCat command</p>
    </section>
  );
};

export default Text;
