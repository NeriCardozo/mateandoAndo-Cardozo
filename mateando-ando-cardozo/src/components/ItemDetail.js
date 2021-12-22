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
        console.log(item);
    },[])
    
    return(
        <ul>
            <h3> {props.producto[props.id.id - 1]?.itemName}</h3>
            <img src={props.producto[props.id.id - 1]?.img} />
            <ItemCount stock= {props.producto[props.id.id - 1]?.stock} initial={0}/>
        </ul>
)}

export default ItemDetail;