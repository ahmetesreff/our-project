import React from "react";
import BasketProductList from "../components/BasketProductList";

function Basket() {
    return (
        <main className="main">
            <nav className="navBar">
                <a href="/" className="logo">LOGO</a>
                <p>OUR PROJECT</p>
                <a href="/sepetim" className="basketButton">SEPET</a>
            </nav>
            <BasketProductList />
        </main>
    );
}

export default Basket;