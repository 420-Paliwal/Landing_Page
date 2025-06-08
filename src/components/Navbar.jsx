import React from 'react'
import navbarLogo from '../assets/navbar_logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center justify-between p-4 bg-white text-black'>
            <div className='flex items-center'>
            <img src={navbarLogo} alt="Logo" className='h-12' />
            {/* <span className='text-xl font-bold'>MyApp</span> */}
            </div>
            <div className='flex items-center space-x-8'>
            <ul className='flex space-x-4'>
            <li><a href="#about" className='hover:text-red-400'>About Us</a></li>
            <li><a href="#home" className='hover:text-red-400'>Features</a></li>
            <li><a href="#home" className='hover:text-red-400'>More Option</a></li>
            <li><a href="#contact" className='hover:text-red-400'>Contact</a></li>
            </ul>
            <button className='btn py-2 rounded-2xl px-8 border-2 border-red-500 text-red-500 cursor-pointer'>
                Log in
            </button>
            <button className='btn py-2 px-8 rounded-2xl border-2 border-red-500 text-white bg-red-500 cursor-pointer'>
                Sign Up
            </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar