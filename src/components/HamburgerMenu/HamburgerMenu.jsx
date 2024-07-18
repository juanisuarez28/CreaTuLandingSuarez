import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Usa los íconos correctos para Heroicons v2
import { Link } from 'react-router-dom';
import "./HamburguerMenu.css"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div id="menu" className="relative">
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
          <Link to="/productos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            ver todo.
          </Link>
          <Link to="/categorias/remeras" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            remeras.
          </Link>
          <Link to="/categorias/pantalones" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            pantalones.
          </Link>
          <Link to="/categorias/hoodies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            hoodies.
          </Link>
          <Link to="/categorias/bermudas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            bermudas.
          </Link>
          <Link to="/categorias/zapatillas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            zapatillas
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
