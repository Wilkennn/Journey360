import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import logo from '../assets/images/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Links mapeados para facilitar a manutenção e garantir consistência
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Programas', href: '#programas' },
    { name: 'FAQ', href: '#faq' },
  ];

  // Efeito para detectar scroll e mudar a cor do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4' // Começa transparente e maior
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 z-50 relative">
          <img 
            src={logo} 
            alt="Journey360 Logo" 
            className="h-12 md:h-14 w-auto object-contain transition-all" 
          />
        </a>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-sm uppercase tracking-wide transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-[#f43f5e]' : 'text-gray-800 hover:text-[#f43f5e]'
                // Nota: Se seu Hero for escuro, mude o 'text-gray-800' acima para 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Botão de CTA no Header (Opcional, mas recomendado) */}
          <a 
            href="#contato"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e] text-white text-sm font-bold hover:shadow-lg hover:scale-105 transition-all"
          >
            Fale Conosco
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-gray-700 hover:text-[#f43f5e] transition-colors focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
              className="text-2xl font-serif text-gray-800 hover:text-[#f43f5e] transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Botão Mobile */}
          <a 
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e] text-white font-bold text-lg shadow-xl"
          >
            Começar Agora
          </a>
        </div>

      </div>
    </header>
  );
}