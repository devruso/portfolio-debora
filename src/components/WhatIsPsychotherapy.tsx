import { Heart, Brain, Users, Shield } from 'lucide-react';

export default function WhatIsPsychotherapy() {
  const benefits = [
    {
      icon: Heart,
      title: 'Bem-estar Emocional',
      description: 'Desenvolva uma relação mais saudável com suas emoções e aprenda a lidar com sentimentos difíceis de forma construtiva.'
    },
    {
      icon: Brain,
      title: 'Autoconhecimento',
      description: 'Compreenda seus padrões de pensamento, comportamentos e como eles influenciam sua vida cotidiana.'
    },
    {
      icon: Users,
      title: 'Relacionamentos',
      description: 'Melhore sua capacidade de se relacionar com outras pessoas e construa vínculos mais saudáveis e duradouros.'
    },
    {
      icon: Shield,
      title: 'Resiliência',
      description: 'Fortaleça sua capacidade de enfrentar desafios e desenvolva ferramentas para lidar com adversidades.'
    }
  ];

  return (
    <section id="psicoterapia" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[#A2B06D] mb-4">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Psicoterapia</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
            O que é Psicoterapia?
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            A psicoterapia é um processo colaborativo entre psicólogo e cliente, onde juntos exploramos 
            pensamentos, sentimentos e comportamentos em um ambiente seguro e acolhedor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'Playfair Display'}}>
              Um espaço para sua transformação
            </h3>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                A psicoterapia oferece um espaço único onde você pode expressar seus sentimentos sem julgamentos, 
                compreender padrões que podem estar limitando sua vida e desenvolver novas estratégias para 
                enfrentar desafios.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Através de técnicas baseadas em evidências científicas, trabalharemos juntos para promover 
                mudanças positivas e duradouras em sua vida, sempre respeitando seu ritmo e suas necessidades únicas.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                O processo psicoterapêutico é uma jornada de autoconhecimento que pode levar a uma vida mais 
                plena, relacionamentos mais saudáveis e uma maior capacidade de lidar com os desafios do dia a dia.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Ambiente terapêutico acolhedor"
              className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#E1CAAD]/30 rounded-3xl -z-10"></div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
              Benefícios da Psicoterapia
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A psicoterapia pode transformar diferentes aspectos da sua vida, promovendo crescimento pessoal e bem-estar.
            </p>
          </div>

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

        <div className="mt-20 bg-[#A2B06D]/5 p-12 rounded-3xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
            Por que a Psicoterapia é Importante?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-[#A2B06D]" style={{fontFamily: 'Playfair Display'}}>
                Mental
              </div>
              <p className="text-gray-700">
                Cuidar da saúde mental é tão importante quanto cuidar da saúde física. A psicoterapia oferece as ferramentas necessárias para manter o equilíbrio emocional.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-bold text-[#A2B06D]" style={{fontFamily: 'Playfair Display'}}>
                Social
              </div>
              <p className="text-gray-700">
                Relacionamentos saudáveis são fundamentais para nossa qualidade de vida. A terapia ajuda a desenvolver habilidades sociais e interpessoais.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-bold text-[#A2B06D]" style={{fontFamily: 'Playfair Display'}}>
                Pessoal
              </div>
              <p className="text-gray-700">
                O crescimento pessoal é um processo contínuo. A psicoterapia proporciona autoconhecimento e desenvolvimento de potencialidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}