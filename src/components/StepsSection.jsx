import React from 'react';
import { 
  Map, 
  CalendarCheck, 
  PlaneTakeoff, 
  ArrowRight 
} from 'lucide-react';

export default function StepsSection() {
  
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Escolha seu Programa",
      desc: "Defina se seu foco é intensivo em estudos, turismo ou um mix perfeito dos dois.",
      icon: <Map size={32} />,
      iconColor: "text-white", // Ícone Branco
      shadow: "shadow-xl shadow-purple-900/5 hover:shadow-purple-900/15", // Sombra mais definida
      borderColor: "border-purple-100 hover:border-[#4a1a6b]", // Borda com cor da marca no hover
      bgIcon: "bg-[#4a1a6b]", // Fundo Roxo Sólido
      accentColor: "text-[#4a1a6b]"
    },
    {
      id: 2,
      number: "02",
      title: "Roteiro Personalizado",
      desc: "Nossos especialistas montam toda a logística, hospedagem, vistos e ingressos.",
      icon: <CalendarCheck size={32} />,
      iconColor: "text-white",
      shadow: "shadow-xl shadow-pink-900/5 hover:shadow-pink-900/15",
      borderColor: "border-pink-100 hover:border-[#f43f5e]",
      bgIcon: "bg-[#f43f5e]", // Fundo Rosa/Vermelho Sólido
      accentColor: "text-[#f43f5e]"
    },
    {
      id: 3,
      number: "03",
      title: "Viva o Sonho",
      desc: "Embarque com segurança e suporte 24h para sua experiência inesquecível nos EUA.",
      icon: <PlaneTakeoff size={32} />,
      iconColor: "text-white",
      shadow: "shadow-xl shadow-orange-900/5 hover:shadow-orange-900/15",
      borderColor: "border-orange-100 hover:border-orange-500",
      bgIcon: "bg-orange-500", // Fundo Laranja Sólido
      accentColor: "text-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
        
        {/* ================= BACKGROUND PATH (Linha de Voo) ================= */}
        <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none hidden md:block z-0">
           <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
             {/* Linha que conecta o centro dos cards - Mais escura para contraste */}
             <path 
               d="M 150,200 C 350,200 350,100 600,200 C 850,300 850,200 1050,200" 
               fill="none" 
               stroke="#cbd5e1" 
               strokeWidth="3" 
               strokeDasharray="12 12" 
             />
           </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
             <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-[#4a1a6b] font-bold tracking-wider text-xs uppercase mb-4 border border-purple-200">
               Como funciona
             </span>
             <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] font-serif">
               Sua Jornada em 3 Passos
             </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`relative bg-white p-8 rounded-[2rem] border-2 transition-all duration-300 group ${step.shadow} ${step.borderColor} hover:-translate-y-2`}
              >
                 {/* Badge de Número (Agora mais visível e integrado) */}
                 <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className={`text-6xl font-black font-serif ${step.accentColor} opacity-20`}>
                      {step.number}
                    </span>
                 </div>

                 {/* Ícone Container (Sólido para contraste) */}
                 <div className={`w-20 h-20 rounded-2xl ${step.bgIcon} flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {React.cloneElement(step.icon, { 
                      className: `${step.iconColor}` 
                    })}
                 </div>

                 {/* Texto */}
                 <h3 className="text-xl font-bold mb-4 text-[#181E4B] group-hover:text-gray-900 relative z-10">
                   {step.title}
                 </h3>
                 <p className="text-gray-600 text-base leading-relaxed mb-6 relative z-10">
                   {step.desc}
                 </p>

                 {/* Link de Ação */}
                 <div className={`flex items-center gap-2 text-sm font-bold ${step.accentColor} opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all duration-300`}>
                    <span>Saiba mais</span>
                    <ArrowRight size={16} />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}