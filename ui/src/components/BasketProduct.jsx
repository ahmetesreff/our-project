import React, { useState } from "react";
import Product from "./Product";

function BasketProduct(props) {

  const [storageCart, setStorageCart] = useState([]);
  props = storageCart;

  function handleClick() {

    let shoppingCartText = localStorage.getItem("shoppingCartJSON");
    const shoppingCart = JSON.parse(shoppingCartText) ?? [];
    console.log(shoppingCart);
    console.log(props.productKey);
    const newArray = shoppingCart.filter(item => item !== props.productKey);
    console.log(newArray)
    localStorage.setItem("shoppingCartJSON", JSON.stringify(newArray));
    setStorageCart(newArray);
  }



  return (
    <div className="basketItem">
      <Product
        key={props.key}
        name={props.name}
        price={props.price}
        isFromBasketPage={true}
      />
      {storageCart}
      <button onClick={handleClick} className="basketRemoveButton">Sepetten Çıkar</button>
    </div>
  );
}


export default BasketProduct;