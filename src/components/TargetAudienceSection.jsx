import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import imgpersona from '../assets/images/img-persona.jpg';

export default function TargetAudienceSection() {
  
  const points = [
    "Sonha em estudar ou viver uma experiência no exterior",
    "Busca segurança, clareza e suporte profissional",
    "Não quer correr riscos com informações desencontradas",
    "Valoriza atendimento humano e planejamento sério"
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1e1b4b] relative overflow-hidden text-white">
       
       {/* Background Decorativo - Suavizado para mobile */}
       <div className="absolute top-0 right-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-[#f43f5e] rounded-full blur-[80px] md:blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-[#4a1a6b] rounded-full blur-[80px] md:blur-[150px] opacity-30 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

       <div className="container mx-auto px-4 md:px-6 lg:px-24 relative z-10">
         <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
             
             {/* Coluna Visual (Imagem) */}
             {/* Mantive Ordem 1 no mobile (Imagem primeiro) para impacto visual */}
             <div className="w-full md:w-1/2 relative flex justify-center order-1 md:order-2">
                
                {/* Container da Imagem */}
                <div className="relative z-10 w-full max-w-xs md:max-w-md aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white/10 shadow-2xl rotate-2 md:rotate-3 hover:rotate-0 transition-all duration-700 group">
                   <img 
                      src={imgpersona}
                      alt="Estudante feliz no exterior" 
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700" 
                   />
                   
                   {/* Overlay Gradiente */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/90 via-transparent to-transparent opacity-80"></div>

                   {/* Texto na Imagem */}
                   <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-8">
                      <p className="text-white/80 text-xs md:text-sm font-light uppercase tracking-widest mb-1">Experiência Real</p>
                      <p className="text-white font-serif text-xl md:text-2xl">Viva o Extraordinário</p>
                   </div>
                </div>

                {/* Badge Flutuante - Posição ajustada para mobile */}
                <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-8 z-20 bg-white text-[#1e1b4b] p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                    <div className="bg-orange-100 p-1.5 md:p-2 rounded-full shrink-0">
                        <ShieldCheck className="text-orange-500 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase">Segurança</p>
                        <p className="font-bold text-base md:text-lg leading-none">Garantida</p>
                    </div>
                </div>

                {/* Elementos Decorativos de Fundo - Hidden no mobile para performance */}
                <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/20 backdrop-blur-3xl rounded-full -z-0 animate-pulse"></div>
                <div className="hidden md:block absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 backdrop-blur-3xl rounded-full -z-0"></div>
             </div>

             {/* Coluna Texto */}
             <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
                <span className="text-[#f43f5e] font-bold tracking-wider text-xs md:text-sm uppercase mb-4 inline-block border-b border-[#f43f5e]/30 pb-2">
                   PARA QUEM É A JOURNEY360
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 md:mb-8 leading-tight">
                   A Journey360 é para <br className="hidden md:block"/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-orange-400">
                      você que:
                   </span>
                </h2>
                
                <div className="space-y-3 md:space-y-4 text-left">
                   {points.map((point, index) => (
                     <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#f43f5e]/30 transition-all duration-300 group cursor-default">
                        <div className="bg-[#f43f5e] p-1 md:p-1.5 rounded-full mt-0.5 shrink-0 shadow-lg shadow-pink-900/20 group-hover:scale-110 group-hover:bg-orange-500 transition-all">
                           <Check size={12} className="text-white md:w-3.5 md:h-3.5" strokeWidth={3} />
                        </div>
                        <p className="text-base md:text-lg font-light text-gray-200 group-hover:text-white transition-colors">{point}</p>
                     </div>
                   ))}
                </div>

                <div className="mt-8 md:mt-10 p-4 md:p-6 border-l-4 border-[#f43f5e] bg-gradient-to-r from-white/5 to-transparent rounded-r-xl md:rounded-r-2xl text-left">
                   <p className="text-lg md:text-2xl font-serif italic text-white/90">
                     "Se você quer mais do que uma viagem, você está no lugar certo."
                   </p>
                </div>
             </div>

         </div>
       </div>
    </section>
  );
}