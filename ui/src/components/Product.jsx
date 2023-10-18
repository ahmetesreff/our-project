import React from "react";


function Product(props) {

  return (
    <div >
      <div className="image"><img src={props.img} alt="3310" /></div>
      <div className="productTitle">{props.name}</div>
      <div className="productPrice">{props.price}</div>
    </div>
  );
}


export default Product;