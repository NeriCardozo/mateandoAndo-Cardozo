import React, { useState, useEffect } from 'react'
import '../css/itemcount.scss'
function ItemCount(props){

    let initialCount = props.initial;

    const [count, setCount] = useState(initialCount);

// Por algún motivo que desconozco, si primero presionas el botón 
// Sumar, te suma de 1 a 11 y así, pero si primero presionas el 
// de restar, funciona OK. Luego necesitaré ayuda con eso!

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
            <h3>¿Deseas agregar o quitar stock?</h3>
            <div>

            <button onClick={addOne}>Sumar</button>
            <button onClick={substractOne}>Restar</button>
            <div>Agregaste {count}</div>
            <button onClick={addToCart}>Agregar al carrito</button>
            </div>
    </div>
    )
}

export default ItemCount;