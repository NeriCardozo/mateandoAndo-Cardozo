import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList.js'

function ItemListContainer(){

    const items = [{
        itemId: 1,
        itemName: "Mate de madera",
        itemCategoryId: "1",
        itemCategoryName: "Mates",
        stock: 4,
        price: 1000,
        img: './mate1.png'
    }] 

    

    const {params} = useParams();
    const [state, setState] = useState();

    useEffect(() => {
        setState(params);
        return (console.log(params))
    },[state])

    return (
        <ItemList stock= {3} initial= {0} id= {params} />
    )
}

export default ItemListContainer;