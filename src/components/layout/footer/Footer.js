import React from "react";
import classes from "./footer.module.css";
import Form from "./Form";

const Footer = () => {
  return (
    <>
      <Form />
      <div className={classes.footer}>
        <div className={classes.footerLogo}>
          <h1>
            ጫማ.<span>Store</span>
          </h1>
        </div>
        <div className={classes.footerAbout}>
          <h3>About</h3>
          <ul>
            <li>About us</li>
            <li>Features</li>
            <li>News and Blogs</li>
          </ul>
        </div>
        <div className={classes.footerConnect}>
          <h3>Connect</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className={classes.footerSupport}>
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Support center</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
