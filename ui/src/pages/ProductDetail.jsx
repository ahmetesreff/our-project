import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailProduct from "../components/DetailProduct";

function ProductDetail() {

    const { productURL } = useParams();

    console.log(productURL);

    return <>
        <div className="main">
            <div className="productDetailContainer">
                <Navbar />
                <DetailProduct />
            </div>
        </div>
    </>
}

export default ProductDetail;