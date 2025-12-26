import React, { useState } from 'react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Como funciona o processo de visto para os EUA?",
      answer: "Nossa equipe oferece assessoria completa e personalizada. Analisamos o seu perfil detalhadamente, auxiliamos no preenchimento correto do formulário DS-160 e preparamos você para a entrevista consular com simulações e dicas exclusivas, aumentando significativamente as chances de aprovação."
    },
    {
      question: "A acomodação está inclusa nos pacotes de intercâmbio?",
      answer: "Sim! Oferecemos opções em casas de família (homestay) selecionadas com rigor ou residências estudantis de alto padrão com infraestrutura completa. Você escolhe o que melhor se adapta ao seu estilo de vida e orçamento, garantindo conforto e segurança 24h durante toda a estadia."
    },
    {
      question: "Preciso ter inglês avançado para participar?",
      answer: "Não é necessário. Temos programas desenhados para todos os níveis, desde o iniciante (A1) até o avançado (C1/C2). A KNN Language School realiza um teste de nivelamento preciso no primeiro dia para alocar você na turma ideal para o seu desenvolvimento acelerado."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Trabalhamos com condições flexíveis: parcelamento facilitado no cartão de crédito, boleto bancário parcelado e transferência internacional. Entre em contato com nossos consultores para simular um plano financeiro personalizado que caiba no seu bolso."
    },
    {
      question: "Existe suporte local em Orlando caso eu precise?",
      answer: "Com certeza. Este é o nosso grande diferencial. Diferente de agências que apenas vendem o pacote, nós temos uma base física em Orlando com equipe própria que fala português, pronta para ajudar presencialmente com emergências médicas, transporte, dicas locais ou qualquer dúvida durante sua viagem."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // AJUSTE: py-16 no mobile, py-24 no desktop
    <section id="faq" className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      {/* Background Decoration - Opacidade ajustada para não brigar com texto */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-100 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-100 rounded-full blur-[80px]"></div>
        {/* Subtle Pattern */}
        <svg className="absolute top-10 md:top-20 right-4 md:right-10 w-16 h-16 md:w-24 md:h-24 text-gray-100" fill="currentColor" viewBox="0 0 100 100">
           <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="2" />
           </pattern>
           <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      {/* Container: px-4 no mobile */}
      <div className="container mx-auto px-4 md:px-6 lg:px-24 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
           <div className="inline-flex items-center gap-2 py-1 px-3 md:px-4 rounded-full bg-purple-50 border border-purple-100 text-[#4a1a6b] font-bold tracking-wider text-[10px] md:text-xs uppercase mb-4 md:mb-6 shadow-sm">
             <MessageCircleQuestion size={14} className="md:w-4 md:h-4" />
             <span>Tire suas dúvidas</span>
           </div>
           
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#181E4B] font-serif leading-tight">
             Perguntas Frequentes
           </h2>
           
           <p className="mt-4 text-gray-500 text-base md:text-lg max-w-lg mx-auto">
             Tudo o que você precisa saber sobre sua próxima viagem.
           </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                group rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-300 border
                ${openIndex === index 
                  ? 'bg-white shadow-xl shadow-purple-900/10 border-purple-100' 
                  : 'bg-white border-gray-100 hover:border-purple-100 hover:shadow-lg hover:shadow-purple-900/5'
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between p-5 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-inset"
              >
                {/* Texto da Pergunta - Tamanho ajustado */}
                <span className={`text-base md:text-xl font-bold pr-4 md:pr-8 transition-colors duration-300 ${openIndex === index ? 'text-[#4a1a6b]' : 'text-gray-700 group-hover:text-gray-900'}`}>
                  {faq.question}
                </span>
                
                {/* Ícone de Toggle - Tamanho fixo para não espremer */}
                <div className={`
                  shrink-0 relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500
                  ${openIndex === index 
                    ? 'bg-gradient-to-br from-[#4a1a6b] to-[#f43f5e] text-white rotate-180 shadow-md scale-105 md:scale-110' 
                    : 'bg-gray-50 text-gray-400 group-hover:bg-purple-50 group-hover:text-[#4a1a6b]'
                  }
                `}>
                   <Minus size={18} className={`absolute transition-all duration-300 md:w-5 md:h-5 ${openIndex === index ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                   <Plus size={18} className={`absolute transition-all duration-300 md:w-5 md:h-5 ${openIndex === index ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                </div>
              </button>
              
              {/* Conteúdo Expansível */}
              <div 
                className={`
                  grid transition-[grid-template-rows] duration-500 ease-in-out
                  ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                `}
              >
                <div className="overflow-hidden">
                  <div className="p-5 md:p-8 pt-0 text-gray-500 leading-relaxed text-sm md:text-lg border-t border-dashed border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-12 md:mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white shadow-sm mx-auto">
            <p className="text-gray-600 font-medium mb-3 md:mb-4 text-base md:text-lg">Não encontrou sua dúvida?</p>
            <a 
              href="https://hubmsg.hubsys.io/wa/1/11458"
              className="inline-flex items-center gap-2 text-[#f43f5e] font-bold text-base md:text-lg hover:text-[#4a1a6b] transition-colors group cursor-pointer"
            >
                Fale com um consultor
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
        </div>

      </div>
    </section>
  );
}