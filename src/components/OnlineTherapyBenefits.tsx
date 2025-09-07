import { Wifi, Clock, Shield, Globe, Heart, Smartphone } from 'lucide-react';

export default function OnlineTherapyBenefits() {
  const benefits = [
    {
      icon: Wifi,
      title: 'Conforto do seu Lar',
      description: 'Realize suas sessões no ambiente mais confortável e familiar para você, eliminando deslocamentos e aumentando seu bem-estar.'
    },
    {
      icon: Clock,
      title: 'Flexibilidade de Horários',
      description: 'Horários mais flexíveis que se adaptam à sua rotina, incluindo sessões noturnas e fins de semana quando necessário.'
    },
    {
      icon: Shield,
      title: 'Privacidade Garantida',
      description: 'Plataforma segura com criptografia de ponta a ponta, garantindo total sigilo e privacidade das suas informações.'
    },
    {
      icon: Globe,
      title: 'Sem Limitações Geográficas',
      description: 'Acesso ao atendimento independente de onde você esteja, seja em casa, no trabalho ou viajando.'
    }
  ];

  const whoCanBenefit = [
    {
      icon: Heart,
      title: 'Pessoas com Ansiedade Social',
      description: 'Para quem sente desconforto em sair de casa ou em ambientes desconhecidos.'
    },
    {
      icon: Clock,
      title: 'Profissionais Ocupados',
      description: 'Executivos, empresários e profissionais com agenda apertada que precisam de flexibilidade.'
    },
    {
      icon: Smartphone,
      title: 'Jovens e Adultos Digitais',
      description: 'Pessoas que se sentem mais confortáveis com tecnologia e comunicação digital.'
    },
    {
      icon: Globe,
      title: 'Moradores de Outras Cidades',
      description: 'Pessoas que moram longe ou viajam frequentemente e precisam de continuidade no tratamento.'
    }
  ];

  return (
    <section id="online" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[#A2B06D] mb-4">
            <Wifi className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Psicoterapia Online</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
            Terapia Online: Eficaz e Conveniente
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A psicoterapia online oferece a mesma qualidade e eficácia do atendimento presencial, 
            com a conveniência e flexibilidade que você precisa para cuidar da sua saúde mental.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'Playfair Display'}}>
              Por que escolher a terapia online?
            </h3>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                A pandemia acelerou a adoção da psicoterapia online, e hoje ela é reconhecida pelo 
                Conselho Federal de Psicologia como uma modalidade tão eficaz quanto o atendimento presencial.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Estudos científicos comprovam que a terapia online mantém os mesmos resultados terapêuticos 
                do atendimento presencial, oferecendo maior acessibilidade e comodidade.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Utilizo plataformas seguras e confiáveis, seguindo todas as diretrizes éticas e técnicas 
                estabelecidas pelo CFP para garantir a qualidade e sigilo do atendimento.
              </p>
            </div>

            <div className="bg-[#A2B06D]/5 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Playfair Display'}}>
                Aprovação do CFP
              </h4>
              <p className="text-gray-700">
                A psicoterapia online é regulamentada e aprovada pelo Conselho Federal de Psicologia, 
                garantindo segurança e qualidade no atendimento.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Terapia online confortável"
              className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#E1CAAD]/30 rounded-3xl -z-10"></div>
          </div>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12" style={{fontFamily: 'Playfair Display'}}>
              Benefícios da Terapia Online
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300 text-center border border-transparent hover:border-[#A2B06D]/20"
                  >
                    <div className="w-16 h-16 bg-[#A2B06D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-[#A2B06D]" />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display'}}>
                      {benefit.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12" style={{fontFamily: 'Playfair Display'}}>
              Para Quem é Indicada?
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoCanBenefit.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-[#A2B06D]/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-[#A2B06D]/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#A2B06D]" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{fontFamily: 'Playfair Display'}}>
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20 bg-[#A2B06D]/5 p-12 rounded-3xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
            Como Funciona o Atendimento Online?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-[#A2B06D] mb-4" style={{fontFamily: 'Playfair Display'}}>
                01
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Agendamento</h4>
              <p className="text-gray-700">
                Entre em contato via WhatsApp e agendamos sua primeira consulta de forma simples e rápida.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-3xl font-bold text-[#A2B06D] mb-4" style={{fontFamily: 'Playfair Display'}}>
                02
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Preparação</h4>
              <p className="text-gray-700">
                Você receberá o link da sessão e orientações sobre como se preparar para o atendimento online.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-3xl font-bold text-[#A2B06D] mb-4" style={{fontFamily: 'Playfair Display'}}>
                03
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Sessão</h4>
              <p className="text-gray-700">
                Realizamos a sessão em plataforma segura, com a mesma qualidade do atendimento presencial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}