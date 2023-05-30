import React from "react";
import classes from "./form.module.css";

const Form = () => {
  return (
    <div className={classes.form}>
      <h1 className={classes.header}>Subscribe to our newsletter</h1>
      <form>
        <input type="email" placeholder="example@gmail.com" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Form;
