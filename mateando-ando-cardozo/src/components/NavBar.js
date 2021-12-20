import React, { useEffect, useState} from 'react'
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

    return (<>
<div>
  <nav>
    <ul class="menuItems">
      <li> <NavLink to="/Home"><a><img src={logo}></img></a></NavLink></li>
      <li> <NavLink to="/Items/"><a>Mates</a></NavLink></li>
      <li> <NavLink to={`"/Items/${2}"`}><a>Bombillas</a></NavLink></li>
      <li> <NavLink to={`"/Items/${3}"`}><a>Yerbas</a></NavLink></li>
      <li> <NavLink to={`"/Items/${4}"`}><a>Kits y accesorios</a></NavLink></li>
      <li> <NavLink to="/"><a>Iniciar sesión</a></NavLink></li>
      <li> <NavLink to="/"><a><CartWidget /></a></NavLink></li>
    </ul>
  </nav>
      <ItemListContainer />
</div>
 
</>
)};
export default NavBar;