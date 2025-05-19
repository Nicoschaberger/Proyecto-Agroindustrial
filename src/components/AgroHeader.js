import React, { useState } from 'react';

const AgroHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="border-2 border-black rounded-full p-1">
          <img 
            src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0k0yH6D7fYZlcpNaeLVjJvm95wniIQo8GFd7H" 
            alt="AgroRaf Logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-green-700 focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-green-700 hover:text-green-900 transition"
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="text-green-700 hover:text-green-900 transition"
              >
                Quiénes Somos
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('productos')}
                className="text-green-700 hover:text-green-900 transition"
              >
                Productos
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-green-700 hover:text-green-900 transition"
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-4 py-3 text-green-700 hover:bg-green-50 transition border-b border-gray-100"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('quienes-somos')}
              className="block w-full text-left px-4 py-3 text-green-700 hover:bg-green-50 transition border-b border-gray-100"
            >
              Quiénes Somos
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="block w-full text-left px-4 py-3 text-green-700 hover:bg-green-50 transition border-b border-gray-100"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-4 py-3 text-green-700 hover:bg-green-50 transition border-b border-gray-100"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default AgroHeader;