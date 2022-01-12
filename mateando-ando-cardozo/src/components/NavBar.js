import React, { useEffect, useState, useContext} from 'react'
import { NavLink, useParams } from 'react-router-dom';
import '../css/navbar.scss'
import logo from '../logo.jpg'
import CartWidget from './CartWidget.js'
import ItemListContainer from './ItemListContainer.js'

function NavBar() {


  const {id} = useParams();

  const [state, setState] = useState();


  useEffect(() => {
    setState(id)
  }
  ,[{state}])

    return (
<div>
  <nav>
    <ul class="menuItems">
      <li> <NavLink to="/"><a><img src={logo}></img></a></NavLink></li>
      <li> <NavLink to="/Category/1"><a>Mates</a></NavLink></li>
      <li> <NavLink to={"/Category/2"}><a>Bombillas</a></NavLink></li>
      <li> <NavLink to={"/Category/3"}><a>Yerbas</a></NavLink></li>
      <li> <NavLink to={"/Category/4"}><a>Kits y accesorios</a></NavLink></li>
      <li> <NavLink to="/login"><a>Iniciar sesión</a></NavLink></li>
      <li> <NavLink to="/cart"><a><CartWidget /></a></NavLink></li>
    </ul>
  </nav>
</div>
)};
export default NavBar;