import React from "react";
import classes from "./mainTop.module.css";
import MainTopDesc from "./MainTopDes";
import { shoes } from "../../store/uiSlice";

const MainTop = () => {
  return (
    <div className={classes.mainTop}>
      <MainTopDesc />
      <div className={classes.mainTopImg}>
        <img src={shoes[7]} alt="nike shoe" />
      </div>
    </div>
  );
};

export default MainTop;
