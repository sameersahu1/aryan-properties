import { useState, useEffect } from 'react';
import { Menu, X, Phone, Building2 } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Properties', id: 'properties' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNav = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="font-serif text-2xl font-bold text-slate-900 leading-none">
                Aryan
              </h1>
              <p className="text-xs font-semibold text-primary-600 tracking-wider uppercase">
                Properties
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  currentPage === link.id
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919953444307"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 99534 44307
            </a>
            <a
              href="https://wa.me/919953444307?text=Hi%2C%20I%20am%20interested%20in%20properties%20in%20Noida."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-sm hover:from-primary-700 hover:to-primary-800 transition-all shadow-md hover:shadow-lg"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+919953444307"
              className="p-2 rounded-lg bg-primary-50 text-primary-700"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/919953444307?text=Hi%2C%20I%20am%20interested%20in%20properties%20in%20Noida."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-3 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-center shadow-md"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
