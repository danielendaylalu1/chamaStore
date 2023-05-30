import React from "react";
import classes from "./cart.module.css"
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";

const Cart = ()=>{
    const {totalQuantity} = useSelector(state=> state.cart)
    const dispatch = useDispatch()
    return(
        <div className={classes.cart} onClick={()=>{
          dispatch(uiActions.toggle())
        }}>
        <i className="fa-solid fa-cart-shopping"></i>
        <h3 className={classes.cartTotal}>{totalQuantity}</h3>
      </div>
    )
}

export default Cart