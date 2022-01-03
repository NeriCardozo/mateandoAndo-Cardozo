import cartContext from "../context/cartContext";
import React from "react";


function CartContext({ children }) {
    let arr = []

    function addItem(value) {
        arr.push(value)
    }

    function checkItem(params) {
        return arr
    }

    function eventHelper(params) {

        const event = new CustomEvent('evento')
        window.dispatchEvent(event)
    }

    return (
        <cartContext.Provider value={{addItem,checkItem,eventHelper}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContext;