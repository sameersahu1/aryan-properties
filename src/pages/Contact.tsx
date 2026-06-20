import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Get in touch with Noida's most trusted property consultants. We're here to help you find the perfect property or answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-slate-50 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Phone className="w-7 h-7" />,
                title: 'Call Us',
                lines: ['+91 99534 44307', '+91 98731 94446'],
                action: 'tel:+919953444307',
                actionLabel: 'Call Now',
                color: 'from-primary-600 to-primary-800'
              },
              {
                icon: <MessageCircle className="w-7 h-7" />,
                title: 'WhatsApp',
                lines: ['Instant response on WhatsApp', 'Available 7 days a week'],
                action: 'https://wa.me/919953444307',
                actionLabel: 'Chat Now',
                color: 'from-[#25D366] to-[#128C7E]'
              },
              {
                icon: <Mail className="w-7 h-7" />,
                title: 'Email Us',
                lines: ['aryanproperties110@gmail.com', 'sunilku.307@gmail.com'],
                action: 'mailto:aryanproperties110@gmail.com',
                actionLabel: 'Send Email',
                color: 'from-amber-500 to-orange-600'
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: 'Office Hours',
                lines: ['Mon-Sun: 10:00 AM - 7:00 PM'],
                action: '#map',
                actionLabel: 'Get Directions',
                color: 'from-purple-600 to-indigo-700'
              }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-slate-100">
                <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-md`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-sm text-slate-600">{line}</p>
                ))}
                <a
                  href={card.action}
                  target={card.action.startsWith('http') ? '_blank' : undefined}
                  rel={card.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary-700 hover:gap-2 transition-all"
                >
                  {card.actionLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Address + Map */}
      <section className="py-16 bg-white" id="map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
                Send an Inquiry
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Let's Discuss Your Requirements
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get in touch with you within 12 hours. Alternatively, call or WhatsApp us for immediate assistance.
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
                <InquiryForm />
              </div>
            </div>

            {/* Address & Map */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Visit Our Office</h3>
                    <p className="text-primary-100 leading-relaxed">
                      Shop No. 16, 1st Floor,<br />
                      VDS Market Sector 110,<br />
                      Noida, Uttar Pradesh 201304
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/20">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="w-4 h-4 text-primary-200" />
                      <p className="text-xs text-primary-200 font-semibold uppercase tracking-wider">Phone</p>
                    </div>
                    <a href="tel:+91" className="text-white font-semibold hover:text-primary-200 transition-colors text-sm">
                      +91 99534 44307
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4 text-primary-200" />
                      <p className="text-xs text-primary-200 font-semibold uppercase tracking-wider">Email</p>
                    </div>
                    <a href="mailto:aryanproperties110@gmail.com" className="text-white font-semibold hover:text-primary-200 transition-colors text-sm break-all">
                      aryanproperties110@gmail.com
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+919953444307"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-primary-700 rounded-xl font-semibold hover:bg-slate-100 transition text-sm"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a
                    href="https://wa.me/919953444307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition text-sm"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30257.158474673553!2d77.38165897559544!3d28.554995939276992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8a5916ac17b%3A0xe420904c9f9dc104!2sAryan%20Properties!5e0!3m2!1sen!2sus!4v1781942137783!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aryan Properties Office Location"
                />
              </div>

              {/* Quick WhatsApp */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Quick WhatsApp Chat</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Get instant answers to your queries. Our team is online and ready to help.
                    </p>
                    <a
                      href="https://wa.me/919953444307?text=Hi%20Aryan%20Properties%2C%20I%20would%20like%20to%20know%20more%20about%20properties%20in%20Noida."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition text-sm shadow"
                    >
                      <Send className="w-4 h-4" /> Start Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors we cover */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">
              Sectors We Serve in Noida
            </h2>
            <p className="text-slate-600">As a trusted property dealer in Noida, we have deep presence in these prime sectors:</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Sector 82', 'Sector 93', 'Sector 93A', 'Sector 104', 'Sector 108', 'Sector 128', 'Sector 135', 'Sector 150'].map((sector) => (
              <div key={sector} className="bg-white rounded-xl p-5 text-center border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all">
                <MapPin className="w-5 h-5 text-primary-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-900 text-sm">{sector}</p>
                <p className="text-xs text-slate-500 mt-1">Noida</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
