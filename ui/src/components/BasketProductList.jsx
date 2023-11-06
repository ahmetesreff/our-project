import React, { useState } from "react";
import products from "../service/productService";
import BasketProduct from "./BasketProduct";
import { getLocalStorageItems } from "../utils/localStorage";

function BasketProductList() {
  const shoppingCartLocalStore = getLocalStorageItems();
  const productsFetched = products.filter((product) => shoppingCartLocalStore.includes(product.id));

  const [shoppingCart, setShoppingCart] = useState(productsFetched);

  function handleClick(event) {
    let selectedProduct = event.target.id;
    const newShoppingCart = shoppingCart.filter((item) => Number(item.id) !== Number(selectedProduct));

    const updatedCartIds = newShoppingCart.map((product) => product.id);
    localStorage.setItem("shoppingCartJSON", JSON.stringify(updatedCartIds));
    setShoppingCart(newShoppingCart);
  }

  return (
    <>
      {shoppingCart.map((product) => ( 
        <div className="basketItem" key={product.id}>
          <BasketProduct
            id={product.id}
            img={product.img}
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
