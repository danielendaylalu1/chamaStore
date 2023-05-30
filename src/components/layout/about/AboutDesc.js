import React from "react";
import classes from "./aboutDesc.module.css"
import Button from "../../ui/Button";

const AboutDesc = ()=>{
 return(
    <div className={classes.aboutDesc}>
      <h1 className={classes.descBigText}>Dedicated to quality and result</h1>
      <h3 className={classes.descSmallText}>
        Providing the best shoe of various types and manufacturing for true travel lovers.
        these items are lightweight and comfortable.
      </h3>
      <Button text="Read More" />
    </div>
 )
}

export default AboutDesc