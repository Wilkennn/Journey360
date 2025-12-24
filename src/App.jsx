import React from 'react';

import Journey360Hero from './components/Journey360Hero';
import Header from './components/Header';
import PartnersSection from './components/PartnersSection';
import StepsSection from './components/StepsSection';
import TestimonialsSection from './components/TestimonialsSection'; 
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutSection from './components/AboutSection';
import DifferentialsSection from './components/DifferentialsSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import ProgramsSection from './components/ProgramsSection';
import ContactSection from './components/ContactSection';
export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-700 bg-gray-50 overflow-x-hidden">
      
      {/* ================= HEADER ================= */}
      {/* Removida a tag <header> externa para evitar conflito de position fixed */}
      <Header />

      {/* ================= HERO SECTION ================= */}
      {/* Adicione o ID 'home' aqui ou dentro do componente Journey360Hero */}
      <div id="home">
         <Journey360Hero />
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div id="sobre">
        <AboutSection />
      </div>

      {/* ================= DIFFERENTIALS ================= */}
      <DifferentialsSection />
      
      {/* ================= PROGRAMS ================= */}
      <div id="programas">
        <ProgramsSection />
      </div>

      {/* ================= TARGET AUDIENCE ================= */}
      <TargetAudienceSection />

      {/* ================= PARTNERSHIP ================= */}
      <PartnersSection />

      {/* ================= STEPS ================= */}
      {/* <StepsSection /> */}

      {/* ================= FAQ ================= */}
      <div id="faq">
        <FAQSection />
      </div>

      <div id="contato">
        <ContactSection />
      </div>

      {/* ================= FOOTER ================= */}
      <Footer /> 

      <WhatsAppButton whatsappLink="https://hubmsg.hubsys.io/wa/1/11458" />
    </div>
  );
}