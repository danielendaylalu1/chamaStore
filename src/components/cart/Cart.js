import React from "react";
import classes from "./cart.module.css"
import { useSelector } from "react-redux";

const Cart = ()=>{
    const {totalQuantity} = useSelector(state=> state.cart)
    return(
        <div className={classes.cart}>
        <i className="fa-solid fa-cart-shopping"></i>
        <h3 className={classes.cartTotal}>{totalQuantity}</h3>
      </div>
    )
}

export default Cart