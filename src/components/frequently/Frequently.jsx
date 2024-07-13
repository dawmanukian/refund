import React, { useState } from "react";
import classes from "./frequently.module.css";
import { ReactComponent as Arrow } from "../../images/chevron.svg";

const Frequently = () => {
  const [freq1, setFreq1] = useState(false);
  const [freq2, setFreq2] = useState(false);
  const [freq3, setFreq3] = useState(false);

  return (
    <section className={classes.section}>
      <p className={classes.header}>Frequently Asked Questions</p>
      <div className={classes.boxs}>
        <div>
          <div
            className={classes.box}
            style={
              freq1
                ? {
                    borderBottomRightRadius: "0px",
                    borderBottomLeftRadius: "0px",
                  }
                : null
            }
            onClick={() => setFreq1(!freq1)}
          >
            <p>How does RefCat Refunds work?</p>
            <Arrow />
          </div>
          {freq1 && (
            <div
              className={classes.box}
              style={{
                height: "auto",
                borderTop: "none",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
              }}
            >
              <p>
                Our team assists you in obtaining cashbacks for your Amazon
                purchases by leveraging Amazon's policies. Just send us a
                message with your account details, and we handle the rest.
              </p>
            </div>
          )}
        </div>
        <div>
          <div
            className={classes.box}
            onClick={() => setFreq2(!freq2)}
            style={
              freq2
                ? {
                    borderBottomRightRadius: "0px",
                    borderBottomLeftRadius: "0px",
                  }
                : null
            }
          >
            <p>How much does it cost?</p>
            <Arrow />
          </div>
          {freq2 && (
            <div
              className={classes.box}
              style={{
                height: "auto",
                borderTop: "none",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
              }}
            >
              <p>
                Yes, our fees are based on the order amount, ranging from
                30-50%. Please contact us directly for more detailed
                information.
              </p>
            </div>
          )}
        </div>
        <div>
          <div
            className={classes.box}
            style={
              freq3
                ? {
                    borderBottomRightRadius: "0px",
                    borderBottomLeftRadius: "0px",
                  }
                : null
            }
            onClick={() => setFreq3(!freq3)}
          >
            <p>How many times can I do this?</p>
            <Arrow />
          </div>
          {freq3 && (
            <div
              className={classes.box}
              style={{
                height: "auto",
                borderTop: "none",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
              }}
            >
              <p>Is this service legal?</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Frequently;
