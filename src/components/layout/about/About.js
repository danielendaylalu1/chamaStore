import React from "react";
import AboutDesc from "./AboutDesc";
import classes from "./about.module.css"
import { shoes } from "../../store/uiSlice";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutImg}>
        <img src={shoes[8]} alt="nike shoe" />
      </div>
      <AboutDesc />
    </div>
  );
};

export default About;
