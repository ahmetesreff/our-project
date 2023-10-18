import React from "react";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <main className="main">
      <nav className="navBar">
        <a href="/" className="logo">LOGO</a>
        <p>OUR PROJECT</p>
        <a href="/sepetim" className="basketButton">
          SEPET
        </a>
      </nav>
      <section className="mainBody">
        <ProductList />
      </section>
    </main>
  );
}

export default Home;
