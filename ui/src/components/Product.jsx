import React from "react";


function Product(props) {
  return (
    <>
      <div className="image"><img src={props.img} alt="3310" /></div>
      <div className="productTitle"> 
      <a className="productTitleClick" href={`/product/${props.productKey}`}>{props.name}</a>
      </div>
      <div className="productPrice">{props.price}</div>
      {/* {!props.isInShoppingCart && <button style={{ backgroundColor: "green" }} className="productButton" onClick={handleClick}>Sepetten Çıkar</button>} */}
    </>
  );
}


export default Product;