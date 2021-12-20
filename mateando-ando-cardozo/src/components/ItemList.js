import React, { useState, useEffect } from 'react'
import '../css/itemlist.scss'
import mate from '../mate1.png'
function ItemList(props){
    let fotoMate = mate;

    const [count, setCount] = useState(props.initial);

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

console.log(props.id)
    return(
        <div>
            <h3>¿Deseas agregar o quitar unidades?</h3>
            <img src={fotoMate} />
            <button onClick={addOne}>Sumar</button>
            <button onClick={substractOne}>Restar</button>
            <h3>Agregaste {count}</h3>
            <button onClick={addToCart}>Agregar al carrito</button>
    </div>
    )
}

export default ItemList;
