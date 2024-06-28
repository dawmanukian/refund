import React from "react";
import classes from "./store.module.css";
import Stores from "../../images/store_pg.png";

const Store = () => {
  const data = [
    {
      store: "Amazon.com",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "1-3 days",
      countries: "WORLDWIDE",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Amazon.ca",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "1-3 days",
      countries: "WORLDWIDE",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Amazon.co.uk",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "1-3 days",
      countries: "CA",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Amazon.es",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "3-7 days",
      countries: "WORLDWIDE",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Amazon.de",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "3-7 days",
      countries: "WORLDWIDE",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Amazon.fr",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "3-7 days",
      countries: "WORLDWIDE",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Amazon.au",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "5-9 days",
      countries: "AU",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Amazon.pl",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "3-7 days",
      countries: "WORLDWIDE",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Amazon.ae",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "5-9 days",
      countries: "AE, BH, KW, OM, QA, SA",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Amazon.sa",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "5-9 days",
      countries: "SA",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "Order for you",
      priceLimit: "$5000",
      itemLimit: "5",
      duration: "7-14 days",
      countries: "WORLDWIDE",
      notes:
        "No item and price limits for aged accounts. Apple products not included.",
    },
    {
      store: "PayPal.com",
      priceLimit: "∞",
      itemLimit: "∞",
      duration: "1-5 days",
      countries: "WORLDWIDE",
      notes:
        "Account must be at least 3-4 months old + at least one transaction.",
    },
  ];
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.data}>
          <div className={classes.info}>
            <span className={classes.head}>
              Learn what kind of data we collect, and how we use them.
            </span>
            <p>Storelist</p>
          </div>
          <img src={Stores} alt="" />
        </div>
      </div>
      {/* <div className={classes.page}>
        <div className={classes.page_data}>
          <span className={classes.pick}>Pick a Store of Your Choice</span>
          <div className={classes.table}>
            <div className={classes.ln}>
              <div className={classes.block}>Store</div>
              <div className={classes.block}>Price Limit</div>
              <div className={classes.block}>Item Limit</div>
              <div className={classes.block}>Duration</div>
              <div className={classes.block}>Countries</div>
              <div className={classes.block}>Notes</div>
            </div>
            <div className={classes.brand}></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Store;
