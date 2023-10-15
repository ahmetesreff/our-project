import React from "react";
import Product from "./Product";

function BasketProduct(props) {

  return (
      <Product
        productKey={props.productKey}
        name={props.name}
        price={props.price}
        isFromBasketPage={true}
      />
  );
}


export default BasketProduct;