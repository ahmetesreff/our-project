import React from "react";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <main className="main">
      <navigator className="navBar">
        <div className="logo">LOGO</div>
        OUR PROJECT
        <a href="/sepetim" className="basketButton">
          SEPET
        </a>
      </navigator>
      <section className="mainBody">
        <ProductList />
      </section>
    </main>
  );
}

export default Home;
