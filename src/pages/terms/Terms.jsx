import React from "react";
import classes from "./terms.module.css";

const Terms = () => {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.data}>
          <div style={{ marginTop: "153px" }}>
            <span className={classes.info}>
              Our measure of success? Your satisfaction
            </span>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
      <div className={classes.texts_}>
        <div className={classes.texts}>
          <p>
            Thank you for choosing RefCat Servise! We're happy you're here.
            Please read this Terms of Service agreement carefully before
            accessing or using our services. Because it is such an important
            contract between us and our users, we have tried to make it as clear
            as possible.
          </p>
          <span>For the purposes of this Privacy Policy:</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>1. Terms</p>
          <span>By accessing this Website, accessible from https://RefCat.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>2. Use License</p>
          <span>Permission is granted to temporarily download one copy of the materials on RefCat Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</span>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose or for any public display;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transferring the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <span>This will let RefCat Servise to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>3. Disclaimer</p>
          <span>All the materials on RefCat Refunds Website are provided "as is". RefCat Refunds makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, RefCat Refunds does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>4. Limitations</p>
          <span>RefCat Refunds or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on RefCat Refunds, even if RefCat Refunds or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>5. Revisions</p>
          <span>The materials appearing on RefCat Refunds Website may include technical, typographical, or photographic errors. RefCat Refunds will not promise that any of the materials in this Website are accurate, complete, or current. RefCat Refunds may change the materials contained on its Website at any time without notice. RefCat Refunds does not make any commitment to update the materials.</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>6. Links</p>
          <span>RefCat Refunds has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by RefCat Refunds of the site. The use of any linked website is at the user’s own risk.</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>7. Site Terms of Use Modifications</p>
          <span>RefCat Refunds may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>8. Your Privacy</p>
          <span>Please read our Privacy Policy.</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>9. Governing Law</p>
          <span>Any claim related to RefCat Refunds Website shall be governed by the laws of pa without regards to its conflict of law provisions.</span>
        </div>
        <div className={classes.block}>
          <p className={classes.h}>10. Questions</p>
          <span>Questions about the Terms of Service? Contact us.</span>
        </div>
      </div>
    </div>
  );
};

export default Terms;
