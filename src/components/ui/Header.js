import React from "react";
import classes from "./header.module.css";
import Navbar from "./Navbar";
import Cart from "../cart/Cart";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.headerLogo}>ጫማ.<span>Store</span></h1>
      <Navbar />
      <Cart />
    </div>
  );
};

export default Header;
