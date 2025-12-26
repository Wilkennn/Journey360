import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, AtSign, Smartphone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const getFormattedDate = () => {
    const now = new Date();
    // Ajuste para ISO string simplificado se preferir, ou manter o formato manual
    const offset = now.getTimezoneOffset() * 60000;
    const localISOTime = (new Date(now - offset)).toISOString().slice(0, 19).replace('T', ' ');
    return localISOTime;
  };

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone') value = maskPhone(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // Limpa status anterior

    try {
      const payload = {
        operation: "insert",
        nome: formData.name,
        email: formData.email,
        telefone: formData.phone,
        dataCadastro: getFormattedDate(),
        consultorId: "2",
        comentario: formData.message || "Contato via Site",
        tipoAtendimentoId: "1",
        unidadeId: "2000038",
        origemId: "59"
      };

      const serviceResponse = await fetch('/api/proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!serviceResponse.ok) {
        throw new Error('Falha no envio final');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      console.error('ERRO:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-[#1e1b4b] relative overflow-hidden text-white">
      
      {/* Background Decorativo - Tamanhos ajustados para mobile */}
      <div className="absolute top-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#f43f5e] rounded-full blur-[80px] md:blur-[120px] opacity-10 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#4a1a6b] rounded-full blur-[80px] md:blur-[120px] opacity-20 translate-x-1/3 pointer-events-none"></div>

      {/* Container com padding lateral ajustado */}
      <div className="container mx-auto px-4 md:px-6 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Coluna 1: Informações */}
          <div className="lg:w-5/12 space-y-8 text-center lg:text-left">
            <div>
              <span className="text-[#f43f5e] font-bold tracking-wider text-sm uppercase mb-4 inline-block border-b border-[#f43f5e]/30 pb-2">
                FALE CONOSCO
              </span>
              
              {/* Tipografia responsiva ajustada */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight">
                Vamos planejar sua <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-orange-400">
                  próxima jornada?
                </span>
              </h2>
              
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Tem dúvidas sobre intercâmbio ou quer um roteiro personalizado? 
                Preencha o formulário e nossa equipe entrará em contato.
              </p>
            </div>

            {/* Itens de contato alinhados */}
            <div className="space-y-6 pt-4 inline-block text-left w-full max-w-md">
              <ContactItem icon={<Phone size={20} />} title="Telefone" content="+55 (11) 99999-9999" />
              <ContactItem icon={<Mail size={20} />} title="E-mail" content="contato@journey360.com.br" />
              <ContactItem icon={<MapPin size={20} />} title="Escritório" content="Av. Paulista, 1000 - SP" />
            </div>
          </div>

          {/* Coluna 2: Formulário */}
          <div className="lg:w-7/12 w-full">
            <form 
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl relative group"
            >
              <div className="space-y-5 md:space-y-6">
                
                {/* Nome */}
                <div className="relative">
                  <label className="text-sm text-gray-400 mb-2 block ml-1">Seu Nome</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-[#131135]/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#f43f5e] disabled:opacity-50 transition-all text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  {/* Email */}
                  <div className="relative">
                    <label className="text-sm text-gray-400 mb-2 block ml-1">Seu E-mail</label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        inputMode="email" 
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-[#131135]/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#f43f5e] disabled:opacity-50 transition-all text-sm md:text-base"
                      />
                    </div>
                  </div>
                  {/* Telefone */}
                  <div className="relative">
                    <label className="text-sm text-gray-400 mb-2 block ml-1">Seu Telefone</label>
                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(00) 00000-0000"
                        required
                        autoComplete="tel"
                        maxLength={15}
                        inputMode="numeric"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-[#131135]/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#f43f5e] disabled:opacity-50 transition-all text-sm md:text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Mensagem */}
                <div className="relative">
                  <label className="text-sm text-gray-400 mb-2 block ml-1">Mensagem</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-[#131135]/50 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#f43f5e] disabled:opacity-50 transition-all resize-none text-sm md:text-base"
                  ></textarea>
                </div>

                {/* Feedback UI */}
                {submitStatus === 'success' && (
                  <div className="flex items-start gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle size={18} className="shrink-0 mt-0.5" />
                    <span className="text-sm">Recebemos seus dados! Entraremos em contato em breve.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-start gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 animate-in fade-in slide-in-from-bottom-2">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span className="text-sm">Erro de conexão. Tente novamente ou chame no WhatsApp.</span>
                  </div>
                )}

                {/* Botão */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#f43f5e] to-orange-500 text-white font-bold py-3.5 md:py-4 rounded-xl shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, content }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#f43f5e] group-hover:bg-[#f43f5e] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
        {React.cloneElement(icon, { size: 18, className: "md:w-5 md:h-5" })}
      </div>
      <div>
        <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wide">{title}</h4>
        <p className="text-base md:text-lg text-white font-medium break-all md:break-normal">{content}</p>
      </div>
    </div>
  );
}