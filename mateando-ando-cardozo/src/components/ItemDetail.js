import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../css/itemdetail.scss'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount.js';
import Loading from './Loading.js';
import {addDoc, collection, doc, getDoc, getFirestore, query, where} from 'firebase/firestore'

function ItemDetail(props){
  
  const precioTotal = 60  

  let order = {
    buyer: {name:"neri", phone:"414142313", email:"neri@cardozo.com"},
    items: [{id: 1, title:"patineta",price:10},{id: 2, title:"celu",price:50}],
    total: precioTotal,
}

  const db =  getFirestore();
  const params = useParams();
  const [item, setItem] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {nombre: e.target[0].value, precio:e.target[1].value }
    const data = collection(db, "orders")
    addDoc(data, order).then((snapshot)=>{
      console.log(snapshot.data());
      
    })
  }


  useEffect(() => {

      const getItem = doc(db, "items", params.id);
      getDoc(getItem).then((res) => {
        setItem({...res.data()});
        console.log(res.data());
      } )  
      
    },[])
    
    return item ?         
    <Card className="itemdetail" sx={{ maxWidth: 500 }}>
    <CardMedia
      component="img"
      height="440"
      image={item.image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {item.description}
      </Typography>
    </CardContent>
    <CardActions className="itemList">
    <ItemCount item={item} initial={0}/>
    </CardActions>
 </Card>
 :<Loading />
        // <ul>
        //     <h3> {item.itemName}</h3>
        //     <img src={item.img} />
        //     <h4> {item.descripcion1}</h4>
        //     <ItemCount stock= {item.stock} initial={0}/>
        // </ul>
}

export default ItemDetail;