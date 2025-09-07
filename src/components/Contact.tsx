import  { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Send } from 'lucide-react';
import { Appointment } from '../entities/Appointment';
import type { SessionType } from '../entities/Appointment';

export default function Contact() {
  const [formData, setFormData] = useState<{
    client_name: string;
    client_email: string;
    client_phone: string;
    preferred_date: string;
    preferred_time: string;
    session_type: SessionType;
    main_concern: string;
  }>({
    client_name: '',
    client_email: '',
    client_phone: '',
    preferred_date: '',
    preferred_time: '',
    session_type: 'online',
    main_concern: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await Appointment.create(formData);
      setSubmitted(true);
      setFormData({
        client_name: '',
        client_email: '',
        client_phone: '',
        preferred_date: '',
        preferred_time: '',
        session_type: 'online',
        main_concern: ''
      });
    } catch (error) {
      console.error('Erro ao agendar consulta:', error);
    }
    
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[#A2B06D] mb-4">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Contato</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
            Vamos Conversar?
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Estou aqui para ajudá-la em sua jornada de autoconhecimento e crescimento pessoal. 
            Entre em contato e agende sua primeira consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#A2B06D]/5 transition-colors">
                  <div className="w-12 h-12 bg-[#A2B06D]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#A2B06D]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-700">(11) 99999-9999</p>
                    <p className="text-sm text-gray-500">Segunda a sexta, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#A2B06D]/5 transition-colors">
                  <div className="w-12 h-12 bg-[#A2B06D]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#A2B06D]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-700">contato@deborapatriciam.com.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#A2B06D]/10 rounded-2xl">
                  <div className="w-12 h-12 bg-[#A2B06D]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#A2B06D]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <p className="text-gray-700 mb-2">(11) 99999-9999</p>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-[#A2B06D] hover:bg-[#8a9654] text-white px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium"
                    >
                      Conversar agora
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display'}}>
                Horários de Atendimento
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#A2B06D]" />
                  <span className="text-gray-700">Segunda a sexta: 8h às 18h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#A2B06D]" />
                  <span className="text-gray-700">Sábado: 8h às 12h</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#A2B06D]" />
                  <span className="text-gray-700">Atendimento 100% online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
              Agende sua Consulta
            </h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">Agendamento Enviado!</h4>
                <p className="text-green-700">
                  Recebi sua solicitação e entrarei em contato em breve para confirmar sua consulta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="client_name"
                      value={formData.client_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A2B06D] focus:ring-1 focus:ring-[#A2B06D] transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="client_email"
                      value={formData.client_email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A2B06D] focus:ring-1 focus:ring-[#A2B06D] transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="client_phone"
                    value={formData.client_phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A2B06D] focus:ring-1 focus:ring-[#A2B06D] transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data preferida
                    </label>
                    <input
                      type="date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A2B06D] focus:ring-1 focus:ring-[#A2B06D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horário preferido
                    </label>
                    <select
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A2B06D] focus:ring-1 focus:ring-[#A2B06D] transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de sessão
                  </label>
                  <select
                    name="session_type"
                    value={formData.session_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A2B06D] focus:ring-1 focus:ring-[#A2B06D] transition-colors"
                  >
                    <option value="online">Online</option>
                    <option value="presencial">Presencial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Principal motivo para a consulta
                  </label>
                  <textarea
                    name="main_concern"
                    value={formData.main_concern}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A2B06D] focus:ring-1 focus:ring-[#A2B06D] transition-colors resize-none"
                    placeholder="Descreva brevemente o que te levou a buscar ajuda psicológica..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A2B06D] hover:bg-[#8a9654] disabled:bg-gray-400 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar solicitação
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}