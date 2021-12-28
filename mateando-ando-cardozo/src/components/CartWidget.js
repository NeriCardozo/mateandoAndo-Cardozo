import React, { useState, useEffect } from 'react'

import '../css/cartwidget.scss'

function CartWidget(props) {
const [cartCount, setCartCount] = useState(0);

useEffect( ()=> {

})

    return <>
<div>
<i class="fas fa-shopping-cart">{cartCount}</i>
</div>
</>
}
export default CartWidget;