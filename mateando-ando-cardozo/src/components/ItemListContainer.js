import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount.js'

function ItemListContainer(){
    return (

        <ItemCount stock="3" initial="1" />
    )
}

export default ItemListContainer;