import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
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
                <h3> {item.itemName}</h3>
                <img src={item.img} />
            </NavLink> 
        </li>   
    ) : (
        <div>Cargando!</div>
    )
}

export default ItemList;
