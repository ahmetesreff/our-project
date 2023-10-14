import React from "react";

function Product(props) {
    return (
      <div className="productContainer">
        <div className="image"></div>
        <div className="productTitle">{props.name}</div>
        <div className="productPrice">{props.price}</div>
      </div>
    );
  }


export default Product;