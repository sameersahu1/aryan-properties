import { Building2, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const goTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white leading-none">Aryan</h3>
                <p className="text-xs font-semibold text-primary-400 tracking-wider uppercase">Properties</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Your trusted property dealer in Noida with 22+ years of experience. We help you buy, sell, rent, and invest in properties across prime Noida sectors.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((name, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-slate-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors text-xs font-bold text-slate-400 hover:text-white"
                  title={name}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Properties', page: 'properties' },
                { label: 'Our Services', page: 'services' },
                { label: 'About Us', page: 'about' },
                { label: 'Contact Us', page: 'contact' }
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => goTo(link.page)}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Buy Property in Noida</li>
              <li>Sell Property in Noida</li>
              <li>Rental Property Services</li>
              <li>Fresh Booking in New Projects</li>
              <li>Property Documentation</li>
              <li>Commercial Leasing</li>
              <li>Investment Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Shop No. 16, 1st Floor VDS Market,<br />
                  Sector 110, Noida,<br />
                  Uttar Pradesh 201304
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <a href="tel:+919953444307" className="text-sm text-slate-400 hover:text-primary-400 block">
                    +91 99534 44307
                  </a>
                  <a href="tel:+919953444307" className="text-sm text-slate-400 hover:text-primary-400 block">
                    +91 98731 94446
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:aryanproperties110@gmail.com" className="text-sm text-slate-400 hover:text-primary-400">
                  aryanproperties110@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:sunilku.307@gmail.com" className="text-sm text-slate-400 hover:text-primary-400">
                  sunilku.307@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Mon - Sat: 10:00 AM - 7:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Aryan Properties. All rights reserved. | Trusted Property Dealer in Noida
          </p>
          <div className="flex gap-5 text-sm text-slate-500">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
