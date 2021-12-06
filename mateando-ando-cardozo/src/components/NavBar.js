import React from 'react'
import '../css/navbar.scss'
import logo from '../logo.jpg'

function NavBar() {

    return (
<div>
  <nav>
    <ul class="menuItems">
      <li><a href='#'><img src={logo}></img></a></li>
      <li><a href='#'>Mates</a></li>
      <li><a href='#'>Bombillas</a></li>
      <li><a href='#'>Yerbas</a></li>
      <li><a href='#'>Kits y accesorios</a></li>
      <li><a href='#'>Iniciar sesión</a></li>
    </ul>
  </nav>
</div>
    )
}

export default NavBar;