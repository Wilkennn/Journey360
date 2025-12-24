import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Home, 
  Luggage,
  Plane 
} from 'lucide-react';

export default function ProgramsSection() {
  
  // Dados extraídos do PDF (Produtos e Serviços), adaptados para o layout visual de 4 cards
  const services = [
    {
      id: 1,
      title: "Programas de Estudo",
      desc: "Cursos presenciais em parceria com escolas internacionais, focados em imersão real e fluência prática.",
      icon: <BookOpen size={36} />,
      color: "text-blue-600", 
      bgColor: "bg-blue-50",
      overlayColor: "bg-blue-900/90",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Intercâmbio Educacional",
      desc: "Pacotes completos unindo estudo, vivência cultural e estrutura. Segurança e acompanhamento total.",
      icon: <GraduationCap size={36} />,
      color: "text-[#4a1a6b]", // Roxo da marca
      bgColor: "bg-purple-50",
      overlayColor: "bg-[#4a1a6b]/90",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Hospedagem Internacional",
      desc: "Soluções em casas temáticas estudantis ou compartilhadas, pensadas para conforto e localização.",
      icon: <Home size={36} />,
      color: "text-orange-500", 
      bgColor: "bg-orange-50",
      overlayColor: "bg-orange-600/90",
      image: "https://images.unsplash.com/photo-1556912173-3db996e7c3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Serviços Complementares",
      desc: "Passagens, seguro viagem, transfers e passeios. Tudo o que você precisa para uma jornada completa.",
      icon: <Luggage size={36} />,
      color: "text-[#f43f5e]", // Rosa/Vermelho da marca
      bgColor: "bg-pink-50",
      overlayColor: "bg-[#f43f5e]/90",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="programas" className="py-24 bg-white relative overflow-hidden">
        
        {/* ================= BACKGROUND DECORATION ================= */}
        {/* Linha Sinuosa SVG que conecta os cards */}
        <div className="hidden lg:block absolute top-[40%] left-0 w-full h-64 -z-0 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 1440 300" preserveAspectRatio="none">
             <path 
               d="M0,150 C 320,100 420,250 720,200 C 1020,150 1120,50 1440,100" 
               fill="none" 
               stroke="#cbd5e1" 
               strokeWidth="3" 
               strokeDasharray="16 16" 
               className="opacity-80"
             />
           </svg>
           {/* Avião Decorativo */}
           <div className="absolute top-[40%] left-[20%] text-[#94a3b8] transform rotate-12 animate-bounce">
              <Plane size={32} fill="currentColor" />
           </div>
        </div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          
          {/* ================= HEADER DA SEÇÃO ================= */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block px-3 py-1 bg-red-50 text-[#f43f5e] rounded-full font-bold tracking-wider text-xs uppercase mb-3 border border-red-100">
              Produtos e Serviços
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] mb-6 font-serif leading-tight">
              Nossos Programas
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Soluções completas para sua jornada, do planejamento à experiência.
            </p>
          </div>

          {/* ================= GRID DE CARDS (Layout Antigo) ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            
            {services.map((item, index) => (
              <div 
                key={item.id}
                // Lógica Zig-Zag: Cards pares (index ímpar) descem
                className={`group relative bg-white rounded-[2.5rem] p-8 pt-10 
                  border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] 
                  hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden
                  ${index % 2 !== 0 ? 'lg:mt-16' : ''} 
                `}
              >
                
                {/* 1. Imagem de Fundo (Reveal Effect) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className={`absolute inset-0 ${item.overlayColor} mix-blend-multiply backdrop-blur-[2px]`}></div>
                </div>

                {/* 2. Conteúdo do Card */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Ícone Container */}
                  <div className={`
                    w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-sm
                    ${item.bgColor} 
                    group-hover:bg-white/20 group-hover:backdrop-blur-md group-hover:shadow-none
                    transition-all duration-500
                  `}>
                    {React.cloneElement(item.icon, { 
                      className: `${item.color} group-hover:text-white transition-colors duration-300` 
                    })}
                  </div>

                  {/* Textos */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {item.desc}
                  </p>
                  
                  {/* Seta decorativa */}
                  <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                     <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                       Saiba mais <span className="text-lg">→</span>
                     </span>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
    </section>
  );
}