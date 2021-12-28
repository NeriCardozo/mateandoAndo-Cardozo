import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js'
import productList from '../data/productList.js';
import '../css/itemlist.scss'
import Loading from './Loading.js';

function ItemListContainer(){

const [productos, setProductos] = useState([]);
const categoryId = useParams();

useEffect(() => {
    
    setTimeout(()=>{
        if(!categoryId){
            const getItems = (() => {
                let res = [...productList];
                setProductos(res);
                console.log("Hola" + productos);
            });
            getItems()
        }else{
            const productosFiltrados = productList.filter(producto => producto.itemCategoryId === categoryId.id);
            console.log(productosFiltrados);
            setProductos(productosFiltrados);
        }
    },2000)
  
},[categoryId]);

    if(productos.length > 0){
        return (
            <div>
            <ul>
        {productos.map( p => (
            <ItemList key= {p.itemId} producto= {p}/>
            ))}
</ul>
        </div>
        )
        }else{
            return (
                <Loading />
                )
        }
            
}
export default ItemListContainer;