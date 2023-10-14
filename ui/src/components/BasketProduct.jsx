import React from "react";
import Product from "./Product";

function BasketProduct(props) {
  return (
    <div className="basketItem">
      <Product
        key={props.key}
        name={props.name}
        price={props.price}
      />
      <button className="basketRemoveButton">Sepetten Çıkar</button>
    </div>
  );
}


export default BasketProduct;