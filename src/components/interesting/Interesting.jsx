import React from "react";
import classes from "./interesting.module.css";
import Arrows from "../../images/down.gif";
import Reviews from "../../images/rev.png";
import Team from "../../images/Team-of-Lawyers2.gif";
import Results from "../../images/Guaranteed-Results2.gif";
import Reliable from "../../images/Reliable service2.gif";

const Interesting = () => {
  return (
    <section className={classes.section}>
      <p className={classes.interesting}>
        Interesting? Check out the reviews below...
      </p>
      <div className={classes.arrows}>
        <img
          loading="lazy"
          src={Arrows}
          height={"164px"}
          width={"164px"}
          alt=""
          style={{ objectFit: "contain" }}
        />
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
          <img src={Reviews} loading="lazy" />
        </div>
        <div className={classes.box}>
          <div style={{ minWidth: "591px", textAlign: "center" }}>
            <img src={Team} height={"368px"} loading="lazy" />
          </div>
          <div className={classes.texts}>
            <p className={classes.header}>Team of Lawyers</p>
            <span>
              We collaborate with a team of corporate lawyers who have years of
              experience in the refunding industry, ensuring the highest
              possible success rate when it comes to getting your funds back.
            </span>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.texts}>
            <p className={classes.header}>Reliable service</p>
            <span>
              RefCat has been the most efficient, reliable, and reputable
              refunding service on the market for years. We will get your refund
              done without a doubt.Our customer support is available to answer
              over Telegram anytime, to any inquiries you may have in your mind.
            </span>
          </div>
          <img src={Reliable} style={{ width: "591px", height: "368px" }} />
        </div>
        <div className={classes.box}>
          <div style={{ minWidth: "591px", textAlign: "center" }}>
            <img src={Results} height={"368px"} loading="lazy" />
          </div>
          <div className={classes.texts}>
            <p className={classes.header}>Guaranteed Results</p>
            <span>
              Even though words are nice, we focus on providing maximized
              results in as short timeframe as possible. Get in touch to learn
              more!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interesting;
