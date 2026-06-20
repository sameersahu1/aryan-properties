import {
  Home, DollarSign, Key, FileText, Building2, TrendingUp, BarChart3, Briefcase,
  Phone, MessageCircle, CheckCircle2, ArrowRight
} from 'lucide-react';
import { services } from '../data/team';
import InquiryForm from '../components/InquiryForm';

const serviceDetailMap: Record<string, { icon: React.ReactNode; features: string[] }> = {
  Home: {
    icon: <Home className="w-10 h-10" />,
    features: [
      'Curated list of verified properties across Noida',
      'Personalized property shortlisting based on your needs',
      'Site visits arranged at your convenience',
      'Negotiation support to get the best price',
      'Assistance with home loan from top banks',
      'Complete handover support'
    ]
  },
  DollarSign: {
    icon: <DollarSign className="w-10 h-10" />,
    features: [
      'Free property valuation based on current market rates',
      'Professional photography and listing of your property',
      'Marketing across our network of 5000+ buyers',
      'Tenant/buyer verification for your peace of mind',
      'Legal documentation support',
      'Quick closure with best possible price'
    ]
  },
  Key: {
    icon: <Key className="w-10 h-10" />,
    features: [
      'Rental properties for all budgets - 1BHK to 4BHK',
      'Both furnished and unfurnished options',
      'Tenant verification and background checks',
      'Rent agreement preparation and registration',
      'PG and co-living options',
      'Commercial rental spaces available'
    ]
  },
  FileText: {
    icon: <FileText className="w-10 h-10" />,
    features: [
      'Sale deed and agreement preparation',
      'Stamp duty calculation and payment',
      'Property registration at sub-registrar office',
      'Title verification and due diligence',
      'Mutation of property in government records',
      'Home loan documentation assistance'
    ]
  },
  Building2: {
    icon: <Building2 className="w-10 h-10" />,
    features: [
      'Tie-ups with all top builders in Noida',
      'Early-bird and pre-launch discounts',
      'Assured best price guarantee',
      'Construction-linked payment plans',
      'Subvention schemes available',
      'Complete support from booking to possession'
    ]
  },
  TrendingUp: {
    icon: <TrendingUp className="w-10 h-10" />,
    features: [
      'High-ROI property recommendations',
      'Commercial vs residential investment analysis',
      'Upcoming growth corridors in Noida',
      'Rental yield optimization strategies',
      'Long-term wealth building through real estate',
      'Portfolio review and diversification'
    ]
  },
  BarChart3: {
    icon: <BarChart3 className="w-10 h-10" />,
    features: [
      'Accurate market valuation based on recent deals',
      'Circle rate guidance and ready-reckoner rates',
      'Comparable property analysis in your sector',
      'Future price appreciation forecast',
      'Fair rent determination for landlords',
      'Valuation reports for loan purposes'
    ]
  },
  Briefcase: {
    icon: <Briefcase className="w-10 h-10" />,
    features: [
      'Office spaces for all team sizes',
      'Retail shops and showrooms',
      'Warehouses and industrial spaces',
      'Co-working spaces memberships',
      'Pre-leased commercial properties',
      'Lease agreement and lock-in period negotiation'
    ]
  }
};

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Our Services"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Comprehensive real estate services in Noida — from buying and selling to documentation, investment advice, and commercial leasing.
          </p>
        </div>
      </section>

      {/* Services Grid with Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    {serviceDetailMap[service.icon]?.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {serviceDetailMap[service.icon]?.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/919953444307?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20service."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:gap-3 transition-all"
                    >
                      Enquire Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
                Get Started
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
                Need a Customized Solution?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Every client is unique, and so are their real estate needs. Whether you're a first-time homebuyer, an NRI investor, or a business looking for commercial space, our experts can tailor a solution just for you.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Free consultation with our senior experts',
                  'No obligation to proceed — honest advice first',
                  'Response within 30 minutes during business hours',
                  'Direct communication on WhatsApp or call'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919953444307"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition shadow-lg text-sm"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href="https://wa.me/919953444307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition shadow-lg text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Request a Call Back</h3>
              <p className="text-sm text-slate-500 mb-6">Tell us your requirement and we'll call you back.</p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
