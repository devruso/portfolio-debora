import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Ana Carolina S.',
      age: 32,
      profession: 'Executiva de Marketing',
      rating: 5,
      text: 'A Débora me ajudou a superar minha ansiedade de forma incrível. As sessões online foram perfeitas para minha rotina corrida. Hoje me sinto muito mais confiante e equilibrada. Recomendo de coração!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Roberto M.',
      age: 28,
      profession: 'Engenheiro de Software',
      rating: 5,
      text: 'Procurei a Débora por causa da depressão e problemas de relacionamento. Através da TCC, consegui entender meus padrões de pensamento e mudá-los. Minha vida melhorou completamente.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Mariana L.',
      age: 35,
      profession: 'Professora',
      rating: 5,
      text: 'Como mãe e profissional, eu estava sempre estressada. A Débora me ensinou técnicas que uso no meu dia a dia. As sessões são acolhedoras e ela realmente se importa com meu progresso.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Carlos Eduardo P.',
      age: 42,
      profession: 'Empresário',
      rating: 5,
      text: 'Estava enfrentando uma crise na empresa e pessoal. A Débora me ajudou a ver as situações de outra forma e desenvolver estratégias práticas. Hoje tenho mais clareza em minhas decisões.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Juliana F.',
      age: 26,
      profession: 'Designer Gráfica',
      rating: 5,
      text: 'A terapia online foi uma descoberta incrível! Posso fazer as sessões do meu ateliê, o que é perfeito. A Débora é muito profissional e empática. Me sinto muito mais segura de mim.',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[#A2B06D] mb-4">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium tracking-wider uppercase">Depoimentos</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display'}}>
            O que dizem meus pacientes
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Histórias reais de transformação e crescimento pessoal através da psicoterapia.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative">
              <Quote className="w-12 h-12 text-[#A2B06D]/20 absolute top-8 left-8" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-gray-800 text-center leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].profession}, {testimonials[currentIndex].age} anos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white hover:bg-[#A2B06D] text-[#A2B06D] hover:text-white rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-[#A2B06D] w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-white hover:bg-[#A2B06D] text-[#A2B06D] hover:text-white rounded-full shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Thumbnails - Hidden on mobile */}
          <div className="hidden lg:flex justify-center gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`p-4 bg-white rounded-2xl shadow-md transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-2 border-[#A2B06D] scale-105'
                    : 'border border-gray-200 hover:shadow-lg'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mx-auto mb-2"
                />
                <div className="text-xs font-medium text-gray-700 text-center">
                  {testimonial.name.split(' ')[0]}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display'}}>
              Sua Jornada de Transformação Começa Agora
            </h3>
            <p className="text-gray-700 mb-6">
              Junte-se a centenas de pessoas que já transformaram suas vidas através da psicoterapia. 
              Você também pode ser a próxima história de sucesso.
            </p>
            <button
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar minha primeira consulta.', '_blank')}
              className="bg-[#A2B06D] hover:bg-[#8a9654] text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Comece sua transformação hoje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}