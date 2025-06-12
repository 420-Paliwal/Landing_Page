import React, { useState } from 'react';
import navbarLogo from '../assets/navbar_logo.png';
import { Menu, X } from 'lucide-react'; // Optional icon lib, or use your own

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 shadow-md w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={navbarLogo} alt="Logo" className="h-10" />
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-red-400">About Us</a></li>
            <li><a href="#home" className="hover:text-red-400">Features</a></li>
            <li><a href="#home" className="hover:text-red-400">More Option</a></li>
            <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
          </ul>
          <button className="py-2 px-6 font-bold rounded-2xl border-2 border-red-500 text-red-500">
            Log in
          </button>
          <button className="py-2 px-6 font-bold rounded-2xl border-2 border-red-500 bg-red-500 text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 flex flex-col space-y-4 bg-white shadow-md rounded-lg pb-4">
          <a href="#about" className="hover:text-red-400">About Us</a>
          <a href="#home" className="hover:text-red-400">Features</a>
          <a href="#home" className="hover:text-red-400">More Option</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
          <button className="py-2 px-4 font-bold rounded-2xl border-2 border-red-500 text-red-500">
            Log in
          </button>
          <button className="py-2 px-4 font-bold rounded-2xl border-2 border-red-500 bg-red-500 text-white">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
