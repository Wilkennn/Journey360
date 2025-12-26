import React from 'react';
import { Target, Globe2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      {/* Background Decorativo - Ajustado tamanho e posição para mobile */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-50 rounded-full blur-[80px] md:blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>

      {/* Container com padding responsivo */}
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        
        {/* PARTE 1: QUEM SOMOS */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          
          {/* Imagem / Visual - Ordem trocada no mobile (opcional, mas comum colocar imagem primeiro ou depois) */}
          {/* Aqui mantive imagem primeiro. Adicionado max-w para não ficar gigante em tablets */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            
            {/* Moldura da Imagem */}
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white z-10 aspect-[4/5] md:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe Journey360" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Elemento Gráfico Atrás - Ajustado offset para mobile */}
            <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 w-full h-full border-2 border-[#f43f5e] rounded-[2rem] md:rounded-[2.5rem] -z-0"></div>
            
            {/* Card Flutuante - Ajustado posicionamento para não quebrar no mobile */}
            <div className="absolute -bottom-8 right-2 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl z-20 max-w-[240px] md:max-w-xs border border-gray-50">
               <div className="flex items-center gap-3 mb-2">
                 <div className="bg-green-100 p-1.5 md:p-2 rounded-full text-green-600 shrink-0">
                    <Globe2 size={16} className="md:w-5 md:h-5" />
                 </div>
                 <span className="font-bold text-[#181E4B] text-sm md:text-base">Brasil & EUA</span>
               </div>
               <p className="text-xs md:text-sm text-gray-500 leading-tight">Operação estratégica em Orlando e sede no Brasil.</p>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6 mt-4 lg:mt-0 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-[#4a1a6b] font-bold tracking-wider text-xs uppercase border border-purple-200">
               Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#181E4B] font-serif leading-tight">
              Criamos jornadas reais, pensadas em cada detalhe.
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed text-justify lg:text-left">
              <p>
                A <strong>Journey360 Viagens e Intercâmbio</strong> nasceu para simplificar e elevar a experiência de brasileiros que desejam estudar, viajar e viver momentos transformadores no exterior.
              </p>
              <p>
                Com sede no Brasil e operação estratégica em Orlando (EUA), atuamos como uma ponte sólida entre alunos, viajantes e instituições internacionais de excelência.
              </p>
              <p>
                Mais do que vender pacotes, criamos jornadas reais, pensadas em cada detalhe — acadêmico, logístico e humano.
              </p>
            </div>
          </div>
        </div>

        {/* PARTE 2: NOSSA MISSÃO */}
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
           
           {/* Efeito Minimalista de Fundo */}
           <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-purple-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-center text-center md:text-left">
             
             <div className="shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-50 transition-colors duration-500">
                   <Target size={28} className="text-gray-400 group-hover:text-[#4a1a6b] md:w-8 md:h-8 transition-colors duration-500" />
                </div>
             </div>

             <div className="space-y-3 md:space-y-4">
                <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Nossa Missão</h3>
                <p className="text-[#181E4B] text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-6xl">
                  Facilitar o acesso de brasileiros a experiências internacionais de alto nível, unindo <strong className="font-semibold text-[#4a1a6b]">educação, vivência cultural e segurança</strong>, com atendimento transparente.
                </p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}