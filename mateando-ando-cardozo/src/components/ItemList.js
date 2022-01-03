import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/itemlist.scss'

function ItemList(props){

    const [item, setItem] = useState();
    console.log(props)

    useEffect(() => {
        const getItem = () => {
            let res = props.producto;
            setItem(res);
        }
        getItem();
        console.log(item);
    },[])
    
    return item ? (
        <li> 
            <NavLink to={`/Item/${props.producto.itemId}`}>
                <h3 className="product__name"> {item.itemName}</h3>
                <img className="product__image" src={item.img} />
                <h4>Ver detalle</h4>
                <div class="product">
                <div class="product__price">
                <h3>${item.price}</h3>  
    </div>
  </div>
            </NavLink> 
        </li>   
    ) : (
        <div>Cargando!</div>
    )
}

export default ItemList;
