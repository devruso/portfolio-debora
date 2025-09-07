import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId:any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-800" style={{fontFamily: 'Playfair Display'}}>
              Débora Patrícia Melo
            </h1>
            <span className="text-sm text-gray-600">CRP-03/8851</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {['início', 'sobre', 'formação', 'psicoterapia', 'abordagem', 'online', 'depoimentos', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-[#A2B06D] transition-colors duration-200 font-medium capitalize"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleWhatsAppClick}
            className="hidden lg:flex items-center gap-2 bg-[#A2B06D] hover:bg-[#8a9654] text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg font-medium"
          >
            <Calendar className="w-4 h-4" />
            Agende sua sessão
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {['início', 'sobre', 'formação', 'psicoterapia', 'abordagem', 'online', 'depoimentos', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-gray-700 hover:text-olive transition-colors duration-200 font-medium capitalize px-4 py-2"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={handleWhatsAppClick}
                className="mx-4 flex items-center justify-center gap-2 bg-olive hover:bg-olive text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-md font-medium"
              >
                <Calendar className="w-4 h-4" />
                Agende sua sessão
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}