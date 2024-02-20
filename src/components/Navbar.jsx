import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectButton from './ConnectButton';
import headerLogo from '../assets/header_logo.png';
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
<nav className="flex justify-between items-center bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-4">
      <div className="flex items-center">
        {/* Add the logo */}
        <img src={headerLogo} alt="Logo" className="h-8 w-40 md:w-60 mr-2" />
      </div>

      {/* Hamburger Menu for mobile */}
      <div className="flex md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Desktop Menu (hidden on smaller screens) */}
      <div className="hidden md:flex">
      <Link to="/" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300 mr-4">Home</Link>
<Link to="/about" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300 mr-4">About</Link>
<Link to="/contact" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300">Contact</Link>
 </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-gray-800 p-4">
        <Link to="/" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300 mr-4">Home</Link>
<Link to="/about" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300 mr-4">About</Link>
<Link to="/contact" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300">Contact</Link>
 </div>
      )}

      {/* ConnectButton */}
      <div className="hidden md:flex ">
  <ConnectButton className="bg-yellow-500 text-gray-800 hover:bg-yellow-400 px-4 py-2 rounded-full" />
</div>

    </nav>
  );
};

export default Navbar;
