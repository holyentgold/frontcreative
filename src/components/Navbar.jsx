import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Creative Hub</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li><Link to="/" className="hover:text-yellow-300 block py-2 md:py-0">Home</Link></li>
          <li><Link to="/advisory" className="hover:text-yellow-300 block py-2 md:py-0">Advisory</Link></li>
          <li><Link to="/financing" className="hover:text-yellow-300 block py-2 md:py-0">Financing</Link></li>
          <li><Link to="/workspace" className="hover:text-yellow-300 block py-2 md:py-0">Workspace</Link></li>
          <li><Link to="/portfolio" className="hover:text-yellow-300 block py-2 md:py-0">Portfolio</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


