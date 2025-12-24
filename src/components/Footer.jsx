import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Mail, 
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  
  const brandGradient = "bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e]";
  const brandTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e]";

  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
            <div className={`rounded-[3rem] p-10 md:p-16 relative overflow-hidden mb-24 shadow-2xl ${brandGradient}`}>
                <div className="absolute inset-0 opacity-10"><svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" /></svg></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">Pronto para dar o próximo passo?</h2>
                    <p className="mb-10 text-white/90 text-xl font-light leading-relaxed">Fale com um especialista da Journey360 e descubra qual programa faz sentido para o seu momento de vida.</p>
                    <div className="flex flex-col items-center gap-6">
                        <button className="bg-[#0f172a] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group w-full md:w-auto border border-white/10">Quero iniciar minha jornada <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></button>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-80 border-b border-white/30 pb-1">Viva a estrada. Ame a Journey.</span>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-16 mb-12">
                <div className="md:col-span-1 space-y-6">
                    <a href="#" className={`text-3xl font-bold font-cursive inline-block ${brandTextGradient}`}>Journey360</a>
                    <p className="text-gray-400 text-sm leading-relaxed">Live the road. Love the journey. <br/> Sua ponte segura e confiável entre o Brasil e o sonho americano.</p>
                    <div className="flex gap-4 pt-2">
                        {[{ icon: <Instagram size={20} />, href: "#" }, { icon: <Facebook size={20} />, href: "#" }, { icon: <Twitter size={20} />, href: "#" }].map((social, index) => (
                            <a key={index} href={social.href} className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#f43f5e] hover:text-white hover:border-[#f43f5e] transition-all duration-300">{social.icon}</a>
                        ))}
                    </div>
                </div>
                <div style={{visibility: 'hidden'}}>
                    <h4 className="font-bold text-lg mb-6 text-white">Empresa</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">{['Sobre Nós', 'Nossa Equipe', 'Carreiras', 'Blog & Notícias'].map((item) => (<li key={item}><a href="#" className="hover:text-[#f43f5e] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e] opacity-0 group-hover:opacity-100 transition-opacity"></span>{item}</a></li>))}</ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-6 text-white">Suporte</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">{['Fale Conosco', 'Central de Ajuda / FAQ', 'Política de Privacidade', 'Termos de Uso'].map((item) => (<li key={item}><a href="#" className="hover:text-[#f43f5e] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e] opacity-0 group-hover:opacity-100 transition-opacity"></span>{item}</a></li>))}</ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-6 text-white">Contato</h4>
                    <ul className="space-y-6 text-gray-400 text-sm">
                        <li className="flex items-start gap-3"><MapPin size={20} className="text-[#f43f5e] shrink-0 mt-0.5"/> <span><strong className="text-white block mb-1">Orlando, FL - USA</strong> 8815 Conroy Windermere Rd</span></li>
                        <li className="flex items-start gap-3"><MapPin size={20} className="text-[#f43f5e] shrink-0 mt-0.5"/> <span><strong className="text-white block mb-1">São Paulo, SP - BRA</strong> Av. Paulista, 1000 - Bela Vista</span></li>
                        <li className="flex items-center gap-3"><Mail size={20} className="text-[#f43f5e] shrink-0"/> <a href="mailto:contact@journey360.usa" className="hover:text-white transition-colors">contact@journey360.usa</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-gray-500 text-sm gap-4">
                <p>© 2024 Journey360 Viagens e Intercâmbio. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
  );
}