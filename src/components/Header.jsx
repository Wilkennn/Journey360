import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import logo from '../assets/images/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Programas', href: '#programas' },
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-3 md:py-4'
      }`}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Container do Logo */}
        <a 
          href="#home" 
          onClick={() => setIsOpen(false)}
          className="relative z-50 flex items-center h-full w-40 sm:w-52 md:w-64" 
        >
          <img 
            src={logo} 
            alt="Journey360 Logo" 
            className="
              absolute top-1/2 left-0 -translate-y-1/2 
              h-24 sm:h-32 md:h-44 
              w-auto max-w-none 
              object-contain 
              transition-all duration-300 
              drop-shadow-lg 
              py-4 md:py-6  /* <--- Aumentado: py-4 no mobile, py-6 no desktop */
            " 
          />
        </a>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-sm uppercase tracking-wide transition-colors duration-200 font-semibold ${
                isScrolled ? 'text-gray-600 hover:text-[#f43f5e]' : 'text-gray-800 hover:text-[#f43f5e]'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Botão Desktop */}
          <a 
            href="#contato"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e] text-white text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Fale Conosco
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden z-50 text-gray-700 hover:text-[#f43f5e] transition-colors focus:outline-none p-1"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '0', height: '100dvh' }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} 
              className="text-2xl font-serif font-medium text-gray-800 hover:text-[#f43f5e] transition-colors transform hover:scale-110 duration-200"
            >
              {link.name}
            </a>
          ))}
          
          {/* Botão Mobile - Maior área de toque */}
          <a 
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-4 rounded-full bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e] text-white font-bold text-lg shadow-xl hover:shadow-2xl active:scale-95 transition-all"
          >
            Começar Agora
          </a>
        </div>

      </div>
    </header>
  );
}