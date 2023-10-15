import React from "react";

function Product(props) {




  function handleClick() {
    let shoppingCartText = localStorage.getItem("shoppingCartJSON");
    const shoppingCart = JSON.parse(shoppingCartText) ?? [];
    let currentItem = props.productKey;
    
    if (!shoppingCart.includes(currentItem)) {
      shoppingCart.push(currentItem);
      localStorage.setItem("shoppingCartJSON", JSON.stringify(shoppingCart));
    }
  }


  return (
    <div className="productContainer">
      <div className="image"></div>
      <div className="productTitle">{props.name}</div>
      <div className="productPrice">{props.price}</div>
      {!props.isFromBasketPage && <button onClick={handleClick}>Sepete Ekle</button>}
    </div>
  );
}


export default Product;