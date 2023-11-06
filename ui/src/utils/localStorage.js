function getLocalStorageItems() {
    let shoppingCartText = localStorage.getItem("shoppingCartJSON");
    return JSON.parse(shoppingCartText) ?? [];
}

function addToLocalStorage(itemId, setStateFunc) {
    const shoppingCart = getLocalStorageItems();

    if (itemId !== null && !shoppingCart.includes(itemId)) {
        shoppingCart.push(itemId);
        localStorage.setItem("shoppingCartJSON", JSON.stringify(shoppingCart));
        setStateFunc(shoppingCart);
    }
}


export { getLocalStorageItems, addToLocalStorage };