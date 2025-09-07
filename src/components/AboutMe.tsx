import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import Modal from './Modal';

export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fullStory = `
    Minha jornada na psicologia começou há mais de 8 anos, quando descobri minha paixão por ajudar pessoas a encontrarem seu equilíbrio emocional e realizarem seu potencial.

    Formada em Psicologia pela Universidade Federal da Bahia, sempre busquei me especializar nas abordagens mais eficazes para diferentes tipos de demandas emocionais e comportamentais.

    Durante esses anos de prática clínica, tive o privilégio de acompanhar centenas de pessoas em suas jornadas de autoconhecimento e transformação. Cada história é única, e cada conquista me motiva a continuar aprimorando minha prática profissional.

    Acredito que a terapia é um espaço sagrado onde podemos nos conectar com nossa essência mais verdadeira, superar obstáculos e construir uma vida mais plena e significativa. Meu compromisso é oferecer um ambiente acolhedor, livre de julgamentos e plenamente focado em seu bem-estar.

    Além da prática clínica, também dedico tempo ao estudo contínuo, participando regularmente de congressos, cursos de atualização e grupos de supervisão. Essa formação constante me permite oferecer o melhor cuidado possível a cada pessoa que confía em mim.

    Minha abordagem é humanizada, respeitosa e baseada em evidências científicas. Acredito no potencial de cada ser humano para a mudança e crescimento, e será uma honra fazer parte da sua jornada de transformação.
  `;

  return (
    <>
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Débora em seu consultório"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#A2B06D]/10 rounded-3xl -z-10"></div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#A2B06D]">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wider uppercase">Sobre Mim</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'Playfair Display'}}>
                  Minha História
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Olá! Sou Débora Patrícia Melo, psicóloga clínica com mais de 8 anos de experiência em atendimento psicoterapêutico. Minha missão é proporcionar um espaço seguro e acolhedor para que você possa se conhecer melhor e transformar sua vida.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Especializada em Terapia Cognitivo-Comportamental (TCC), trabalho com adultos em diversas demandas emocionais, sempre priorizando uma abordagem humanizada e baseada em evidências científicas.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Acredito profundamente no potencial de cada pessoa para a mudança e crescimento. Cada jornada é única, e será uma honra fazer parte da sua...
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group bg-[#A2B06D] hover:bg-[#8a9654] text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold flex items-center gap-3"
              >
                <BookOpen className="w-5 h-5" />
                Ler história completa
              </button>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="p-6 bg-gray-50 rounded-2xl text-center">
                  <div className="text-2xl font-bold text-[#A2B06D] mb-2" style={{fontFamily: 'Playfair Display'}}>
                    CRP-03/8851
                  </div>
                  <div className="text-sm text-gray-600">Registro Profissional</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl text-center">
                  <div className="text-2xl font-bold text-[#A2B06D] mb-2" style={{fontFamily: 'Playfair Display'}}>
                    TCC
                  </div>
                  <div className="text-sm text-gray-600">Especialização</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Minha História - Débora Patrícia Melo"
      >
        <div className="prose prose-lg max-w-none">
          {fullStory.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </Modal>
    </>
  );
}