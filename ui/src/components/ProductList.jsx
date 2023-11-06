import React, { useState } from "react";
import Product from "./Product";
import products from "../service/productService";
import AddToCartButton from "./AddToCartButton";
import { addToLocalStorage, getLocalStorageItems } from "../utils/localStorage";



function ProductList() {


  
  const shoppingCartLocalStore = getLocalStorageItems();
  const productsFetched = products.filter((product) => shoppingCartLocalStore.includes(product.id));
  const productsIdsFetched = productsFetched.map((product) => product.id)

  const [inCartButton, setInCartButton] = useState(productsIdsFetched);

  function handleClick(event) {
    let itemId = Number(event.target.id);
    addToLocalStorage(itemId, setInCartButton);
  }

  return (<>

    {products.map(product => (
      <div key={product.id} className="productContainer">
        <Product
          img={product.img}
          productKey={product.id}
          name={product.name}
          price={product.price}
        />
        {Number(inCartButton.includes(product.id)) ? <div className="atCartButton">Sepette</div> : <AddToCartButton id={product.id} handleClick={handleClick} />}
      </div>)
    )}
  </>);
}


export default ProductList;