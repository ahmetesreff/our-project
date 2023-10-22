import React from "react";
import Product from "./Product";

function DetailProduct(props) {

  return (
    <div className="detailProduct">
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


export default DetailProduct;