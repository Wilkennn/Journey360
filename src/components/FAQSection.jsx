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
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-100 rounded-full blur-[80px]"></div>
        {/* Subtle Pattern */}
        <svg className="absolute top-20 right-10 w-24 h-24 text-gray-100" fill="currentColor" viewBox="0 0 100 100">
           <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="2" />
           </pattern>
           <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-24 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-purple-50 border border-purple-100 text-[#4a1a6b] font-bold tracking-wider text-xs uppercase mb-6 shadow-sm">
             <MessageCircleQuestion size={16} />
             <span>Tire suas dúvidas</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] font-serif leading-tight">
             Perguntas Frequentes
           </h2>
           <p className="mt-4 text-gray-500 text-lg">
             Tudo o que você precisa saber sobre sua próxima viagem.
           </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                group rounded-[2rem] overflow-hidden transition-all duration-300 border
                ${openIndex === index 
                  ? 'bg-white shadow-xl shadow-purple-900/10 border-purple-100' 
                  : 'bg-white border-gray-100 hover:border-purple-100 hover:shadow-lg hover:shadow-purple-900/5'
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold pr-8 transition-colors duration-300 ${openIndex === index ? 'text-[#4a1a6b]' : 'text-gray-700 group-hover:text-gray-900'}`}>
                  {faq.question}
                </span>
                
                {/* Ícone de Toggle com Animação */}
                <div className={`
                  shrink-0 relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                  ${openIndex === index 
                    ? 'bg-gradient-to-br from-[#4a1a6b] to-[#f43f5e] text-white rotate-180 shadow-md scale-110' 
                    : 'bg-gray-50 text-gray-400 group-hover:bg-purple-50 group-hover:text-[#4a1a6b]'
                  }
                `}>
                   {/* Ícones absolutos para transição suave */}
                   <Minus size={20} className={`absolute transition-all duration-300 ${openIndex === index ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                   <Plus size={20} className={`absolute transition-all duration-300 ${openIndex === index ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                </div>
              </button>
              
              {/* Conteúdo Expansível (Grid Transition Trick) */}
              <div 
                className={`
                  grid transition-[grid-template-rows] duration-500 ease-in-out
                  ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                `}
              >
                <div className="overflow-hidden">
                  <div className="p-6 md:p-8 pt-0 text-gray-500 leading-relaxed text-lg border-t border-dashed border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-white shadow-sm">
            <p className="text-gray-600 font-medium mb-4 text-lg">Não encontrou sua dúvida?</p>
            <button className="inline-flex items-center gap-2 text-[#f43f5e] font-bold text-lg hover:text-[#4a1a6b] transition-colors group">
                <a href="">
                    Fale com um consultor no WhatsApp
                </a>
            </button>
        </div>

      </div>
    </section>
  );
}