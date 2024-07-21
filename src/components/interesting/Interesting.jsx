import React from "react";
import classes from "./interesting.module.css";
import { ReactComponent as Arrows } from "../../images/arrows.svg";
import Reviews from "../../images/rev.png";
import Team from "../../images/team.png";
import Results from "../../images/results.png";
import Reliable from "../../images/Reliable service2.gif";

const Interesting = () => {
  return (
    <section className={classes.section}>
      <p className={classes.interesting}>
        Interesting? Check out the reviews below...
      </p>
      <div className={classes.arrows}>
        <Arrows />
      </div>
      <div>
        <div className={classes.box}>
          <div className={classes.texts}>
            <p className={classes.header}>Thousands of Reviews</p>
            <span>
              We have completed more than 1000 orders and left more than 300
              customers satisfied. Not many can boast of such an achievement.
              Feel free to work with us!
            </span>
          </div>
          <img src={Reviews} />
        </div>
        <div className={classes.box}>
          <img src={Team} />
          <div className={classes.texts}>
            <p className={classes.header}>Thousands of Reviews</p>
            <span>
              We have completed more than 1000 orders and left more than 300
              customers satisfied. Not many can boast of such an achievement.
              Feel free to work with us!
            </span>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.texts}>
            <p className={classes.header}>Thousands of Reviews</p>
            <span>
              We have completed more than 1000 orders and left more than 300
              customers satisfied. Not many can boast of such an achievement.
              Feel free to work with us!
            </span>
          </div>
          <img src={Reliable} style={{width: "591px", height: "368px"}}/>
        </div>
        <div className={classes.box}>
          <img src={Results} />
          <div className={classes.texts}>
            <p className={classes.header}>Thousands of Reviews</p>
            <span>
              We have completed more than 1000 orders and left more than 300
              customers satisfied. Not many can boast of such an achievement.
              Feel free to work with us!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interesting;
