import React from "react";
import BasketProductList from "../components/BasketProductList";

function Basket() {
    return (
        <main className="main">
            <navigator className="navBar">
                <a href="/" className="logo">LOGO</a>
                OUR PROJECT
                <a href="/sepetim" className="basketButton">SEPET</a>
            </navigator>
            <BasketProductList />
        </main>
    );
}

export default Basket;