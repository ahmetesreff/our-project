import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../service/productService";
import AddToCartButton from "../components/AddToCartButton";
import { addToLocalStorage, getLocalStorageItems } from "../utils/localStorage";

function ProductDetail() {
    const shoppingCartLocalStore = getLocalStorageItems();
    const productsFetched = products.filter((product) => shoppingCartLocalStore.includes(product.id));
    const productsIdsFetched = productsFetched.map((product) => product.id)

    const [inCartButton, setInCartButton] = useState(productsIdsFetched);

    function handleClick(event) {
        let itemId = Number(event.target.id)
        addToLocalStorage(itemId, setInCartButton);
    }

    const { productURL } = useParams();
    const findItem = products.find(item => item.id.toString() === productURL.toString());

    return <>
        <div className="main">
            <Navbar />
            <div className="detailPageProduct">
                <div className="detailPageProductImage">
                    <img src={findItem.img} alt={findItem.name} />
                </div>
                <div className="detailPageProductDetails">
                    <h1>{findItem.name}</h1>
                    <p className="productDescription" >{findItem.description}</p>
                    <h2>{findItem.price}</h2>
                    <div className="detailPageAddToCartButton">
                    {Number(inCartButton.includes(findItem.id)) ? <div className="atCartButton">Sepette</div> : <AddToCartButton id={findItem.id} handleClick={handleClick} />}
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default ProductDetail;