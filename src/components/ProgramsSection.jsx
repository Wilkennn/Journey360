import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Home, 
  Luggage,
  Plane,
  CheckCircle2
} from 'lucide-react';

export default function ProgramsSection() {
  
  const customEase = "ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";

  const programs = [
    {
      id: 1,
      title: "Estudo no Exterior", // Título encurtado para mobile
      desc: "Cursos presenciais em parceria com escolas internacionais, com foco em imersão real e fluência.",
      items: [
        "Cursos de idiomas",
        "Programas de curta e média duração",
        "Experiências acadêmicas internacionais"
      ],
      icon: <BookOpen size={32} />, // Tamanho padronizado
      iconColor: "text-blue-600", 
      bgColor: "bg-blue-50",
      gradientOverlay: "from-blue-600/90 via-blue-600/50 to-blue-600/10",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Intercâmbio Educacional",
      desc: "Pacotes completos que unem estudo, vivência cultural e estrutura. Segurança total.",
      items: [
        "Curso e Orientação acadêmica",
        "Suporte pré-embarque",
        "Acompanhamento durante a experiência"
      ],
      icon: <GraduationCap size={32} />,
      iconColor: "text-[#4a1a6b]", 
      bgColor: "bg-purple-50",
      gradientOverlay: "from-purple-800/90 via-purple-800/50 to-purple-800/10",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Hospedagem Internacional",
      desc: "Soluções de hospedagem pensadas para conforto, localização e experiência.",
      items: [
        "Casas temáticas estudantis",
        "Hospedagem compartilhada",
        "Opções para curta/média permanência"
      ],
      icon: <Home size={32} />,
      iconColor: "text-orange-500", 
      bgColor: "bg-orange-50",
      gradientOverlay: "from-orange-600/90 via-orange-600/50 to-orange-600/10",
      image: "https://images.unsplash.com/photo-1556912173-3db996e7c3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Serviços Complementares",
      desc: "Tudo o que você precisa para uma jornada completa e sem preocupações.",
      items: [
        "Passagens aéreas e Seguro viagem",
        "Transfers e Passeios",
        "Orientação para documentação"
      ],
      icon: <Luggage size={32} />,
      iconColor: "text-[#f43f5e]", 
      bgColor: "bg-pink-50",
      gradientOverlay: "from-pink-600/90 via-pink-600/50 to-pink-600/10",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="programas" className="py-16 md:py-24 bg-white relative overflow-hidden">
        
        {/* ================= BACKGROUND DECORATION ================= */}
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
           <div className="absolute top-[40%] left-[20%] text-[#94a3b8] transform rotate-12 animate-bounce">
              <Plane size={32} fill="currentColor" />
           </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-24 relative z-10">
          
          {/* ================= HEADER DA SEÇÃO ================= */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
            <span className="inline-block px-3 py-1 bg-red-50 text-[#f43f5e] rounded-full font-bold tracking-wider text-[10px] md:text-xs uppercase mb-3 border border-red-100">
              Produtos e Serviços
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#181E4B] mb-4 md:mb-6 font-serif leading-tight">
              Nossos Programas
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Soluções completas desenhadas para cada etapa do seu sonho.
            </p>
          </div>

          {/* ================= GRID DE CARDS ================= */}
          {/* Grid ajustado: 1 col (mobile), 2 col (md), 4 col (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            
            {programs.map((item, index) => (
              <div 
                key={item.id}
                // Lógica Zig-Zag (lg:mt-16) apenas no desktop
                className={`
                  group relative bg-white rounded-[2rem] p-6 pt-8 md:p-8 md:pt-10 
                  border border-gray-100 
                  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] 
                  hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-3 
                  active:scale-[0.98] // Feedback de toque
                  transition-all duration-500 ${customEase} overflow-hidden
                  flex flex-col h-full lg:h-auto min-h-[380px] lg:min-h-[450px]
                  ${index % 2 !== 0 ? 'lg:mt-16' : ''} 
                `}
              >
                
                {/* 1. Imagem de Fundo (Cinematic Zoom + Overlays) */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ${customEase} z-0 pointer-events-none`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    className={`w-full h-full object-cover transform scale-105 group-hover:scale-125 transition-transform duration-[1500ms] ${customEase}`} 
                  />
                  
                  {/* Overlay Colorido */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradientOverlay} mix-blend-multiply`}></div>
                  
                  {/* Overlay Escuro Inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90"></div>
                </div>

                {/* 2. Conteúdo do Card */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  
                  <div>
                    {/* Ícone Container */}
                    <div className={`
                      w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-sm shrink-0 w-fit
                      ${item.bgColor} 
                      group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:shadow-none
                      group-hover:scale-110
                      transition-all duration-500 ${customEase}
                    `}>
                      {React.cloneElement(item.icon, { 
                        className: `${item.iconColor} group-hover:text-white transition-colors duration-300 w-7 h-7 md:w-9 md:h-9` 
                      })}
                    </div>

                    {/* Textos */}
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#181E4B] group-hover:text-white transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-6 font-medium">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Lista de Itens (Bullet Points) */}
                  <ul className="space-y-2 md:space-y-3 mt-auto">
                    {item.items.map((subItem, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm font-semibold text-gray-500 group-hover:text-white/90 transition-colors duration-300">
                            <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${item.iconColor} group-hover:text-[#f43f5e] group-hover:drop-shadow-lg transition-colors duration-300`} />
                            <span>{subItem}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
    </section>
  );
}