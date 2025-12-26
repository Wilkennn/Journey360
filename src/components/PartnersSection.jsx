import React from "react";
import { CheckCircle, ArrowRight, Award } from "lucide-react";
import knnImage from "../assets/images/knn.webp";

export default function PartnersSection() {
  
  return (
    <section
      id="parceiros"
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* ================= ELEMENTOS DECORATIVOS DE FUNDO ================= */}
      {/* Blob Gradiente Suave - Tamanho reduzido no mobile */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      {/* SVG Linha Tracejada - Hidden no mobile para limpeza */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1200 600"
      >
        <path
          d="M 200,400 Q 400,550 600,300 T 1000,200"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="3"
          strokeDasharray="12 12"
        />
      </svg>

      <div className="container mx-auto px-4 md:px-6 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* ================= COLUNA DE IMAGEM (VISUAL) ================= */}
          {/* Movi para primeiro no mobile para impacto visual imediato */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            
            {/* Imagem Principal */}
            <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] border-4 md:border-[8px] border-white shadow-2xl shadow-purple-900/10 rotate-0 md:rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden h-[300px] md:h-[500px] w-full group mx-auto max-w-lg lg:max-w-none">
              <img
                src={knnImage}
                alt="Students at KNN Orlando"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay Gradiente na base */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Texto na Imagem */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-90 mb-1">
                  Orlando, USA
                </p>
                <h3 className="text-xl md:text-2xl font-bold">KNN Language School</h3>
              </div>
            </div>

            {/* Card Flutuante: Certificação (Ajustado posição para mobile) */}
            <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 z-20 bg-white p-3 md:p-5 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 md:gap-4 animate-[bounce_3s_infinite]">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                <Award size={20} className="text-yellow-500 md:w-7 md:h-7" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase">
                  Qualidade
                </p>
                <p className="text-sm md:text-base text-gray-800 font-bold leading-tight">Ensino Premium</p>
              </div>
            </div>

            {/* Elemento Decorativo: Círculo Atrás (Hidden no mobile para performance/layout limpo) */}
            <div
              className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-dashed border-purple-200 rounded-full -z-10 animate-[spin_60s_linear_infinite]`}
            ></div>
          </div>

          {/* ================= COLUNA DE CONTEÚDO (TEXTO) ================= */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-purple-100 mx-auto lg:mx-0">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4a1a6b]"></span>
              </span>
              <span className="text-[#4a1a6b] font-bold text-[10px] md:text-xs uppercase tracking-wider">
                Parceiro Oficial Exclusivo
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#181E4B] font-serif leading-tight">
              Unindo ensino de <br className="hidden md:block"/>
              <span className="relative inline-block mx-1 md:mx-0">
                qualidade
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-[#f43f5e] opacity-40"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              à vivência cultural.
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed text-justify md:text-left px-2 md:px-0">
              Nossa parceria exclusiva com a{" "}
              <strong>KNN Language School Orlando</strong> permite que você
              estude inglês diretamente na fonte. Combine o aprendizado em sala
              de aula com a prática no mundo real.
            </p>

            {/* Lista de Benefícios Estilizada */}
            <ul className="space-y-3 md:space-y-4 text-left">
              {[
                "Imersão total no idioma em ambiente nativo",
                "Certificação internacional reconhecida",
                "Aulas dinâmicas com passeios inclusos",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-[#4a1a6b] transition-colors duration-300 shrink-0">
                    <CheckCircle
                      size={18}
                      className="text-green-500 group-hover:text-white transition-colors md:w-5 md:h-5"
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center lg:justify-start pt-2">
                <a
                  href="https://www.knnidiomas.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-[#4a1a6b] font-bold text-base md:text-lg hover:text-[#f43f5e] transition-colors cursor-pointer"
                >
                  <span>Conheça a estrutura da escola</span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-purple-100 flex items-center justify-center shadow-sm group-hover:translate-x-2 transition-transform">
                    <ArrowRight size={18} className="md:w-5 md:h-5" />
                  </div>
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}