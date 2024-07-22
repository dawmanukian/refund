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

  const [country, setCountry] = useState("")
  const [countryPanel, setCountryPanel] = useState(false)

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", 
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", 
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", 
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", 
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", 
    "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", 
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", 
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", 
    "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", 
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", 
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", 
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
    "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", 
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", 
    "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", 
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", 
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
    "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", 
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", 
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]


  function setSc(params) {
    setSoc(params);
  }
  function setRc(params) {
    setRec(params);
  }
  function setC(params){
    setCountry(params)
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
                <span>Order</span>
              </div>
              <div
                onClick={() => setIsFeedBack(false)}
                style={
                  !isFeedBack ? { borderBottom: "2px solid #2c2c2c" } : null
                }
              >
                <span>Fast order</span>
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
                  <div className={classes.line_inpt} >
                    <div className={classes.inpt} onClick={() => {
                      setCountryPanel(!countryPanel);
                    }} style={
                      countryPanel
                        ? {
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                          }
                        : null
                    }>
                      <span>{country === "" ? (
                        "Country *"
                      ) : (
                        <span style={{ color: "#000" }}>{country}</span>
                      )}</span>
                      <Chevron />
                      {countryPanel && (
                      <div className={classes.sl} style={{maxHeight: "250px", overflowY: "scroll", overflowX: "hidden"}}>
                        {
                          countries.map(el => {
                            return (
                            <p onClick={() => setC(el)}>
                             {el}
                            </p>
                            )
                          })
                        }
                      </div>
                    )}
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
