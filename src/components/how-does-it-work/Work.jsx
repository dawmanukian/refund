import React from "react";
import classes from "./work.module.css";
import { ReactComponent as ContactUs } from "../../images/contactus.svg";
import { ReactComponent as Order } from "../../images/order.svg";
import { ReactComponent as Refund } from "../../images/refund.svg";
import { ReactComponent as Payment } from "../../images/payment.svg";
import { ReactComponent as P } from "../../images/p.svg";

const Work = () => {
  return (
    <section className={classes.section}>
      <p className={classes.header}>How Does it Work?</p>
      <div className={classes.boxs}>
        <div className={classes.box}>
          <div className={classes.num}>
            <span>1</span>
          </div>
          <p className={classes.box_header}>Contact Us</p>
          <ContactUs />
          <p className={classes.box_body}>
            Contact us on telegram to recommand you the best store at the moment
            and place you order.
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.num}>
            <span>2</span>
          </div>
          <p className={classes.box_header}>Order & receive</p>
          <Order />
          <p className={classes.box_body}>
            Order from the preferred website and wait for the item to be
            delivered to you.
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.num}>
            <span>3</span>
          </div>
          <p className={classes.box_header}>
            Countact us again to get the refund!
          </p>
          <Refund />
          <p className={classes.box_body}>
            After you receive the products, message us with the details to
            process a refund for you.
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.num}>
            <span>4</span>
          </div>
          <p className={classes.box_header}>Payment</p>
          <Payment />
          <p className={classes.box_body}>
            After the refund is confirmed, you have the pay for the refund-fee
            and leave us a feedback :)
          </p>
        </div>
      </div>
      <div className={classes.pay}>
        <P className={classes.pay_icon}/>
        <span>You pay for the work only after it is completed!</span>
      </div>
      <div className={classes.phone}>
        <div className={classes.text}>
          <p className={classes.more}>
            More than <span>300</span> satisfied customers
          </p>
          <div className={classes.lines}>
            <div className={classes.r}></div>
            <div className={classes.line}></div>
            <div className={classes.r}></div>
          </div>
          <p className={classes.orders}>
            and more than <span>1000</span> completed orders
          </p>
          <div className={classes.submit}>
            <button>SUBMIT ORDER</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
