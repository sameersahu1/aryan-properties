import { MapPin, Bed, Ruler, IndianRupee, Eye, MessageCircle } from 'lucide-react';
import type { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onViewDetails?: (property: Property) => void;
}

export default function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  const whatsappText = encodeURIComponent(
    `Hi Aryan Properties, I am interested in *${property.title}* at *${property.sector}* (${property.bhk}, ${property.area}, ${property.price}). Please share more details.`
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/95 backdrop-blur rounded-full text-xs font-semibold text-primary-700 shadow-sm">
            {property.bhk}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-xs font-semibold shadow-sm capitalize">
            {property.category.replace('-', ' ')}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
          <div className="flex items-center gap-1 text-white text-sm">
            <MapPin className="w-4 h-4" />
            {property.sector}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-slate-900 mb-1 line-clamp-1 group-hover:text-primary-700 transition-colors">
          {property.title}
        </h3>
        {property.description && (
          <p className="text-sm text-slate-500 mb-3 line-clamp-2">{property.description}</p>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 mb-4">
          <div className="text-center">
            <Bed className="w-4 h-4 text-primary-600 mx-auto mb-1" />
            <p className="text-xs text-slate-600 font-medium">{property.bhk}</p>
          </div>
          <div className="text-center border-x border-slate-100">
            <Ruler className="w-4 h-4 text-primary-600 mx-auto mb-1" />
            <p className="text-xs text-slate-600 font-medium">{property.area}</p>
          </div>
          <div className="text-center">
            <IndianRupee className="w-4 h-4 text-primary-600 mx-auto mb-1" />
            <p className="text-xs text-slate-600 font-medium">{property.priceNumeric || property.price}</p>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-sm text-slate-500">Price:</span>
          <span className="text-xl font-bold text-primary-700">{property.price}</span>
        </div>

        {/* Buttons */}
        <div className="mt-auto space-y-2">
          <button
            onClick={() => onViewDetails?.(property)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-primary-600 text-primary-700 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <a
            href={`https://wa.me/919953444307?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-semibold text-sm transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
