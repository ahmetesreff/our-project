import React from "react";
import Product from "./Product";
import AddToCartButton from "./AddToCartButton";

function DetailProduct(props) {
  

  return (
    <div className="detailProduct">
      <Product
        key={props.id}
        img={props.img}
        productKey={props.productKey}
        name={props.name}
        price={props.price}
        description={props.description}
      />
      <p className="productDescription" >{props.description}</p>
      <AddToCartButton />
    </div>
  );
}


export default DetailProduct;