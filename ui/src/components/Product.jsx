import React from "react";
import { Link } from "react-router-dom";


function Product(props) {
  return (
    <>
      <div className="image"><img src={props.img} alt="3310" /></div>
      <div className="productTitle"> 
      <Link className="productTitleClick" to={`/product/${props.productKey}`}>{props.name}</Link>
      </div>
      <div className="productPrice">{props.price}</div>
    </>
  );
}


export default Product;