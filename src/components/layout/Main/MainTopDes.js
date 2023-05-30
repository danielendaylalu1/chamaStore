import React from "react";
import Button from "../../ui/Button";
import classes from "./mainTopDesc.module.css";

const MainTopDesc = () => {
  return (
    <div className={classes.mainTopDesc}>
      <h1 className={classes.descBigText}>Find your dream snekers</h1>
      <h3 className={classes.descSmallText}>
        Find your shoes from our various collections. here shoes are endless and
        profit is also endless.
      </h3>
      <Button text="Explore more" />
    </div>
  );
};

export default MainTopDesc;
