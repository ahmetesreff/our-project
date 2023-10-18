import React from "react";
import Product from "./Product";

function BasketProduct(props) {

  return (
    <div className="productContainer">
      <Product

        key={props.id}
        img={props.img}
        productKey={props.productKey}
        name={props.name}
        price={props.price}
      />
    </div>
  );
}


export default BasketProduct;