// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "../styles/global.css";
// import { Navbar } from "../components/Navbar";
// import { StatsSection } from "../components/StatsSection";
// import { ClientsSection } from "../components/ClientsSection";
// import { FeaturesSection } from "../components/FeaturesSection";
// import { BenefitsSection } from "../components/BenefitsSection";
// import { PricingTable } from "../components/PricingTable";
// import { ReportsSection } from "../components/ReportsSection";
// import { GlobalReachBanner } from "../components/GlobalReachBanner";
// import { ChatbotFAQ } from "../components/ChatbotFAQ";
// import WhatsAppButton from "../components/WhatsAppButton";
// import Footer from "../components/Footer";
// import { FinalCTASection } from "../components/FinalCTASection";
// import { ContactSection } from "../components/ContactSection";

// const Home = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.substring(1);
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location.hash]);

//   return (
//     <>
//       <Navbar />
//       <div id="inicio">
//         <StatsSection />
//       </div>
//       <div id="sobre">
//         <ClientsSection />
//       </div>
//       <div id="recursos">
//         <FeaturesSection />
//       </div>
//       <ReportsSection />
//       <GlobalReachBanner />
//       <BenefitsSection />
//       <PricingTable />
//       <div id="faq">
//         <ChatbotFAQ />
//       </div>
//       <FinalCTASection />
//        <ContactSection />
//       <div id="contato">
//         <Footer />
//       </div>
//       <WhatsAppButton whatsappLink="https://hubmsg.hubsys.io/wa/1/11458" />
//     </>
//   );
  
// };

// export default Home;
