import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const navBg = isHomePage && !isScrolled ? 'bg-transparent' : 'bg-white shadow-md';
  const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-gray-900';
  const linkColor = isHomePage && !isScrolled ? 'text-white hover:text-blue-200' : 'text-gray-600 hover:text-blue-500';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className={`${isHomePage && !isScrolled ? 'text-white' : 'text-blue-500'}`} />
            <span className={`text-xl font-bold uppercase ${textColor}`}>
            Shishu Care Clinic
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className={`${linkColor} transition`}>
              About
            </Link>
            <Link to="/services" className={`${linkColor} transition`}>
              Services
            </Link>
            <Link to="/#contact" className={`${linkColor} transition`}>
              Contact
            </Link>
            <Link
              to="/appointment"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${textColor}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textColor}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 absolute left-4 right-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-500 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#services"
                className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-500 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/#contact"
                className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-500 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/appointment"
                className="mx-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}