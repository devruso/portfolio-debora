import { Heart, ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5571992012894?text=Olá! Gostaria de agendar uma consulta.', '_blank');
  };

  return (
    <section id="início" className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-[#E1CAAD]/10 pt-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-olive">
                <Heart className="w-5 h-5" />
                <span className="text-sm  font-medium tracking-wider uppercase">Psicóloga Clínica</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'Playfair Display'}}>
                Débora Patrícia
                <span className="block text-[#A2B06D]">Melo</span>
              </h1>
              
              <div className="text-lg text-gray-600 font-medium">
                CRP-03/8851
              </div>
            </div>

            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              "Transformando vidas através da psicoterapia. Um espaço seguro para seu crescimento pessoal e bem-estar emocional."
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="group bg-olive hover:bg-darkOlive text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center gap-3"
              >
                Iniciar minha jornada
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('sobre');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-[#A2B06D] text-[#A2B06D] hover:bg-[#A2B06D] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg"
              >
                Conheça minha história
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A2B06D]" style={{fontFamily: 'Playfair Display'}}>500+</div>
                <div className="text-sm text-gray-600">Vidas transformadas</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A2B06D]" style={{fontFamily: 'Playfair Display'}}>8+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A2B06D]" style={{fontFamily: 'Playfair Display'}}>100%</div>
                <div className="text-sm text-gray-600">Online disponível</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1594824658729-3a6c43b2c79b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Psicóloga Débora Patrícia Melo"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#E1CAAD] rounded-3xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#A2B06D]/20 rounded-3xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}