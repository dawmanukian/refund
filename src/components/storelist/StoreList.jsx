import React from "react";
import classes from "./storelist.module.css";
import { ReactComponent as Amazon } from "./com.svg";
import { ReactComponent as PayPal } from "./com (1).svg";

const StoreList = () => {
  return (
    <div className={classes.storelist}>
      <div>
        <span>Store</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>Notes</span>
      </div>
      <div>
        <Amazon className={classes.a_icon}/>
      </div>
      <div>
        <span>Amazon.com</span>
        <span>∞</span>
        <span>∞</span>
        <span>1-3 days</span>
        <span>WORLDWIDE</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.ca</span>
        <span>∞</span>
        <span>∞</span>
        <span>1-3 days</span>
        <span>WORLDWIDE</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.co.uk</span>
        <span>∞</span>
        <span>∞</span>
        <span>1-3 days</span>
        <span>CA</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.es</span>
        <span>∞</span>
        <span>∞</span>
        <span>3-7 days</span>
        <span>WORLDWIDE</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.de</span>
        <span>∞</span>
        <span>∞</span>
        <span>3-7 days</span>
        <span>WORLDWIDE</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.fr</span>
        <span>∞</span>
        <span>∞</span>
        <span>3-7 days</span>
        <span>WORLDWIDE</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.au</span>
        <span>∞</span>
        <span>∞</span>
        <span>5-9 days</span>
        <span>AU</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.pl</span>
        <span>∞</span>
        <span>∞</span>
        <span>3-7 days</span>
        <span>WORLDWIDE</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.ae</span>
        <span>∞</span>
        <span>∞</span>
        <span>5-9 days</span>
        <span>AE, BH, KW, OM, QA, SA</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.sa</span>
        <span>∞</span>
        <span>∞</span>
        <span>5-9 days</span>
        <span>SA</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Order for you</span>
        <span>$5000</span>
        <span>∞</span>
        <span>7-14 days</span>
        <span>WORLDWIDE</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <PayPal className={classes.a_icon}/>
      </div>
      <div>
        <span>PayPal.com</span>
        <span>∞</span>
        <span>∞</span>
        <span>1-5 days</span>
        <span>WORLDWIDE</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Store</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>Note</span>
      </div>
    </div>
  );
};

export default StoreList;
