import React from "react";
import Product from "./Product";
import products from "../service/productService";

function createList(products) {
  return (
    <Product key={products.key} name={products.name} price={products.price} />
  );
}

function ProductList() {
  return <>{products.map(createList)}</>;
}

export default ProductList;
