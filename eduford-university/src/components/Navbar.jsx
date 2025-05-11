import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className=' w-full hero-bg relative '>
        <div className='flex max-w-[1460px] z-10 justify-between px-3 sm:px-6 md:px-20 lg:px-32'>
            <div className=' py-6'>
                <img src={logo} alt="logo" className='h-16'/>
            </div>
            <ul className='hidden sm:flex gap-8 sm:gap-16 items-center justify-center'>
                <li>
                    <a href="/" >Home</a>
                </li>
                <li>
                    <a href="#course" >Course</a>
                </li>
                <li>
                    <a href="#about" >About</a>
                </li>
                <li>
                    <a href="#contact" >Contact</a>
                </li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar