import React from "react";

function AddToCartButton(props) {

    return (
        <button className="productButton"
            id={props.id}
            onClick={props.handleClick}
            style={{ backgroundColor: "green" }}
        >
            Sepete Ekle</button>
    );
}


export default AddToCartButton;