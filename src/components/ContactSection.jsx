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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const getFormattedDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      console.log("--- INICIANDO PROCESSO ---");

      try {

        const payload = {
          //operation: "insert",
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone,
          dataCadastro: getFormattedDate(),
          consultorId: "2",
          comentario: formData.message || "Teste Site",
          tipoAtendimentoId: "1",
          unidadeId: "2000038",
          origemId: "59"
        };

        const serviceResponse = await fetch('/api-services/services', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-USER': 'egali-www',
            'X-TOKEN': '103891',
            'X-API-PASSWORD': 'f053d9b450db6b42acdadd2197b5ed21' 
          },
          body: JSON.stringify(payload)
        });

        const serviceResult = await serviceResponse.text();
        console.log("RESULTADO FINAL:", serviceResult);

        // if (!serviceResponse.ok) {
        //   throw new Error('Falha no envio final');
        // }

        setSubmitStatus('success');
        // setFormData({ name: '', email: '', phone: '', message: '' });

      } catch (error) {
        console.error('ERRO DETALHADO:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <section className="py-24 bg-[#1e1b4b] relative overflow-hidden text-white">
      
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#f43f5e] rounded-full blur-[120px] opacity-10 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4a1a6b] rounded-full blur-[120px] opacity-20 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Coluna 1: Informações */}
          <div className="lg:w-5/12 space-y-8">
            <div>
              <span className="text-[#f43f5e] font-bold tracking-wider text-sm uppercase mb-4 block border-b border-[#f43f5e]/30 pb-2 w-fit">
                FALE CONOSCO
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                Vamos planejar sua <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-orange-400">
                  próxima jornada?
                </span>
              </h2>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Tem dúvidas sobre intercâmbio ou quer um roteiro personalizado? 
                Preencha o formulário e nossa equipe entrará em contato.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <ContactItem icon={<Phone size={20} />} title="Telefone" content="+55 (11) 99999-9999" />
              <ContactItem icon={<Mail size={20} />} title="E-mail" content="contato@journey360.com.br" />
              <ContactItem icon={<MapPin size={20} />} title="Escritório" content="Av. Paulista, 1000 - SP" />
            </div>
          </div>

          {/* Coluna 2: Formulário */}
          <div className="lg:w-7/12">
            <form 
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative group"
            >
              <div className="space-y-6">
                
                {/* Nome */}
                <div className="relative">
                  <label className="text-sm text-gray-400 mb-2 block ml-1">Seu Nome</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-[#131135]/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#f43f5e] disabled:opacity-50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="relative">
                    <label className="text-sm text-gray-400 mb-2 block ml-1">Seu E-mail</label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-[#131135]/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#f43f5e] disabled:opacity-50 transition-all"
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
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-[#131135]/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#f43f5e] disabled:opacity-50 transition-all"
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
                    className="w-full bg-[#131135]/50 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#f43f5e] disabled:opacity-50 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Feedback UI */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                    <CheckCircle size={18} />
                    <span className="text-sm">Recebemos seus dados! Entraremos em contato em breve.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    <AlertCircle size={18} />
                    <span className="text-sm">Erro de conexão. Tente novamente ou chame no WhatsApp.</span>
                  </div>
                )}

                {/* Botão */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#f43f5e] to-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Processando...</span>
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
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#f43f5e] group-hover:bg-[#f43f5e] group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide">{title}</h4>
        <p className="text-lg text-white font-medium">{content}</p>
      </div>
    </div>
  );
}