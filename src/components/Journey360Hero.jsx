import React from 'react';
import { Plane, CheckCircle, Play, MapPin } from 'lucide-react';

export default function HeroSection() {
  const brandGradient = "bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e]";

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-6 lg:px-20 overflow-hidden bg-white">
        
        {/* Background Gradient Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#4a1a6b]/20 to-[#f43f5e]/20 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4"></div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          
          {/* Coluna de Texto (Esquerda) */}
          <div className="space-y-8 relative z-10 text-center lg:text-left">
            <span className="inline-block font-bold text-[#f43f5e] text-sm tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Live the road. Love the journey.
            </span>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#181E4B] leading-[1.1] tracking-tight font-serif">
              Transforme seu <br/>
              <span className="relative z-10 inline-block">
                sonho internacional
                <svg className="absolute -bottom-2 left-0 w-full h-4 -z-10 text-[#f43f5e]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.3" />
                </svg>
              </span> <br/>
              em uma experiência real
            </h1>
            
            <h2 className="text-xl font-bold text-[#4a1a6b]">
              Estude, viva e explore o mundo com quem entende de verdade.
            </h2>

            <p className="text-base text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed text-justify lg:text-left">
              A Journey360 Viagens e Intercâmbio é uma agência brasileira especializada em experiências educacionais e turísticas internacionais, com atuação direta nos Estados Unidos e parcerias globais. Cuidamos de toda a sua jornada – do planejamento ao embarque – para que você viva o exterior com segurança, propósito e suporte humano.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center lg:justify-start">
              <button className={`${brandGradient} text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1`}>
                Quero falar com um especialista
              </button>
              
              <button className="flex items-center gap-3 text-[#686D76] font-bold group hover:text-[#f43f5e] transition-colors px-6 py-4 rounded-xl border border-gray-200 hover:border-[#f43f5e] hover:bg-white">
                Conhecer os programas
              </button>
            </div>
          </div>

                    <div className="relative h-[600px] w-full hidden lg:block z-10 pl-10">
            
            {/* SVG: Linha Tracejada (Fundo) - Desenhada para passar ENTRE as fotos */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 600 600">
               {/* Curva que sai da esquerda, sobe para o ícone amarelo e desce para a direita */}
               <path 
                 d="M -20,250 C 50,250 150,100 300,120 C 450,140 550,300 620,400" 
                 fill="none" 
                 stroke="#d946ef" 
                 strokeWidth="3" 
                 strokeDasharray="12 12" 
                 className="opacity-60"
               />
               {/* Aviãozinho decorativo no final da linha (Direita) */}
               <g className="animate-pulse">
                   <Plane x="580" y="360" size={28} className="text-[#f43f5e] rotate-[45deg]" fill="currentColor" />
               </g>
            </svg>

            {/* Container Grid Assimétrico */}
            <div className="grid grid-cols-2 gap-6 h-full items-center relative z-10">
              
              {/* Coluna 1 (Esquerda) - Deslocada para baixo */}
              <div className="flex flex-col justify-center pt-16">
                 <div className="relative w-full h-[400px] rounded-[2.5rem] border-8 border-white shadow-2xl shadow-purple-900/10 rotate-[-2deg] hover:rotate-0 transition-all duration-500 z-20 group">
                    <img 
                      src="https://images.unsplash.com/photo-1597466599360-3b9775841aec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Orlando Nature" 
                      className="w-full h-full object-cover rounded-[2rem]"
                    />
                    {/* Overlay suave ao passar o mouse */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
                 </div>
              </div>

              {/* Coluna 2 (Direita) - 2 Imagens Empilhadas */}
              <div className="flex flex-col gap-6">
                 
                 {/* Imagem Topo (Menor/Paisagem) */}
                 <div className="w-full h-[200px] rounded-[2.5rem] border-8 border-white shadow-xl shadow-pink-500/10 transform translate-x-4 hover:translate-x-0 transition-transform duration-500 z-10 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1506169894395-36397e4aaee4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Intercâmbio Grupo" 
                      className="w-full h-full object-cover rounded-[2rem]"
                    />
                 </div>

                 {/* Imagem Baixo (Maior/Retrato) */}
                 <div className="w-full h-[320px] rounded-[2.5rem] border-8 border-white shadow-xl shadow-orange-500/10 z-10 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Disney Park" 
                      className="w-full h-full object-cover rounded-[2rem]"
                    />
                    
                    {/* Botão Azul (Pin) - Flutuando no canto inferior esquerdo desta imagem */}
                    <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#38bdf8] rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-bounce z-30">
                       <MapPin size={24} className="text-white" fill="currentColor" />
                    </div>
                 </div>
              </div>
            </div>

            {/* ELEMENTOS FLUTUANTES SOLTOS (Posicionamento Absoluto) */}
            
            {/* Botão Amarelo (Avião) - Entre a coluna da esquerda e a imagem do topo */}
            <div className="absolute top-[10%] left-[45%] -translate-x-1/2 w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 border-4 border-white z-40 animate-[spin_10s_linear_infinite]">
                {/* Nota: Animação de spin lenta, ou pode usar pulse */}
                <Plane size={32} className="text-white transform -rotate-45" fill="currentColor" />
            </div>

            {/* Badge de "Check" (Opcional - Estilo flutuante extra na esquerda) */}
            <div className="absolute bottom-[20%] left-0 bg-white/90 backdrop-blur-md py-3 px-5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-pulse z-30">
               <CheckCircle size={20} className="text-green-500" />
               <span className="font-bold text-gray-700 text-sm">Visto Aprovado</span>
            </div>

          </div>
        </div>
      </section>
  );
}