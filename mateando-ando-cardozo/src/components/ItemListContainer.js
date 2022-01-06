import * as React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js'
import {collection, doc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import '../css/itemlistcontainer.scss'
import '../css/flexbox.css'
import Loading from './Loading.js';

function ItemListContainer(){

const [items, setItems] = useState([{}]);
const params = useParams();
const db =  getFirestore();

useEffect(() => { 
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((res) => {
            if (params.id){
                const q = query(itemsCollection, where("categoryId", "==", params.id));
                getDocs(q).then((res) => {
                    setItems(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))
                })
        }else{
            // const ItemsCollectionFromCategory = itemsCollection.where('categoryId', '=',)
            setItems(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            console.log(items);
        }})
    },[params]
)
    if (items){
        return (   
            <div className="container">
            <ul className="grid-item">
        {items.map( p => (
            <ItemList key= {p.id} producto= {p}/>
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