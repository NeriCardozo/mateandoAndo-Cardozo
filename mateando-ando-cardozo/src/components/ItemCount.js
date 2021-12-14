import React, { useState, useEffect } from 'react'

function ItemCount(stock, initial, onAdd){

    const [stockActual, setStockActual] = useState(initial)

    // let sumarUno = (stock) =>


    return(
        <div>
            <h3>¿Deseas agregar o quitar stock?</h3>
            <button>Sumar</button>
            <button>Restar</button>
    </div>
    )
}

export default ItemCount;