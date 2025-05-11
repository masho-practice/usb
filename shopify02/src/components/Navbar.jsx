import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] =useState('Shop');
  return (
    <div>
        <div>
            <h1>Shopify02</h1>
        </div>
        <ul>
            <li onClick={()=> setMenu('Shop')} className=''><Link to='/'>Home</Link>{menu === 'Shop'? <hr className=''/> : null}</li>
            <li onClick={()=> setMenu('men')} className=''><Link to='/'>Home</Link>{menu === 'men'? <hr className=''/> : null}</li>
            <li onClick={()=> setMenu('women')} className=''><Link to='/'>Home</Link>{menu === 'women'? <hr className=''/> : null}</li>
            <li onClick={()=> setMenu('kids')} className=''><Link to='/'>Home</Link>{menu === 'kids'? <hr className=''/> : null}</li>
        </ul>
        div
    </div>
  )
}

export default Navbar