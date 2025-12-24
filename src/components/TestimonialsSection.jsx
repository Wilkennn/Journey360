import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  
  const testimonials = [
    {
      id: 1,
      text: "A Journey360 cuidou de tudo! Desde a matrícula na KNN até os ingressos da Disney. Foi a viagem mais tranquila da minha vida. A equipe foi super atenciosa do início ao fim.",
      author: "Ana Clara",
      role: "Estudante de Intercâmbio",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 2,
      text: "Profissionalismo impecável. O suporte local em Orlando fez toda a diferença quando precisamos de ajuda com transporte. Recomendo de olhos fechados para qualquer família.",
      author: "Roberto Mendes",
      role: "Turista em Família",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#1e1b4b] relative overflow-hidden text-white">
        
        {/* ================= BACKGROUND DECORATION (MAPA) ================= */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
               {/* Padrão de pontos simulando mapa mundi abstrato */}
               <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1" />
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid-dots)" />
            </svg>
            {/* Gradiente Overlay para suavizar */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b] via-transparent to-[#1e1b4b]"></div>
        </div>

        {/* Círculo de Luz (Glow) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f43f5e] rounded-full blur-[120px] opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
            
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                
                <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-24">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f43f5e] font-bold tracking-wider text-xs uppercase shadow-sm">
                        Nossos clientes
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                        Histórias de quem já <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-orange-400">viveu o sonho</span>.
                    </h2>
                    
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Não acredite apenas na nossa palavra. Veja o que nossos alunos e viajantes têm a dizer sobre a experiência Journey360.
                    </p>


                    {/* Stats */}
                    <div className="pt-8 border-t border-white/10 flex gap-8">
                        <div>
                            <p className="text-3xl font-bold text-white">500+</p>
                            <p className="text-sm text-gray-400">Alunos Embarcados</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">4.9/5</p>
                            <p className="text-sm text-gray-400">Nota Média</p>
                        </div>
                    </div>
                </div>

                {/* ================= COLUNA DIREITA (CARDS DE DEPOIMENTO) ================= */}
                <div className="lg:w-2/3 grid gap-8">
                    {testimonials.map((item) => (
                        <div key={item.id} className="relative group transition-transform duration-300 hover:-translate-y-1">
                            
                            {/* Efeito de Brilho e Borda Colorida Atrás */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e] rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

                            {/* Card Principal (Efeito de Vidro) */}
                            <div className="bg-white/95 backdrop-blur-xl text-gray-800 p-8 md:p-10 rounded-[3rem] shadow-2xl overflow-hidden border border-white/50">
                                
                                {/* Ícone de Citação Decorativo (Fundo) */}
                                <div className="absolute top-4 right-6 opacity-10 text-[#4a1a6b] group-hover:text-[#f43f5e] transition-colors duration-500">
                                    <Quote size={80} fill="currentColor" />
                                </div>

                                {/* Detalhe da Borda Colorida no Topo */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e]"></div>

                                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
                                    
                                    {/* Foto do Usuário (Destaque) */}
                                    <div className="shrink-0 relative">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-md group-hover:border-purple-100 transition-colors">
                                            <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#f43f5e] rounded-full flex items-center justify-center border-2 border-white shadow-sm group-hover:scale-110 transition-transform">
                                            <Quote size={14} className="text-white fill-current" />
                                        </div>
                                    </div>

                                    {/* Conteúdo */}
                                    <div className="space-y-4">
                                        {/* Estrelas */}
                                        <div className="flex gap-1 text-yellow-400">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star key={i} fill="currentColor" size={18} />
                                            ))}
                                        </div>

                                        <p className="text-lg md:text-xl font-medium italic leading-relaxed text-gray-700">
                                            "{item.text}"
                                        </p>

                                        <div>
                                            <h4 className="font-bold text-[#1e1b4b] text-lg">{item.author}</h4>
                                            <span className="text-sm text-[#f43f5e] font-semibold tracking-wide uppercase">{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
  );
}