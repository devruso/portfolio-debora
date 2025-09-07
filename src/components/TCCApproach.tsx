import { Lightbulb, Target, Repeat, Users, BookOpen, TrendingUp } from 'lucide-react';

export default function TCCApproach() {
  const principles = [
    {
      icon: Lightbulb,
      title: 'Identificação de Padrões',
      description: 'Reconhecemos pensamentos e comportamentos que podem estar causando sofrimento ou limitando seu potencial.'
    },
    {
      icon: Target,
      title: 'Objetivos Específicos',
      description: 'Definimos metas claras e alcançáveis para cada sessão e para o processo terapêutico como um todo.'
    },
    {
      icon: Repeat,
      title: 'Técnicas Práticas',
      description: 'Utilizamos exercícios e estratégias comprovadas que você pode aplicar no seu dia a dia.'
    },
    {
      icon: Users,
      title: 'Colaboração Ativa',
      description: 'Trabalhamos juntos como uma equipe, com você sendo o protagonista do seu processo de mudança.'
    },
    {
      icon: BookOpen,
      title: 'Baseada em Evidências',
      description: 'Utilizamos técnicas respaldadas por pesquisas científicas que comprovam sua eficácia.'
    },
    {
      icon: TrendingUp,
      title: 'Foco no Presente',
      description: 'Concentramos nos desafios atuais e em como desenvolver habilidades para o futuro.'
    }
  ];

  return (
    <section id="abordagem" className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[#A2B06D] mb-4">
            <Lightbulb className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Abordagem Terapêutica</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
            Terapia Cognitivo-Comportamental
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A TCC é uma abordagem terapêutica eficaz que foca na relação entre pensamentos, emoções e comportamentos, 
            oferecendo ferramentas práticas para transformação pessoal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'Playfair Display'}}>
              Uma abordagem científica e humanizada
            </h3>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                A Terapia Cognitivo-Comportamental é reconhecida mundialmente como uma das abordagens mais 
                eficazes para tratar uma ampla gama de questões emocionais e comportamentais.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Na TCC, exploramos como nossos pensamentos influenciam nossas emoções e comportamentos. 
                Através dessa compreensão, desenvolvemos estratégias práticas para promover mudanças positivas 
                e duradouras em sua vida.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Esta abordagem é especialmente eficaz para questões como ansiedade, depressão, fobias, 
                transtornos obsessivo-compulsivos, problemas de relacionamento e muitos outros desafios emocionais.
              </p>
            </div>

            <div className="bg-[#A2B06D]/5 p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'Playfair Display'}}>
                Eficácia Comprovada
              </h4>
              <p className="text-gray-700">
                Estudos científicos demonstram que a TCC é eficaz em 80% dos casos, 
                com resultados duradouros que se mantêm ao longo do tempo.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Processo terapêutico TCC"
              className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#A2B06D]/20 rounded-3xl -z-10"></div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
              Princípios da TCC
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nossa abordagem terapêutica baseia-se em princípios fundamentais que guiam todo o processo de transformação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#A2B06D]/20 group"
                >
                  <div className="w-14 h-14 bg-[#A2B06D]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#A2B06D]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#A2B06D]" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display'}}>
                    {principle.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
              Como a TCC Pode Te Ajudar?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <div className="text-[#A2B06D] font-semibold">Questões Tratadas:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Ansiedade e Pânico</li>
                  <li>• Depressão</li>
                  <li>• Fobias</li>
                  <li>• Estresse</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <div className="text-[#A2B06D] font-semibold">Desenvolvimento Pessoal:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Autoestima</li>
                  <li>• Relacionamentos</li>
                  <li>• Comunicação</li>
                  <li>• Liderança</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <div className="text-[#A2B06D] font-semibold">Resultados:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Maior bem-estar</li>
                  <li>• Resiliência</li>
                  <li>• Autoconhecimento</li>
                  <li>• Qualidade de vida</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}