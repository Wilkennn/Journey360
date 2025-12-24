import React from 'react';
import { Check, ShieldCheck } from 'lucide-react'; // Adicionei ShieldCheck para o badge
// CORREÇÃO: Removido as chaves da importação da imagem
import imgpersona from '../assets/images/img-persona.jpg';

export default function TargetAudienceSection() {
  
  // Dados extraídos para manter o JSX limpo
  const points = [
    "Sonha em estudar ou viver uma experiência no exterior",
    "Busca segurança, clareza e suporte profissional",
    "Não quer correr riscos com informações desencontradas",
    "Valoriza atendimento humano e planejamento sério"
  ];

  return (
    <section className="py-24 bg-[#1e1b4b] relative overflow-hidden text-white">
       
       {/* Background Decorativo (Ajustado para responsividade) */}
       <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#f43f5e] rounded-full blur-[100px] md:blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#4a1a6b] rounded-full blur-[100px] md:blur-[150px] opacity-30 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

       <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
             
             {/* Coluna Texto */}
             <div className="md:w-1/2 order-2 md:order-1">
                <span className="text-[#f43f5e] font-bold tracking-wider text-sm uppercase mb-4 block border-b border-[#f43f5e]/30 pb-2 w-fit">
                   PARA QUEM É A JOURNEY360
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 leading-tight">
                   A Journey360 é para <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-orange-400">
                      você que:
                   </span>
                </h2>
                
                <div className="space-y-4">
                   {points.map((point, index) => (
                     <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#f43f5e]/30 transition-all duration-300 group cursor-default">
                        <div className="bg-[#f43f5e] p-1.5 rounded-full mt-0.5 shrink-0 shadow-lg shadow-pink-900/20 group-hover:scale-110 group-hover:bg-orange-500 transition-all">
                           <Check size={14} className="text-white" strokeWidth={3} />
                        </div>
                        <p className="text-lg font-light text-gray-200 group-hover:text-white transition-colors">{point}</p>
                     </div>
                   ))}
                </div>

                <div className="mt-10 p-6 border-l-4 border-[#f43f5e] bg-gradient-to-r from-white/5 to-transparent rounded-r-2xl">
                   <p className="text-xl md:text-2xl font-serif italic text-white/90">
                     "Se você quer mais do que uma viagem, você está no lugar certo."
                   </p>
                </div>
             </div>

             {/* Coluna Visual */}
             <div className="md:w-1/2 relative flex justify-center order-1 md:order-2">
                {/* Container da Imagem */}
                <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 group">
                   <img 
                      src={imgpersona}
                      alt="Estudante feliz no exterior com mochila" 
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700" 
                   />
                   
                   {/* Overlay Gradiente */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/90 via-transparent to-transparent opacity-80"></div>

                   {/* Texto sobre a imagem (Opcional) */}
                   <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-white/80 text-sm font-light uppercase tracking-widest mb-1">Experiência Real</p>
                      <p className="text-white font-serif text-2xl">Viva o Extraordinário</p>
                   </div>
                </div>

                {/* Badge Flutuante (NOVO) - Dá um toque pro */}
                <div className="absolute -bottom-6 -left-4 md:-left-8 z-20 bg-white text-[#1e1b4b] p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                    <div className="bg-orange-100 p-2 rounded-full">
                        <ShieldCheck className="text-orange-500" size={24} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase">Segurança</p>
                        <p className="font-bold text-lg leading-none">Garantida</p>
                    </div>
                </div>

                {/* Elementos Decorativos de Fundo */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/20 backdrop-blur-3xl rounded-full -z-0 animate-pulse"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 backdrop-blur-3xl rounded-full -z-0"></div>
             </div>

          </div>
       </div>
    </section>
  );
}