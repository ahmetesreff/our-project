import React from "react";
import Product from "./Product";
import product from "../service/productService";

function createList(product) {
  return (
    <Product
      key={product.id}
      productKey={product.id}
      name={product.name}
      price={product.price}
      isFromBasketPage={false}
    />
  );
}

function ProductList() {
  return <>
  {product.map(createList)}
  </>;
}

export default ProductList;