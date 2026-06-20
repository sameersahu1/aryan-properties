import { X, MapPin, Bed, Ruler, IndianRupee, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import type { Property } from '../data/properties';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  if (!property) return null;

  const whatsappText = encodeURIComponent(
    `Hi Aryan Properties, I am interested in *${property.title}* at *${property.sector}* (${property.bhk}, ${property.area}, ${property.price}). Please share more details.`
  );

  const highlights = [
    'Gated community with 24/7 security',
    'Power backup for common areas',
    'Covered car parking',
    'Club house with gym & pool',
    'Park facing / Green view',
    'Vastu compliant',
    'Near metro station',
    'Schools & hospitals nearby'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-72 sm:h-96 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <X className="w-5 h-5 text-slate-700" />
          </button>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-3 py-1.5 bg-white/95 backdrop-blur rounded-full text-sm font-semibold text-primary-700 shadow-sm">
              {property.bhk}
            </span>
            <span className="px-3 py-1.5 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-sm capitalize">
              {property.category.replace('-', ' ')}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            {property.sector}, Noida
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            {property.title}
          </h2>

          <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl mb-6">
            <div className="text-center">
              <Bed className="w-6 h-6 text-primary-600 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-0.5">Configuration</p>
              <p className="font-bold text-slate-900">{property.bhk}</p>
            </div>
            <div className="text-center border-x border-slate-200">
              <Ruler className="w-6 h-6 text-primary-600 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-0.5">Carpet Area</p>
              <p className="font-bold text-slate-900">{property.area}</p>
            </div>
            <div className="text-center">
              <IndianRupee className="w-6 h-6 text-primary-600 mx-auto mb-1" />
              <p className="text-xs text-slate-500 mb-0.5">Price</p>
              <p className="font-bold text-primary-700">{property.price}</p>
            </div>
          </div>

          {property.description && (
            <div className="mb-6">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Description</h3>
              <p className="text-slate-600 leading-relaxed">{property.description}</p>
            </div>
          )}

          <div className="mb-6">
            <h3 className="font-bold text-slate-900 text-lg mb-3">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:+919953444307`}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call: +91 99534 44307
            </a>
            <a
              href={`https://wa.me/919953444307?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-semibold transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
