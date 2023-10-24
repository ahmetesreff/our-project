import React, { useState } from "react";
import Product from "./Product";
import products from "../service/productService";
import AddToCartButton from "./AddToCartButton";



function ProductList() {


  let shoppingCartText = localStorage.getItem("shoppingCartJSON");
  const shoppingCartLocalStore = JSON.parse(shoppingCartText) ?? [];
  const productsFetched = products.filter((product) => shoppingCartLocalStore.includes(product.id));
  const productsIdsFetched = productsFetched.map((product) => product.id)

  const [inCartButton, setInCartButton] = useState(productsIdsFetched);

  function handleClick(event) {
    let shoppingCartText = localStorage.getItem("shoppingCartJSON");
    const shoppingCart = JSON.parse(shoppingCartText) ?? [];
    let currentItem = Number(event.target.id);

    if (currentItem !== null && !shoppingCart.includes(currentItem)) {
      shoppingCart.push(currentItem);
      localStorage.setItem("shoppingCartJSON", JSON.stringify(shoppingCart));
      setInCartButton(shoppingCart);
    }
  }

  return (<>

    {products.map(product => (
      <div className="productContainer">
        <Product
          key={product.id}
          img={product.img}
          productKey={product.id}
          name={product.name}
          price={product.price}
        />
        {Number(inCartButton.includes(product.id)) ? "Sepette" : <AddToCartButton id={product.id} handleClick={handleClick} />}
      </div>)
    )}
  </>);
}


export default ProductList;