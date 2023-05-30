import React from "react";
import classes from "./cartmodal.module.css";
import { uiActions } from "../store/uiSlice";
import { cartActions } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartModal = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity } = useSelector((state) => state.cart);
  let totalPrice = 0;
  return (
    <div>
      <div
        className={classes.modal}
        onClick={() => dispatch(uiActions.toggle())}
      ></div>
      <ul className={classes.cartItems}>
        <h1>Your Shoes</h1>
        <h3 onClick={() => dispatch(uiActions.toggle())}>x</h3>
        {items.map((item) => {
          totalPrice += item.totalprice;
          return <CartItem item={item} />;
        })}
        {totalQuantity === 0 ? (
          <h4>no shoe selected</h4>
        ) : (
          <h4>
            total price: ${totalPrice.toFixed(2)} <button>Order</button>{" "}
            <button onClick={() => dispatch(cartActions.removeAll())}>
              remove All
            </button>
          </h4>
        )}
      </ul>
    </div>
  );
};

export default CartModal;
