import React, { useState, useEffect } from 'react'
import '../css/itemcount.scss'

function ItemCount(props){
    const [count, setCount] = useState(0);

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
        setCount(0)
    }

return(
    <div>
        <h3>¿Deseas agregar o quitar unidades? Hay {props.stock} disponibles.</h3>
        <button onClick={addOne}>Sumar</button>
        <button onClick={substractOne}>Restar</button>
        <h3>Agregaste {count}</h3>
        <button onClick={addToCart}>Agregar al carrito</button>
    </div>)
}

export default ItemCount;