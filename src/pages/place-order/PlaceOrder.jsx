import React, { useState } from "react";
import classes from "./place-order.module.css";
import Order from "../../images/pl_order.png";
import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { ReactComponent as Arr } from "../../images/arr.svg";
import { ReactComponent as Check } from "../../images/check.svg";

const PlaceOrder = () => {
  const [isFeedBack, setIsFeedBack] = useState(true);
  const [soc, setSoc] = useState("");
  const [rec, setRec] = useState("");
  const [socPanel, setSocPanel] = useState(false);
  const [recPanel, setRecPanel] = useState(false);

  function setSc(params) {
    setSoc(params);
  }
  function setRc(params) {
    setRec(params);
  }

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.data}>
          <div className={classes.info}>
            <span className={classes.head}>
              Our measure of success? Your satisfaction
            </span>
            <p>Place an Order</p>
          </div>
          <img src={Order} alt="" />
        </div>
      </div>
      <div
        className={classes.forms}
        style={!isFeedBack ? { height: "1298px" } : null}
      >
        <div className={classes.forms_data}>
          <form className={classes.form} action="">
            <div className={classes.tabs}>
              <div
                onClick={() => setIsFeedBack(true)}
                style={
                  isFeedBack ? { borderBottom: "2px solid #2c2c2c" } : null
                }
              >
                <span>Feedback</span>
              </div>
              <div
                onClick={() => setIsFeedBack(false)}
                style={
                  !isFeedBack ? { borderBottom: "2px solid #2c2c2c" } : null
                }
              >
                <span>Order Now</span>
              </div>
            </div>
            {isFeedBack ? (
              <>
                <div className={classes.frm}>
                  <p className={classes.form_header}>How to contact you?</p>
                  <p className={classes.req}>
                    <span>*</span> - required field
                  </p>
                </div>
                <div className={classes.inpts}>
                  <div
                    onClick={() => setSocPanel(!socPanel)}
                    className={classes.inpt}
                    style={
                      socPanel
                        ? {
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                          }
                        : null
                    }
                  >
                    <span>
                      {soc === "" ? (
                        "Telegram / Email / WhatsApp *"
                      ) : (
                        <span style={{ color: "#000" }}>{soc}</span>
                      )}
                    </span>
                    <Chevron />
                    {socPanel && (
                      <div className={classes.sl}>
                        <p onClick={() => setSc("Telegram")}>Telegram</p>
                        <p onClick={() => setSc("Email")}>Email</p>
                        <p onClick={() => setSc("WhatsApp")}>WhatsApp</p>
                      </div>
                    )}
                  </div>
                  <div
                    onClick={() => setRecPanel(!recPanel)}
                    className={classes.inpt}
                    style={
                      recPanel
                        ? {
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                          }
                        : null
                    }
                  >
                    <span>
                      {rec === "" ? (
                        "What would you like to receive? *"
                      ) : (
                        <span style={{ color: "#000" }}>{rec}</span>
                      )}
                    </span>
                    <Chevron />
                    {recPanel && (
                      <div className={classes.sl}>
                        <p
                          onClick={() =>
                            setRc("Refund the money for the product")
                          }
                        >
                          Refund the money for the product
                        </p>
                        <p onClick={() => setRc("Order for you")}>
                          Order for you
                        </p>
                        <p onClick={() => setRc("Unblock account")}>
                          Unblock account
                        </p>
                      </div>
                    )}
                  </div>
                  <textarea className={classes.textarea}></textarea>
                </div>
              </>
            ) : (
              <>
                <div className={classes.frm}>
                  <p className={classes.form_header}>Details</p>
                </div>
                <div className={classes.inpts}>
                  <div
                    onClick={() => {
                      setRecPanel(false);
                      setSocPanel(!socPanel);
                    }}
                    className={classes.inpt}
                    style={
                      socPanel
                        ? {
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                          }
                        : null
                    }
                  >
                    <span>
                      {soc === "" ? (
                        "Telegram / Email / WhatsApp *"
                      ) : (
                        <span style={{ color: "#000" }}>{soc}</span>
                      )}
                    </span>
                    <Chevron />
                    {socPanel && (
                      <div className={classes.sl}>
                        <p onClick={() => setSc("Telegram")}>Telegram</p>
                        <p onClick={() => setSc("Email")}>Email</p>
                        <p onClick={() => setSc("WhatsApp")}>WhatsApp</p>
                      </div>
                    )}
                  </div>
                  <div
                    onClick={() => {
                      setSocPanel(false)
                      setRecPanel(!recPanel);
                    }}
                    className={classes.inpt}
                    style={
                      recPanel
                        ? {
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                          }
                        : null
                    }
                  >
                    <span>
                      {rec === "" ? (
                        "What would you like to receive? *"
                      ) : (
                        <span style={{ color: "#000" }}>{rec}</span>
                      )}
                    </span>
                    <Chevron />
                    {recPanel && (
                      <div className={classes.sl}>
                        <p
                          onClick={() =>
                            setRc("Refund the money for the product")
                          }
                        >
                          Refund the money for the product
                        </p>
                        <p onClick={() => setRc("Order for you")}>
                          Order for you
                        </p>
                        <p onClick={() => setRc("Unblock account")}>
                          Unblock account
                        </p>
                      </div>
                    )}
                  </div>
                  <textarea
                    className={classes.textarea}
                    placeholder="A comment"
                  ></textarea>
                </div>
                <div className={classes.frm}>
                  <p className={classes.form_header}>Order Information</p>
                </div>
                <div>
                  <div className={classes.type_inpts}>
                    <input
                      className={classes.type_inpt}
                      type="email"
                      placeholder="Email Address *"
                    ></input>
                    <input
                      className={classes.type_inpt}
                      placeholder="Total Billed Amount (tax & ship… * "
                    ></input>
                    <input
                      className={classes.type_inpt}
                      placeholder="Order ID/Number *"
                    ></input>
                    <input
                      className={classes.type_inpt}
                      placeholder="Tracking Number(s) *"
                    ></input>
                    <input
                      className={classes.type_inpt}
                      type="email"
                      placeholder="Email Address *"
                    ></input>
                    <input
                      className={classes.type_inpt}
                      placeholder="Total Billed Amount (tax & ship…"
                    ></input>
                  </div>
                  <div className={classes.line_inpt}>
                    <input
                      className={classes.type_inpt}
                      style={{ maxWidth: "none" }}
                      placeholder="Payment Method (if card, put 4 last digits) *"
                    ></input>
                  </div>
                </div>
                <div className={classes.frm}>
                  <p className={classes.form_header}>Shipping Information</p>
                </div>
                <div>
                  <div className={classes.type_inpts}>
                    <input
                      className={classes.type_inpt}
                      placeholder="First Name *"
                    ></input>
                    <input
                      className={classes.type_inpt}
                      placeholder="Last Name * "
                    ></input>
                    <input
                      className={classes.type_inpt}
                      placeholder="Street Address 1 *"
                    ></input>
                    <input
                      className={classes.type_inpt}
                      placeholder="Postal / Zip Code *"
                    ></input>
                    <input
                      className={classes.type_inpt}
                      placeholder="City *"
                    ></input>
                    <input
                      className={classes.type_inpt}
                      placeholder="State / Province *"
                    ></input>
                  </div>
                  <div className={classes.line_inpt}>
                    <div className={classes.inpt}>
                      <span>Country *</span>
                      <Chevron />
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* <div className={classes.frm}>
              <p className={classes.form_header}>How to contact you?</p>
              <p className={classes.req}>
                <span>*</span> - required field
              </p>
            </div>
            <div className={classes.inpts}>
              <div className={classes.inpt}>
                <span>Telegram / Email / WhatsApp *</span>
                <Chevron />
              </div>
              <div className={classes.inpt}>
                <span>What would you like to receive? *</span>
                <Chevron />
              </div>
              <textarea className={classes.textarea}></textarea>
            </div> */}

            <div className={classes.submit}>
              <button>Submit New Order</button>
            </div>
          </form>
          <div className={classes.ques}>
            <span className={classes.have_ques}>Have any questions?</span>
            <div className={classes.ar}>
              <span className={classes.get_in}>Get in touch</span>
              <Arr />
            </div>
            <span className={classes.inform}>
              RefCat Refunds is raising standards with its efficient results:
            </span>
            <div className={classes.ques_check}>
              <Check className={classes.check_icon} />
              <span>
                RefCat Refunds is the most reliable, effcient, and trusted
                refunding service on the market, offering easy solutions with
                its powerful results.
              </span>
            </div>
            <div className={classes.ques_check}>
              <Check className={classes.check_icon} />
              <span>
                Our refund success rate is the highest, above any other
                refunding service.
              </span>
            </div>
            <div className={classes.ques_check}>
              <Check className={classes.check_icon} />
              <span>
                No risk taking choices are relevant. You will be confident of
                getting your funds back.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
