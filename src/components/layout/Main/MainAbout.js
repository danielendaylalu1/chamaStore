import React from "react";
import classes from "./mainAbout.module.css";
import MainAboutItem from "./MainAboutItem";

const MainAbout = () => {
  return (
    <ul className={classes.about}>
      <MainAboutItem title="Secure Payment" description="Secure on orer">
        <i class="fa-solid fa-file-shield"></i>
      </MainAboutItem>
      <MainAboutItem title="24/7 Support" description="Contact us 24 hrs a day">
        <i class="fa-solid fa-clock"></i>
      </MainAboutItem>
      <MainAboutItem title="Fast Delivary" description="Fast delivery on time">
        <i class="fa-solid fa-truck"></i>
      </MainAboutItem>
    </ul>
  );
};

export default MainAbout;
