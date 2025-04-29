import React from 'react'
import { Link } from 'react-router-dom'

const SpecialOffer = () => {
  return (
    <div className='flex flex-col mx-auto list-none font-bold space-y-8'>
        <h1>Special Offer</h1>
        <li><Link to="/offer">Pre</Link></li>
        <li><Link to="/offer">Pr0</Link></li>
        <li><Link to="/offer">Premium</Link></li>
    </div>
  )
}

export default SpecialOffer