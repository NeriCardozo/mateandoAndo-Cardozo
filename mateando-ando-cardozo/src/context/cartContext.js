import React from "react";


function CartContext({ children }) {
    let arr = [{}]

    function addItem(value) {
        arr.push(value)
    }

    function checkItem(params) {
        return arr
    }

    return (
        <CartContext.Provider value={{addItem,checkItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;