import { collection, getFirestore, addDoc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'

function CartChechkout() {
    
    // const sendOrder = ()=> {
    //     const precioTotal = 60  
    
    //     let order = {
    //         buyer: {name:"neri", phone:"414142313", email:"neri@cardozo.com"},
    //         items: [{id: 1, title:"patineta",price:10},{id: 2, title:"celu",price:50}],
    //         total: precioTotal,
    //     }
    //     const [orderId, setOrderId] = useState();
    //     const db = getFirestore();

    //     const ordersCollection = collection(db, "orders");
    //     addDoc(ordersCollection, order).then(({id})=> {
    //         setOrderId(id)
    //     })
    // }

    return (
    <div>Hola!</div>
    
    
    )
}

export default CartChechkout