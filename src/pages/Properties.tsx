import { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import { properties, sectors } from '../data/properties';
import type { Property } from '../data/properties';

const categories = [
  { id: 'all', label: 'All Properties' },
  { id: 'fresh-booking', label: 'Fresh Booking' },
  { id: 'resale', label: 'Resale Properties' },
  { id: 'rental', label: 'Rental Properties' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'plots', label: 'Plots & Land' }
];

export default function Properties() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = properties.filter((p) => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchSector = !selectedSector || p.sector.toLowerCase().includes(selectedSector.toLowerCase());
    const matchSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.bhk.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSector && matchSearch;
  });

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-16 sm:py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Properties in Noida"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Properties in Noida
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Browse our extensive listings of verified properties across prime Noida sectors. Flats, villas, plots, commercial spaces and more.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-primary-400" />
            Specializing in Sectors 82, 93, 93A, 104, 108, 128, 135, 150
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Search & Sector */}
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by sector, BHK, title..."
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-500" />
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm bg-white text-slate-700 min-w-[180px]"
              >
                <option value="">All Sectors</option>
                {sectors.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-slate-600">
              Showing <span className="font-bold text-slate-900">{filteredProperties.length}</span> properties
            </p>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No properties found</h3>
              <p className="text-slate-600">Try adjusting your filters or search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onViewDetails={setSelectedProperty}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            We have many more off-market properties. Let our experts help you find the perfect match based on your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919953444307"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg text-sm"
            >
              Call: +91 99534 44307
            </a>
            <a
              href="https://wa.me/919953444307"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition shadow-lg text-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </div>
  );
}
