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
  
  // Configuração da suavização da animação (A mesma do componente anterior)
  const customEase = "ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";

  const programs = [
    {
      id: 1,
      title: "Programas de Estudo no Exterior",
      desc: "Cursos presenciais em parceria com escolas internacionais, com foco em imersão real e fluência.",
      items: [
        "Cursos de idiomas",
        "Programas de curta e média duração",
        "Experiências acadêmicas internacionais"
      ],
      icon: <BookOpen size={36} />,
      iconColor: "text-blue-600", 
      bgColor: "bg-blue-50",
      // Gradiente específico para o Azul
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
      icon: <GraduationCap size={36} />,
      iconColor: "text-[#4a1a6b]", // Roxo
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
      icon: <Home size={36} />,
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
      icon: <Luggage size={36} />,
      iconColor: "text-[#f43f5e]", // Rosa
      bgColor: "bg-pink-50",
      gradientOverlay: "from-pink-600/90 via-pink-600/50 to-pink-600/10",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="programas" className="py-24 bg-white relative overflow-hidden">
        
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
              Soluções completas desenhadas para cada etapa do seu sonho.
            </p>
          </div>

          {/* ================= GRID DE CARDS ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            
            {programs.map((item, index) => (
              <div 
                key={item.id}
                // Lógica Zig-Zag mantida + Transições Suaves
                className={`
                  group relative bg-white rounded-[2.5rem] p-8 pt-10 
                  border border-gray-100 
                  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] 
                  hover:shadow-2xl hover:-translate-y-3 
                  transition-all duration-500 ${customEase} overflow-hidden
                  flex flex-col
                  ${index % 2 !== 0 ? 'lg:mt-16' : ''} 
                `}
              >
                
                {/* 1. Imagem de Fundo (Cinematic Zoom + Overlays) */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ${customEase} z-0`}>
                  {/* Imagem: Zoom de 105% para 125% bem lento */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full object-cover transform scale-105 group-hover:scale-125 transition-transform duration-[1500ms] ${customEase}`} 
                  />
                  
                  {/* Overlay Colorido (Mix Blend) */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradientOverlay} mix-blend-multiply`}></div>
                  
                  {/* Overlay Escuro Inferior (Para contraste do texto) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90"></div>
                </div>

                {/* 2. Conteúdo do Card */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Ícone Container */}
                  <div className={`
                    w-18 h-18 p-4 rounded-3xl flex items-center justify-center mb-6 shadow-sm shrink-0 w-fit
                    ${item.bgColor} 
                    group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:shadow-none
                    group-hover:scale-110
                    transition-all duration-500 ${customEase}
                  `}>
                    {React.cloneElement(item.icon, { 
                      className: `${item.iconColor} group-hover:text-white transition-colors duration-300` 
                    })}
                  </div>

                  {/* Textos */}
                  <h3 className="text-xl font-bold mb-3 text-[#181E4B] group-hover:text-white transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-6 font-medium">
                    {item.desc}
                  </p>
                  
                  {/* Lista de Itens (Bullet Points) */}
                  <ul className="space-y-3 mt-auto mb-6">
                    {item.items.map((subItem, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-gray-500 group-hover:text-white/90 transition-colors duration-300">
                            <CheckCircle2 size={16} className={`shrink-0 ${item.iconColor} group-hover:text-[#f43f5e] group-hover:drop-shadow-lg transition-colors duration-300`} />
                            <span>{subItem}</span>
                        </li>
                    ))}
                  </ul>

                  {/* Seta decorativa ("Saiba Mais") */}
                  {/* <div className={`mt-auto pt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 border-t border-white/20 ${customEase}`}>
                     <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-2">
                       Saiba mais <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                     </span>
                  </div> */}

                </div>
              </div>
            ))}

          </div>
        </div>
    </section>
  );
}