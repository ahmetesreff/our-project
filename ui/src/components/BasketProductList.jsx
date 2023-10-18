import React, { useState } from "react";
import products from "../service/productService";
import BasketProduct from "./BasketProduct";

function BasketProductList() {

  let shoppingCartText = localStorage.getItem("shoppingCartJSON");
  const shoppingCartLocalStore = JSON.parse(shoppingCartText) ?? [];
  const productsFetched = products.filter((product) => shoppingCartLocalStore.includes(product.id));

  const [shoppingCart, setShoppingCart] = useState(productsFetched);

  function handleClick(event) {
    let itemToBeRemoved = event.target.id;
    const newShoppingCart = shoppingCart.filter(item => Number(item.id) !== Number(itemToBeRemoved));

    localStorage.setItem("shoppingCartJSON", JSON.stringify(newShoppingCart.map((product) => product.id)));
    setShoppingCart(newShoppingCart);
  }

  return (
    <>
      {shoppingCart.map((product) => ( 
        <div className="basketItem">
          <BasketProduct
            id={product.id}
            img={product.img}
            key={product.id}
            productKey={product.id}
            name={product.name}
            price={product.price}
          />
          <button id={product.id} onClick={handleClick} className="productButton">
            Sepetten Çıkar
          </button>
        </div>
      ))}
    </>
  );
}


export default BasketProductList;