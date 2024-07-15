import React from "react";
import classes from "./home.module.css";
import { ReactComponent as Box } from "../../images/home_box.svg";
import { ReactComponent as BoxM } from "../../images/home_mob.svg";
import Why from "../../components/why-choose-us/Why";
import Work from "../../components/how-does-it-work/Work";
import Interesting from "../../components/interesting/Interesting";
import Text from "../../components/text/Text";
import Convinced from "../../components/convinced/Convinced";
import Frequently from "../../components/frequently/Frequently";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.page}>
      <div className={classes.home_header}>
        <div className={classes.data_m}>
          <BoxM />
          <p className={classes.mob_header}>Let us get your funds back</p>
          <p className={classes.mob_text}>
            Get your funds back, save valuable time and headache, and profit
            with RefCat Refunds, the most efficient refunding service of all
            time.
          </p>
          <Link to={"/order"}>
            <button className={classes.get_started_mob}>GET STARTED</button>
          </Link>
          <p className={classes.how_m}>HOW IT WORKS</p>
        </div>
        <div className={classes.data}>
          <div className={classes.texts}>
            <span className={classes.headers}>Let us get your</span>
            <span className={classes.headers}>Funds back</span>
            <span className={classes.info}>
              Get your funds back, save valuable time and headache, and profit
              with RefCat Refunds, the most efficient refunding service of all
              time.
            </span>
            <div className={classes.links}>
              <Link to={'/order'}>
                <button className={classes.get_started}>GET STARTED</button>
              </Link>
              <span>HOW IT WORKS</span>
            </div>
          </div>
          <Box />
        </div>
      </div>
      <Why />
      <Work />
      <Interesting />
      <Text />
      <Frequently />
      <Convinced />
    </div>
  );
};

export default Home;
