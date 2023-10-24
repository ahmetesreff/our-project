import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailProduct from "../components/DetailProduct";
import products from "../service/productService";

function ProductDetail() {

    const { productURL } = useParams();
    const findItem = products.find(item => item.id.toString() === productURL.toString());

    return <>
        <div className="main">
            <Navbar />
                <DetailProduct
                    key={findItem.id}
                    img={findItem.img}
                    productKey={findItem.id}
                    name={findItem.name}
                    price={findItem.price}
                    description={findItem.description}
                />
        </div>
    </>
}

export default ProductDetail;