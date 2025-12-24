import React from 'react';
import { Target, Heart, Globe2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-6 lg:px-24">
        
        {/* PARTE 1: QUEM SOMOS */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Imagem / Visual */}
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe Journey360" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elemento Gráfico Atrás */}
            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-[#f43f5e] rounded-[2.5rem] -z-0"></div>
            
            {/* Card Flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-gray-50">
               <div className="flex items-center gap-3 mb-2">
                 <div className="bg-green-100 p-2 rounded-full text-green-600"><Globe2 size={20} /></div>
                 <span className="font-bold text-[#181E4B]">Brasil & EUA</span>
               </div>
               <p className="text-sm text-gray-500">Operação estratégica em Orlando e sede no Brasil.</p>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-[#4a1a6b] font-bold tracking-wider text-xs uppercase border border-purple-200">
               Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] font-serif leading-tight">
              Criamos jornadas reais, pensadas em cada detalhe.
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                A <strong>Journey360 Viagens e Intercâmbio</strong> nasceu para simplificar e elevar a experiência de brasileiros que desejam estudar, viajar e viver momentos transformadores no exterior.
              </p>
              <p>
                Com sede no Brasil e operação estratégica em Orlando (EUA), atuamos como uma ponte sólida entre alunos, viajantes e instituições internacionais de excelência, integrando educação, turismo e suporte completo em um único ecossistema.
              </p>
              <p>
                Mais do que vender pacotes, criamos jornadas reais, pensadas em cada detalhe — acadêmico, logístico e humano.
              </p>
            </div>
          </div>
        </div>

        {/* PARTE 2: NOSSA MISSÃO (Minimalista e Texto Corrigido) */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
           
           {/* Efeito Minimalista de Fundo */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
              
              <div className="shrink-0">
                 <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-50 transition-colors duration-500">
                    <Target size={32} className="text-gray-400 group-hover:text-[#4a1a6b] transition-colors duration-500" />
                 </div>
              </div>

              <div className="space-y-4">
                 <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Nossa Missão</h3>
                 <p className="text-[#181E4B] text-xl md:text-2xl leading-relaxed font-light max-w-6xl">
                   Facilitar o acesso de brasileiros a experiências internacionais de alto nível, unindo <strong className="font-semibold text-[#4a1a6b]">educação, vivência cultural e segurança</strong>, com atendimento transparente, próximo e profissional.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}