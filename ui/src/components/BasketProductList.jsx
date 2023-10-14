import React from "react";
import products from "../service/productService";
import BasketProduct from "./BasketProduct";

function mapToProduct(products) {
  return (
    <BasketProduct
      key={products.id}
      productKey={products.id}
      name={products.name}
      price={products.price}
    />
  );
}

function BasketProductList() {

  let shoppingCartText = localStorage.getItem("shoppingCartJSON");
  const shoppingCart = JSON.parse(shoppingCartText) ?? [];

  return <>
    {products.filter((product) => shoppingCart.includes(product.id)).map(mapToProduct)}
  </>;
}

export default BasketProductList;