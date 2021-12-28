import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail.js'
import productList from '../data/productList.js';
import Loading from './Loading.js';

function ItemDetailContainer(props){

const [producto, setProducto] = useState([]);
const params = useParams();

useEffect(() => {
    setTimeout(()=>{
    const getItems = (() => {
    let res = [...productList];
    setProducto(res);
    });
    getItems()
},2000)
});

if(producto.length > 1){
    return(
<ItemDetail id= {params} producto= {producto} />        
        )
}else{
    return (
        <Loading />
        )
    }
}
export default ItemDetailContainer;