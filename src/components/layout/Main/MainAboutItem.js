import React from "react";
import classes from "./MainAboutItem.module.css";

const MainAboutItem = (props) => {
  return (
    <li className={classes.aboutItem}>
      <div>
        {props.children}
        <div className={classes.aboutItemText}>
          <h2>{props.title}</h2>
          <h3>{props.description}</h3>
        </div>
      </div>
    </li>
  );
};

export default MainAboutItem;
