import { Heart, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#A2B06D] rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{fontFamily: 'Playfair Display'}}>
                  Débora Patrícia Melo
                </h3>
                <p className="text-gray-400 text-sm">CRP-03/8851</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Psicóloga clínica especializada em TCC, dedicada a ajudar pessoas a encontrarem 
              equilíbrio emocional e realizarem seu potencial através da psicoterapia online.
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#A2B06D] hover:bg-[#8a9654] text-white p-3 rounded-xl transition-all duration-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              
              <a
                href="mailto:contato@deborapatriciam.com.br"
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-3 rounded-xl transition-all duration-300"
                title="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
              
              <a
                href="tel:+5511999999999"
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-3 rounded-xl transition-all duration-300"
                title="Telefone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{fontFamily: 'Playfair Display'}}>
              Navegação
            </h4>
            <ul className="space-y-3">
              {['início', 'sobre', 'formação', 'psicoterapia'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-[#A2B06D] transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{fontFamily: 'Playfair Display'}}>
              Serviços
            </h4>
            <ul className="space-y-3">
              {['abordagem', 'online', 'depoimentos', 'contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-[#A2B06D] transition-colors capitalize"
                  >
                    {item === 'abordagem' ? 'TCC' : item === 'online' ? 'Terapia Online' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Débora Patrícia Melo. Todos os direitos reservados.
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <span>CRP-03/8851</span>
              <span>•</span>
              <span>Psicóloga Clínica</span>
              <span>•</span>
              <span>Especialista em TCC</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-xs text-gray-500">
            Este site segue as normas do Código de Ética Profissional dos Psicólogos e as 
            resoluções do Conselho Federal de Psicologia.
          </div>
        </div>
      </div>
    </footer>
  );
}