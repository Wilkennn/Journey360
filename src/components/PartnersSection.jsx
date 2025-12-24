import React from "react";
import { CheckCircle, ArrowRight, Award, Star } from "lucide-react";

// Ajuste na importação: imagens geralmente são 'default imports'
import knnImage from "../assets/images/knn.webp";

export default function PartnersSection() {
  const brandGradient = "bg-gradient-to-r from-[#4a1a6b] to-[#f43f5e]";

  return (
    <section
      id="parceiros"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* ================= ELEMENTOS DECORATIVOS DE FUNDO ================= */}
      {/* Blob Gradiente Suave */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      {/* SVG Linha Tracejada (Conecta Texto -> Imagem) */}
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

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          {/* ================= COLUNA DE CONTEÚDO (TEXTO) ================= */}
          <div className="lg:w-1/2 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4a1a6b]"></span>
              </span>
              <span className="text-[#4a1a6b] font-bold text-xs uppercase tracking-wider">
                Parceiro Oficial Exclusivo
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] font-serif leading-tight">
              Unindo ensino de <br />
              <span className="relative inline-block">
                qualidade
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#f43f5e] opacity-40"
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

            <p className="text-gray-500 text-lg leading-relaxed">
              Nossa parceria exclusiva com a{" "}
              <strong>KNN Language School Orlando</strong> permite que você
              estude inglês diretamente na fonte. Combine o aprendizado em sala
              de aula com a prática no mundo real.
            </p>

            {/* Lista de Benefícios Estilizada */}
            <ul className="space-y-4">
              {[
                "Imersão total no idioma em ambiente nativo",
                "Certificação internacional reconhecida",
                "Aulas dinâmicas com passeios inclusos",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-[#4a1a6b] transition-colors duration-300">
                    <CheckCircle
                      size={20}
                      className="text-green-500 group-hover:text-white transition-colors"
                    />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://www.knnidiomas.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[#4a1a6b] font-bold text-lg hover:text-[#f43f5e] transition-colors mt-4 cursor-pointer"
            >
              <span>Conheça a estrutura da escola</span>
              <div className="w-10 h-10 rounded-full bg-white border border-purple-100 flex items-center justify-center shadow-sm group-hover:translate-x-2 transition-transform">
                <ArrowRight size={20} />
              </div>
            </a>
          </div>

          {/* ================= COLUNA DE IMAGEM (VISUAL) ================= */}
          <div className="lg:w-1/2 relative">
            {/* Imagem Principal */}
            <div className="relative z-10 rounded-[2.5rem] border-[8px] border-white shadow-2xl shadow-purple-900/10 rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden h-[500px] w-full group">
              <img
                src={knnImage}
                alt="Students at KNN Orlando"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay Gradiente na base */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Texto na Imagem */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                  Orlando, USA
                </p>
                <h3 className="text-2xl font-bold">KNN Language School</h3>
              </div>
            </div>

            {/* Card Flutuante 1: Certificação (Canto Superior Esquerdo) */}
            <div className="absolute -top-6 -left-6 z-20 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-[bounce_3s_infinite]">
              <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                <Award size={28} className="text-yellow-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">
                  Qualidade
                </p>
                <p className="text-gray-800 font-bold">Ensino Premium</p>
              </div>
            </div>

            {/* Card Flutuante 2: Avaliação (Canto Inferior Direito) */}
            {/* <div className="absolute bottom-10 -right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 text-center w-32 animate-pulse">
               <div className="flex justify-center gap-1 text-yellow-400 mb-1">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
               </div>
               <p className="text-xs text-gray-500 font-bold">5.0 de 5.0</p>
               <p className="text-[10px] text-gray-400">Google Reviews</p>
            </div> */}

            {/* Elemento Decorativo: Círculo Atrás */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-dashed border-purple-200 rounded-full -z-10 animate-[spin_60s_linear_infinite]`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
