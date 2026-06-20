import { useState } from 'react';
import {
  Phone, MessageCircle, Search, Award, ShieldCheck, Users, FileCheck, HandCoins,
  Home as HomeIcon, DollarSign, Key, FileText, Building2, TrendingUp, BarChart3, Briefcase,
  Star, ChevronRight, CheckCircle2, ArrowRight, MapPin
} from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import { properties, sectors } from '../data/properties';
import { services, testimonials } from '../data/team';
import type { Property } from '../data/properties';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Home: <HomeIcon className="w-7 h-7" />,
  DollarSign: <DollarSign className="w-7 h-7" />,
  Key: <Key className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
  Building2: <Building2 className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  BarChart3: <BarChart3 className="w-7 h-7" />,
  Briefcase: <Briefcase className="w-7 h-7" />
};

export default function Home({ setCurrentPage }: HomeProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Luxury Noida Properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full mb-6">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium">#1 Trusted Property Dealer in Noida since 2004</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Find Your Dream <span className="text-primary-400">Home</span> in Noida
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                Aryan Properties - Your trusted property consultant in Noida with 22+ years of experience. Buy, sell, or rent verified properties across prime sectors with complete documentation support.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-xl p-2 shadow-2xl mb-8 flex flex-col sm:flex-row gap-2 max-w-xl">
                <div className="flex-1 flex items-center gap-3 px-4 py-2.5">
                  <Search className="w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by sector, BHK, or property type..."
                    className="flex-1 outline-none text-slate-700 text-sm"
                  />
                </div>
                <button
                  onClick={() => setCurrentPage('properties')}
                  className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-sm hover:from-primary-700 hover:to-primary-800 transition shadow-lg flex items-center gap-2 justify-center"
                >
                  Search <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919953444307"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg"
                >
                  <Phone className="w-5 h-5 text-primary-600" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919953444307?text=Hi%2C%20I%20am%20interested%20in%20properties%20in%20Noida."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>

              {/* SEO Keywords */}
              <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="px-2 py-1 bg-white/5 rounded">Property Dealer in Noida</span>
                <span className="px-2 py-1 bg-white/5 rounded">Flats in Sector 93A</span>
                <span className="px-2 py-1 bg-white/5 rounded">Rentals in Sector 104</span>
                <span className="px-2 py-1 bg-white/5 rounded">Sector 150 Property</span>
              </div>
            </div>

            {/* Hero Form */}
            <div className="hidden lg:flex justify-end">
              <InquiryForm variant="hero" />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            {[
              { value: '22+', label: 'Years Experience' },
              { value: '2500+', label: 'Deals Closed' },
              { value: '5000+', label: 'Happy Clients' },
              { value: '8+', label: 'Prime Sectors' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white font-serif">{stat.value}</div>
                <div className="text-sm text-slate-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Hero Form */}
      <section className="lg:hidden bg-slate-50 py-8 px-4">
        <div className="max-w-md mx-auto">
          <InquiryForm variant="hero" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Noida's Most Trusted Property Consultants
            </h2>
            <p className="text-slate-600 leading-relaxed">
              With over a decade of experience in Noida real estate, we provide expert guidance, verified listings, and end-to-end support for all your property needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Award className="w-7 h-7" />, title: '22+ Years Experience', desc: 'Deep expertise in Noida real estate market since 2004' },
              { icon: <ShieldCheck className="w-7 h-7" />, title: 'Verified Properties', desc: 'Every listing is physically verified by our team' },
              { icon: <Users className="w-7 h-7" />, title: 'Local Market Expertise', desc: 'Specialists in Sectors 82, 93, 93A, 104, 108, 128, 135, 150' },
              { icon: <FileCheck className="w-7 h-7" />, title: 'End-to-End Documentation', desc: 'Complete legal support for hassle-free transactions' },
              { icon: <HandCoins className="w-7 h-7" />, title: 'Transparent Dealings', desc: 'No hidden charges, honest advice always' }
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-600 text-primary-600 group-hover:text-white rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Complete Real Estate Solutions
            </h2>
            <p className="text-slate-600 leading-relaxed">
              From buying and selling to documentation and investment advice, we handle every aspect of your real estate journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentPage('services')}
              >
                <div className="w-14 h-14 bg-primary-50 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-primary-700 text-primary-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-4 transition-all">
                  {serviceIconMap[service.icon]}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
                Featured Properties
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                Handpicked Properties for You
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('properties')}
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary-600 text-primary-700 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors self-start sm:self-auto"
            >
              View All Properties <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={setSelectedProperty}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Areas We Serve
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Prime Noida Sectors We Cover
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We specialize in properties across Noida's most sought-after sectors. From affordable housing to luxury apartments and commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {sectors.map((sector) => (
              <button
                key={sector.name}
                onClick={() => setCurrentPage('properties')}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
                    <MapPin className="w-3 h-3" /> Noida
                  </div>
                  <h3 className="text-white font-bold text-lg">{sector.name}</h3>
                  <p className="text-slate-300 text-xs mt-1">{sector.count}+ properties available</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Client Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Don't just take our word for it. Here's what our happy clients have to say about their experience with Aryan Properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-5">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-5">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Fill out the form and our property experts will get in touch with you within 30 minutes. Or call/WhatsApp us directly for immediate assistance.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Free property consultation' },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Verified listings only' },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Zero brokerage for buyers' },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: 'Complete legal assistance' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <span className="text-green-400">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="tel:+919953444307"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg text-sm"
                >
                  <Phone className="w-4 h-4" /> +91 99534 44307
                </a>
                <a
                  href="https://wa.me/919953444307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition shadow-lg text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Send an Inquiry</h3>
              <p className="text-sm text-slate-500 mb-6">We'll reach out to you shortly.</p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Property Modal */}
      <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </div>
  );
}
