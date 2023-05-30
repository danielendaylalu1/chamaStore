import React from "react";
import classes from "./productItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  return (
    <li className={classes.productsItem}>
      {/* {console.log(props.item)} */}
      <img src={props.item.img} alt={props.item.name} />
      <div className={classes.productsItemDesc}>
        <div>
          <h3>{props.item.name}</h3>
          <h3>${props.item.price}</h3>
        </div>
        <button
          onClick={() => {
            dispatch(
              cartActions.addTocart({
                id: props.item.id,
                img:props.item.img,
                name: props.item.name,
                price: props.item.price,
                totalprice:props.item.price,
                amount: 1,
              })
            );
          }}
        >
          +
        </button>
      </div>
    </li>
  );
};
export default ProductItem;
