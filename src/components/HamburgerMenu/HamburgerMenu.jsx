import React, { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import "./HamburguerMenu.css"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div id="menu" className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
          <Link to="/productos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
            ver todo.
          </Link>
          <Link to="/categorias/remeras" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
            remeras.
          </Link>
          <Link to="/categorias/pantalones" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
            pantalones.
          </Link>
          <Link to="/categorias/hoodies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
            hoodies.
          </Link>
          <Link to="/categorias/bermudas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
            bermudas.
          </Link>
          <Link to="/categorias/zapatillas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
            zapatillas
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
