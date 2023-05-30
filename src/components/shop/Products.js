import React from "react";
import classes from "./products.module.css";
import ProductItem from "./ProductItem";

const Products = (props) => {
//   const { items } = useSelector((state) => state.ui);
  return (
    <div className={classes.product}>
      <h1 className={classes.productHeader}>{props.header}</h1>
      <ul className={classes.products}>
        {console.log(props.items)}
        {props.items.map((item) => {
          return <ProductItem item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Products;
