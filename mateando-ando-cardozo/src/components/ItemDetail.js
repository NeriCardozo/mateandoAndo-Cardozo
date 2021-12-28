import React, { useState, useEffect } from 'react'
import '../css/itemdetail.scss'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount.js';
function ItemDetail(props){

    const [item, setItem] = useState({});

    useEffect(() => {
        const getItem = () => {
            let res = '';
            res = props.producto[props.id.id];
            setItem(res);
        }
        getItem();
    },[])
    
    return(
        <ul>
            <h3> {item.itemName}</h3>
            <img src={item.img} />
            <h4> {item.descripcion1}</h4>
            <ItemCount stock= {item.stock} initial={0}/>
        </ul>
)}

export default ItemDetail;