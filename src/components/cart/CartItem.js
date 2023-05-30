import React from "react";
import classes from "./cartItem.module.css"
import { cartActions } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = (props) => {
    const dispatch = useDispatch()
    const {items} = useSelector(state => state.ui)
  return (
    <li className={classes.cartItem}>
      {console.log(props.item)}
      {items.map(item =>{
        return item.id === props.item.id &&<img src={item.img} alt={item.img}/>
      })}
      <p>shoe: {props.item.name}</p>
      <p>Total price: ${props.item.totalprice.toFixed(2)}</p>
      <p>
        Amount: {props.item.amount}
        <button onClick={()=> dispatch(cartActions.addTocart({
            id: props.item.id,
            img:props.item.img,
            name: props.item.name,
            price: props.item.price,
            totalprice:props.item.totalprice,
            amount: 1,
        }))}>+</button>
        <button onClick={()=> dispatch(cartActions.removeFromCart({
            id: props.item.id,
            img:props.item.img,
            name: props.item.name,
            price: props.item.price,
            totalprice:props.item.totalprice,
            amount: 1,
        }))}>-</button>
      </p>
    </li>
  );
};

export default CartItem;
