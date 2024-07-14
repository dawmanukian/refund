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
        <Amazon />
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
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.co.uk</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.es</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.de</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.fr</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>NNo item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.au</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.pl</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.ae</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Amazon.sa</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <span>Order for you</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
        <span>No item and price limits for aged accounts. Apple prod</span>
      </div>
      <div>
        <PayPal />
      </div>
      <div>
        <span>PayPal.com</span>
        <span>Price Limit</span>
        <span>Item Limit</span>
        <span>Duration</span>
        <span>Countries</span>
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
