import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import Basket from './pages/Basket';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sepetim",
    element: <Basket />,
  },
  {
    path: "/product/:productURL",
    element:  <ProductDetail />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);