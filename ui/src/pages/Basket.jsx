import React from "react";
import BasketProductList from "../components/BasketProductList";
import Navbar from "../components/Navbar";

function Basket() {
    return (
        <main className="main">
            <Navbar />
            <BasketProductList />
        </main>
    );
}

export default Basket;