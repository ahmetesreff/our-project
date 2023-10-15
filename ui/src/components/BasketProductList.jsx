import React, { useState } from "react";
import products from "../service/productService";
import BasketProduct from "./BasketProduct";

function BasketProductList() {
  let shoppingCartText = localStorage.getItem("shoppingCartJSON");
  const shoppingCart = JSON.parse(shoppingCartText) ?? [];
  const productsChosen = products.filter((product) => shoppingCart.includes(product.id));

  const [storageCart, setStorageCart] = useState(productsChosen);

  function handleClick(event) {
    let itemToBeRemoved = event.target.id;
    const newArray = storageCart.filter(item => Number(item.id) !== Number(itemToBeRemoved));
    
    localStorage.setItem("shoppingCartJSON", JSON.stringify(newArray));
    setStorageCart(newArray);
  }

  return (
    <>
      {storageCart.map((product) => (
        <div className="basketItem">
          <BasketProduct
            key={product.id}
            productKey={product.id}
            name={product.name}
            price={product.price}
          />
          <button id={product.id} onClick={handleClick} className="basketRemoveButton">
            Sepetten Çıkar
          </button>
        </div>
      ))}
    </>
  );
}


export default BasketProductList;