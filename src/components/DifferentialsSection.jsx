import React from "react";
import {
  Plane,
  Globe2,
  HeartHandshake,
  Award,
  Luggage,
  ShieldCheck,
} from "lucide-react";

export default function DifferentialsSection() {
  const differentials = [
    {
      id: 1,
      title: "Atendimento humano e especializado",
      desc: "Suporte próximo e personalizado para suas necessidades.",
      icon: <HeartHandshake size={32} />,
      iconColor: "text-[#f43f5e]",
      bgColor: "bg-pink-50",
      gradientOverlay: "from-pink-600/90 via-pink-600/50 to-pink-600/10",
      // NOVA IMAGEM 1: Foco em conexão humana profissional
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    },
    {
      id: 2,
      title: "Operação estruturada no Brasil e nos EUA",
      desc: "Segurança total com suporte nas duas pontas da sua jornada.",
      icon: <Globe2 size={32} />,
      iconColor: "text-[#4a1a6b]",
      bgColor: "bg-purple-50",
      gradientOverlay: "from-purple-800/90 via-purple-800/50 to-purple-800/10",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Parcerias educacionais reconhecidas",
      desc: "Conexão direta com instituições de excelência internacional.",
      icon: <Award size={32} />,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      gradientOverlay: "from-orange-600/90 via-orange-600/50 to-orange-600/10",
      // NOVA IMAGEM 3: Foco em universidade/formatura
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Soluções completas",
      desc: "Estudo + Viagem + Suporte. Tudo integrado em um só lugar.",
      icon: <Luggage size={32} />,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      gradientOverlay: "from-blue-600/90 via-blue-600/50 to-blue-600/10",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Transparência e Ética",
      desc: "Acompanhamento claro e honesto do início ao fim do processo.",
      icon: <ShieldCheck size={32} />,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      gradientOverlay: "from-green-700/90 via-green-700/50 to-green-700/10",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const customEase = "ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";

  return (
    <section
      id="diferenciais"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Decorativo SVG */}
      <div className="hidden lg:block absolute top-[40%] left-0 w-full h-64 -z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
        >
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
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-3 py-1 bg-red-50 text-[#f43f5e] rounded-full font-bold tracking-wider text-xs uppercase mb-3 border border-red-100">
            Por que a Journey360?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#181E4B] mb-6 font-serif leading-tight">
            Você não precisa enfrentar o intercâmbio sozinho
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Planejar uma viagem educacional envolve muitas decisões. A
            Journey360 existe para que você não caminhe sozinho nesse processo.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <div
              key={item.id}
              className={`
                group relative h-full flex flex-col 
                bg-white rounded-[2rem] p-6 pt-10 
                border border-gray-100 
                shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] 
                hover:shadow-2xl 
                hover:-translate-y-3 hover:scale-[1.02]
                transition-all duration-500 ${customEase}
                overflow-hidden cursor-default
                ${index % 2 !== 0 ? "xl:mt-12" : ""}
              `}
            >
              {/* === ÁREA DA IMAGEM DE FUNDO === */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ${customEase} z-0`}
              >
                {/* Imagem com Zoom Dramático */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transform scale-105 group-hover:scale-125 transition-transform duration-[1500ms] ${customEase}`}
                  loading="lazy" // Boa prática para performance
                />
                
                {/* Overlay Colorido (Mix Blend) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.gradientOverlay} mix-blend-multiply`}
                ></div>
                
                {/* Overlay Escuro Inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"></div>
              </div>

              {/* === CONTEÚDO DO CARD === */}
              <div className="relative z-10 flex flex-col h-full items-center text-center">
                
                {/* Container do Ícone */}
                <div
                  className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm 
                    ${item.bgColor} 
                    group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:shadow-none 
                    group-hover:scale-110
                    transition-all duration-500 ${customEase}
                  `}
                >
                  {React.cloneElement(item.icon, {
                    className: `${item.iconColor} group-hover:text-white transition-colors duration-300`,
                  })}
                </div>

                {/* Título */}
                <h3 className="font-bold text-[#181E4B] mb-3 leading-tight text-lg group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 mb-4 font-medium">
                  {item.desc}
                </p>

                {/* Link "Saiba Mais" */}
                {/* <div className={`mt-auto opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ${customEase}`}>
                  <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-b border-white/30 pb-1">
                    Saiba mais <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Footer da Seção */}
        <div className="mt-20 text-center bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 max-w-4xl mx-auto relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#4a1a6b] to-[#f43f5e]"></div>
          <p className="text-lg md:text-xl text-gray-600 italic font-medium">
            "Nosso time cuida de tudo para que você foque no que realmente
            importa:{" "}
            <strong className="text-[#f43f5e]">viver a experiência.</strong>"
          </p>
        </div>
      </div>
    </section>
  );
}