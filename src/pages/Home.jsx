import { useEffect } from "react";
import "../styles/global.css";

import Journey360Hero from "../components/Journey360Hero";
import Header from "../components/Header";
import PartnersSection from "../components/PartnersSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AboutSection from "../components/AboutSection";
import DifferentialsSection from "../components/DifferentialsSection";
import TargetAudienceSection from "../components/TargetAudienceSection";
import ProgramsSection from "../components/ProgramsSection";
import ContactSection from "../components/ContactSection";

export default Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen font-sans text-gray-700 bg-gray-50 overflow-x-hidden">
      <Header />
      <div id="home">
        <Journey360Hero />
      </div>
      <div id="sobre">
        <AboutSection />
      </div>
      <DifferentialsSection />
      <div id="programas">
        <ProgramsSection />
      </div>
      <TargetAudienceSection />
      <PartnersSection />
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contato">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton whatsappLink="https://hubmsg.hubsys.io/wa/1/11458" />
    </div>
  );
};
