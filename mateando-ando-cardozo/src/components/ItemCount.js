import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/itemcount.scss'

function ItemCount(props){
    const [count, setCount] = useState(0);
    const [productosSumados, setProductosSumados] = useState(0)

    const addOne = ()=> {
        if (count < props.stock){
            setCount(count + 1)
        }else{
            alert("No hay suficiente stock!")
        }
    }
    const substractOne = ()=> {
        if (count != 0){
            setCount(count - 1)
        }else{
            alert("No tienes agregado este producto!")
        }
    }

    const addToCart = () => {
        setProductosSumados(count);
        setCount(0);
    }


    if (productosSumados === 0 ){
        return (
                <div>
        <h3>¿Deseas agregar o quitar unidades? Hay {props.stock} disponibles.</h3>
        <button onClick={addOne}>Sumar</button>
        <button onClick={substractOne}>Restar</button>
        <h3>Agregaste {count}</h3>
        <button onClick={addToCart}>Agregar al carrito</button>
    </div>)
}else{
    return (

        <div>
        <NavLink to="/cart">
            <h5>Finalizar la compra</h5>
        </NavLink>
    </div>
)}
}

export default ItemCount;