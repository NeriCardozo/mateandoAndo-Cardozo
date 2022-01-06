import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../css/itemdetail.scss'
import { NavLink } from 'react-router-dom';
import '../css/itemlist.scss';
import Loading from './Loading.js';

function ItemList(props){

    const [item, setItem] = useState();

    useEffect(() => {
        const getItem = () => {
            let res = props.producto;
            setItem(res);
        }
        getItem();
    },[])
    
    return item ? (
        <NavLink to={`/Item/${item.id}`}>

        <Card sx={{ maxWidth: 770 }}>
        <CardMedia
          component="img"
          height="600"
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
     </Card>
    </NavLink>
    ) : (
        <Loading />
    )
}

export default ItemList;
