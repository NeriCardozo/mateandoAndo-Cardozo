import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import '../css/itemcount.scss'

function ItemCount(props){
    const item = props.item;
    const [count, setCount] = useState(0);
    const [productosSumados, setProductosSumados] = useState(0)

    console.log(item)

    const addOne = ()=> {
        if (count < item.stock){
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
        <h3>¿Deseas agregar o quitar unidades? Hay {item.stock} disponibles.</h3>
        <Button onClick={addOne}>Sumar</Button>
        <Button onClick={substractOne}>Restar</Button>
        <h3>Agregaste {count}</h3>
        <Button onClick={addToCart}>Agregar al carrito</Button>
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