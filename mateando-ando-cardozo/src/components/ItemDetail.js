import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../css/itemdetail.scss'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount.js';
import productList from '../data/productList.js';
import Loading from './Loading.js';
import {collection, doc, getDoc, getFirestore, query, where} from 'firebase/firestore'

function ItemDetail(props){

  const db =  getFirestore();
  const params = useParams();
  const [item, setItem] = useState();


  useEffect(() => {

      const getItem = doc(db, "items", params.id);
      getDoc(getItem).then((res) => {
        setItem({...res.data()});
        console.log(res.data());
      } )  
      
    },[])
    
    return item ?         
    <Card sx={{ maxWidth: 500 }}>
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