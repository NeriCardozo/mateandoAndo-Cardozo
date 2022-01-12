import React, {useContext, useState} from "react";

const CartContext = React.createContext();
const CartUpdateContext = React.createContext()

export function useCart() {
    return useContext(CartContext)
}


export function CartProvider( { children }) {

    const [carritoInfo, setCarritoInfo] = useState([{
        buyer: {name:"neri", phone:"414142313", email:"neri@cardozo.com"},
        items: [{id: 1, title:"patineta",price:10},{id: 2, title:"celu",price:50}],
        total: 60,
      }]);

    return (
        <CartContext.Provider value={carritoInfo}>
            { children }
        </CartContext.Provider>)
}

export default CartContext;