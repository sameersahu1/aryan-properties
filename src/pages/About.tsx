import {
  Award, Users, Building2, TrendingUp, ShieldCheck, Target, Heart, CheckCircle2,
  Phone, MessageCircle
} from 'lucide-react';
import { team } from '../data/team';

export default function About() {
  const milestones = [
    { year: '2004', title: 'Company Founded', desc: 'Aryan Properties started with a mission to bring transparency to Noida real estate.' },
    { year: '2010', title: '500+ Deals Closed', desc: 'Reached the milestone of 500 satisfied clients across Noida.' },
    { year: '2015', title: 'Expanded to Commercial', desc: 'Added commercial leasing and investment consultation services.' },
    { year: '2020', title: '2000+ Happy Families', desc: 'Crossed 2000 successful transactions and became a top name in Noida.' },
    { year: '2026', title: '2500+ Deals & Growing', desc: 'Today, 22+ years later, we are the trusted choice for thousands.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="About Aryan Properties"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">About Aryan Properties</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Your trusted property dealer in Noida since 2004. We combine deep local market knowledge with unwavering integrity to help you make the right property decisions.
          </p>
        </div>
      </section>

      {/* Story & Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                22+ Years of Building Trust in Noida Real Estate
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Founded in 2004 by Mr. Sunil Kumar, Aryan Properties started with a simple vision: to bring transparency, professionalism, and trust to the Noida real estate market. What began as a small office in Sector 110 has grown into one of Noida's most respected real estate consultancies.
                </p>
                <p>
                  With a team of dedicated professionals, we specialize in both residential and commercial properties across Noida's prime sectors including 82, 93, 93A, 104, 108, 128, 135, and 150. As a trusted property consultant in Sector 110 Noida, we have helped thousands of families find their dream homes and investors make smart property decisions.
                </p>
                <p>
                  Whether you're looking for flats for sale in Sector 93A Noida, rental property in Sector 104 Noida, or a property dealer in Sector 150 Noida for luxury apartments, our team has the expertise to guide you every step of the way.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Aryan Properties Team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xl">22+ Years</p>
                    <p className="text-sm text-slate-500">of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Building2 className="w-7 h-7" />, value: '2500+', label: 'Deals Closed' },
              { icon: <Users className="w-7 h-7" />, value: '5000+', label: 'Happy Clients' },
              { icon: <Award className="w-7 h-7" />, value: '22+', label: 'Years Experience' },
              { icon: <TrendingUp className="w-7 h-7" />, value: '8+', label: 'Prime Sectors' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 font-serif mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our core values shape every interaction and every transaction we handle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Trust & Transparency',
                desc: 'No hidden charges, no false promises. We believe in complete transparency in every deal — from pricing to paperwork.'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Local Expertise',
                desc: 'Our team lives and breathes Noida. We know every sector, every project, and every market trend inside out.'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Client First',
                desc: "Your goals are our goals. We don't just close deals — we build lifelong relationships with our clients."
              }
            ].map((v, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center text-white mb-5">
                  {v.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Team
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our team of trusted property consultants brings years of experience and deep local knowledge to every client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex gap-2 pt-4 border-t border-slate-100">
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-semibold hover:bg-primary-100 transition"
                    >
                      <Phone className="w-4 h-4" /> Call
                    </a>
                    <a
                      href={`https://wa.me/919953444307?text=Hello%20${encodeURIComponent(member.name)}%2C%20I%20would%20like%20to%20inquire%20about%20properties.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#25D366] text-white rounded-lg text-sm font-semibold hover:bg-[#128C7E] transition"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
                Why Trust Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Noida's Most Reliable Property Consultants
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As a leading property dealer in Noida, we understand that buying or selling property is one of the biggest financial decisions of your life. That's why we ensure every client receives personalized attention, honest advice, and complete support.
              </p>
              <ul className="space-y-3">
                {[
                  'RERA-registered and legally compliant consultancy',
                  'All properties physically verified by our team',
                  'End-to-end documentation and legal support',
                  'Deep connections with top builders in Noida',
                  'Best price guarantee for buyers and sellers',
                  'Post-transaction support even after deal closure'
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Noida Properties"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Milestones Over the Years
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex items-start mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow -translate-x-1/2 mt-2 z-10" />
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-2">
                      {m.year}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{m.title}</h3>
                    <p className="text-sm text-slate-600">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Work With Noida's Trusted Property Experts
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether you're a first-time buyer, a seasoned investor, or looking to rent, our team is ready to help you make the right move.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+91953444307"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg text-sm"
            >
              <Phone className="w-4 h-4" /> Call: +91 99534 44307
            </a>
            <a
              href="https://wa.me/919953444307"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition shadow-lg text-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
