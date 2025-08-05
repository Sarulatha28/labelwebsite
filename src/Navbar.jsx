import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
        <header className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
                  <div className=" font-jakarta font-bold text-xl leading-[100%] tracking-[0%] 
         font-bold">LOGO</div>
                 <nav className="hidden font-jakarta font-medium text-[14px] leading-[100%] tracking-[0%] md:flex space-x-6">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/about" className="hover:text-purple-600">About</Link>
          <Link to="/pricing" className="hover:text-purple-600">Pricing</Link>
          <Link to="/contact" className="hover:text-purple-600">Contact Us</Link>
        </nav>
        
        
                  <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
                    {menuOpen ? <FiX /> : <FiMenu />}
                  </button>
                </div>
                {menuOpen && (
                  <div className="md:hidden bg-white shadow px-4 py-4 space-y-2">
                    <a href="home" className="block hover:text-purple-600">Home</a>
                    <a href="about" className="block hover:text-purple-600">About</a>
                    <a href="pricing" className="block hover:text-purple-600">Pricing</a>
                    <a href="contact" className="block hover:text-purple-600">Contact Us</a>
                  </div>
                )}
              </header>
    </div>
  )
}
export default Navbar;
