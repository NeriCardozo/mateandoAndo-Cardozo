import React, { useState, useEffect } from 'react'
import CartContext from '../contexts/CartContext.js';
import {useCart} from '../contexts/CartContext'
import '../css/cartwidget.scss'

function CartWidget(props) {
    const carrito  = useCart()

useEffect( ()=> {

})

    return <>
<div>
<i class="fas fa-shopping-cart">{carrito.length}</i>
</div>
</>
}
export default CartWidget;