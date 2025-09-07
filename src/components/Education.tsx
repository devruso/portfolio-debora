import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const qualifications = [
    {
      type: 'Graduação',
      title: 'Psicologia',
      institution: 'Universidade Federal da Bahia',
      year: '2016',
      icon: GraduationCap
    },
    {
      type: 'Especialização',
      title: 'Terapia Cognitivo-Comportamental',
      institution: 'Instituto de Terapia Cognitiva',
      year: '2018',
      icon: Award
    },
    {
      type: 'Formação',
      title: 'Psicoterapia Online',
      institution: 'Conselho Federal de Psicologia',
      year: '2020',
      icon: BookOpen
    },
    {
      type: 'Especialização',
      title: 'Transtornos de Ansiedade',
      institution: 'Instituto Brasileiro de Psicologia',
      year: '2021',
      icon: Award
    },
    {
      type: 'Formação',
      title: 'Mindfulness e TCC',
      institution: 'Centro de Estudos em Psicologia',
      year: '2022',
      icon: BookOpen
    },
    {
      type: 'Certificação',
      title: 'Terapia para Adultos',
      institution: 'Associação de Psicoterapeutas',
      year: '2023',
      icon: Award
    }
  ];

  return (
    <section id="formação" className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[#A2B06D] mb-4">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Formação Profissional</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
            Educação & Especializações
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Formação sólida e educação continuada para oferecer o melhor cuidado psicológico baseado em evidências científicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualifications.map((qual, index) => {
            const Icon = qual.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#A2B06D]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#A2B06D]/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#A2B06D]" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[#A2B06D] bg-[#A2B06D]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {qual.type}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {qual.year}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                      {qual.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600">
                      {qual.institution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display'}}>
              Educação Continuada
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Participo regularmente de congressos, workshops e grupos de supervisão para manter-me atualizada 
              com as mais recentes pesquisas e técnicas em psicoterapia. Essa formação constante garante que 
              meus pacientes recebam sempre o melhor cuidado baseado nas práticas mais eficazes da psicologia moderna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}