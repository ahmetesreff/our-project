import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <main className="main">
      <navigator className="navBar">
        <div className="logo">LOGO</div>
        NAVBAR
        <button className="basketButton">SEPET</button>
      </navigator>
      <section className="mainBody">
        <ProductList />
      </section>
    </main>
  );
}

export default App;
