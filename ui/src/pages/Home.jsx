import React from "react";
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="main">
      <Navbar />
      <section className="mainBody">
        <ProductList />
      </section>
    </main>
  );
}

export default Home;
