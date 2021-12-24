import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js'
import productList from '../data/productList.js';
import '../css/itemlist.scss'

function ItemListContainer(){

const [productos, setProductos] = useState([]);
const categoryId = useParams();
console.log(categoryId);

useEffect(() => {
    setTimeout(()=>{
        if(!categoryId){
            const getItems = (() => {
                let res = [...productList];
                setProductos(res);
            });
            getItems()
        }else{
            const productosFiltrados = productList.filter(producto => producto.itemCategoryId === categoryId.id);
            console.log(productosFiltrados);
            setProductos(productosFiltrados);
        }
    },2000)
  
},[categoryId])

    if (productos.length === 0 ) {
        return <div>Cargando...</div>
    }else {

        return (
            <ul>
        {productos?.map( p => (
            <ItemList key= {p.itemId} producto= {p}/>
            ))}
</ul>
)   
}
}
export default ItemListContainer;