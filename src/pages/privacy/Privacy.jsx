import React from "react";
import classes from "./privacy.module.css";
import Image from "../../images/pr.png"

const Privacy = () => {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.data}>
          <div className={classes.texts}>
            <span className={classes.text}>
              Learn what kind of data we collect, and how we use them.
            </span>
            <p>RefCat Privacy Policy</p>
          </div>
          <img src={Image} alt="" />
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.pr}>
            <p className={classes.privacy}>Privacy Policy</p>
            <div className={classes.box}>
                <span className={classes.box_header}>Last updated: March 26 2024</span>
                <span>For the purposes of this Privacy Policy:</span>
                <ul>
                    <li>This Privacy Policy ("Policy") refers to RefCat Servise, a company providing refund services, and you, the user of this site.</li>
                    <li>Us, We, Our - RefCat Refunds is the publisher and operator of the web site rbfrefunds.com, and is referred to as "rbfrefunds.com", "us", "we", "our", "ours", etc. refer to We Leak Info. "The SITE" or "SITE" refers to RefCat.com</li>
                    <li>You, the User - This Policy will refer to the user as "you" or "yours", etc.</li>
                </ul>
            </div>
        </div>
        <div className={classes.pr}>
            <div className={classes.box}>
                <span className={classes.box_header}>Collecting and Using Your Personal Information</span>
                <span>Information we may collect:</span>
                <ul>
                    <li>Information you submit upon placing an order.</li>
                    <li>Your public IP address upon visiting this website.</li>
                    <li>Your browser's User agent string upon visiting this website.</li>
                </ul>
                <p>We don’t keep personal information for longer than is necessary. While we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification. That said, we advise that no method of electronic transmission or storage is 100% secure and cannot guarantee absolute data security.</p>
            </div>
        </div>
        <div className={classes.pr}>
            <div className={classes.box}>
                <span className={classes.box_header}>Use of Your Personal Data</span>
                <span>RefCat Servise may use your Personal Data for the following purposes:</span>
                <ul>
                    <li>To process your orders.</li>
                    <li>To process any transactional or ongoing payments.</li>
                    <li>To contact you by email, WhatsApp or Telegram.</li>
                    <li>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                </ul>
                <p>We will not share, disclose, or breach your personal information under all circurmistances.</p>
            </div>
        </div>
        <div className={classes.pr}>
            <div className={classes.box}>
                <span className={classes.box_header}>Law enforcement</span>
                <span>We simply have nothing to disclose to the law enforcement, as we do not keep any logs, or store order information longer than it is absolutely necessary.</span>
            </div>
        </div>
        <div className={classes.pr}>
            <div className={classes.box}>
                <span className={classes.box_header}>CHILDRENS ONLINE PRIVACY PROTECTION ACT Compliance and Non-Applicability Statement.</span>
                <span>The Children’s Online Privacy Protection Act applies to the online collection of personal information from children under the age of 13. Rbfrefunds.com does not collect any personal information about children under the age of 13. Our SITE is not designed for children under 16, and children under the age of 16 are not authorized to access or use our services. If we discover that a child under the age of 16 has provided us with personal information, we will endeavor to purge any such information as soon as possible.</span>
            </div>
        </div>
        <div className={classes.pr}>
            <div className={classes.box}>
                <span className={classes.box_header}>Contact Us</span>
                <span>If you have any questions about this Privacy Policy, You can contact us:</span>
                <ul>
                    <li>By joining our Telegram channel: https://t.me/RefCat_Connect</li>
                    <li>Contact us by Email</li>
                    <li>Contact us by WhatsApp</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
