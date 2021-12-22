import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js'

function ItemListContainer(){

    const productList = [
    {  
        itemId: 1,
        itemName: "Mate de madera",
        itemCategoryId: "1",
        stock: 4,
        price: 3400,
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/170/249/products/10-11-86ef5c92d4171ee79215991339559691-1024-1024.jpg'
},
    {  
        itemId: 2,
        itemName: "Bombilla larga",
        itemCategoryId: "2",
        stock: 4,
        price: 800,
        img: 'https://www.herbolariodharma.com/pics/contenido/c2bf481e8df7af42ac7e22abf90ef5ed_bombilla_curvalarga.jpg'
},
    {  
        itemId: 3,
        itemName: "Yerba Mañanita 500gr",
        itemCategoryId: "3",
        stock: 4,
        price: 300,
        img: 'https://argensnack.com/wp-content/uploads/latinafy_image_7790387015225.jpg'
    },
    {  
        itemId: 4,
        itemName: "Mate de calabaza",
        itemCategoryId: "1",
        stock: 1,
        price: 3400,
        img: 'https://yerbamateprimicia.com.ar/wp-content/uploads/2020/10/MATEEE.png'
    },
    {  
        itemId: 5,
        itemName: "Bombilla corta",
        itemCategoryId: "2",
        stock: 4,
        price: 600,
        img: 'https://distribuidoralondon.com.ar/wp-content/uploads/2021/09/BOMBILLA-DEL-CAMPO-CORTA-RECTA.jpg'
    },
    {  
        itemId: 6,
        itemName: "Yerba Mañanita 1kg",
        itemCategoryId: "3",
        stock: 4,
        price: 500,
        img: 'https://angelitagolosinas.com.ar/wp-content/uploads/2020/03/ma%C3%B1anita-1kg.png'
    },
    {  
        itemId: 7,
        itemName: "Llavero Mate Pajarito",
        itemCategoryId: "4",
        stock: 4,
        price: 450,
        img: 'https://yerbapajarito.minegocio.com.py/storage/images/models/620AFEFA-1A33-BA26-A967-4D6187FCF7FA.png'
    },
    {  
        itemId: 8,
        itemName: "Termo Stanley",
        itemCategoryId: "4",
        stock: 4,
        price: 10000,
        img: 'https://www.doiteargentina.com.ar/wp-content/uploads/2019/11/doite-termo-stanley-verde-nuevo-2020-46721-01.jpg'
    },
];

const categoryList = [
    {
categoryId: 1,
categoryName: "Mates"
},
{
categoryId: 2,
categoryName: "Bombillas"
},
    {
categoryId: 3,
categoryName: "Yerbas"
    },
{
categoryId: 4,
categoryName: "Accesorios"
    },
            
];

const [productos, setProductos] = useState([]);
const params = useParams();

useEffect(() => {
    setTimeout(()=>{
        if(!params){
            const getItems = (() => {
                let res = [...productList];
                setProductos(res);
            });
            getItems()
        }else{
            function checkCategory(){
                return params.id;
            }
            const getItemsByCategory = (() => {
                let objAux = [...productList];
                let res = objAux.filter(checkCategory, )
                setProductos(res)
            })
            getItemsByCategory();
        }
    },2000)
  
},[])


return (
    <ul>
        {productos?.map( p => (
            <ItemList key= {p.itemId} producto= {p}/>
))}
</ul>
)   
}
export default ItemListContainer;