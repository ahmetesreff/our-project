import React from "react";
import products from "../service/productService";
import BasketProduct from "./BasketProduct";

function createList(products) {
  return (
    <BasketProduct key={products.key} name={products.name} price={products.price} />
  );
}

function BasketProductList() {
  return <>
  {products.map(createList)}
  </>;
}

export default BasketProductList;