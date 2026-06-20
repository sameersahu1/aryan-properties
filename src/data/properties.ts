export interface Property {
  id: number;
  title: string;
  sector: string;
  bhk: string;
  price: string;
  priceNumeric?: string;
  area: string;
  image: string;
  category: 'fresh-booking' | 'resale' | 'rental' | 'commercial' | 'plots';
  featured?: boolean;
  description?: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'Luxury 3BHK Apartment',
    sector: 'Sector 150, Noida',
    bhk: '3 BHK',
    price: '₹1.85 Cr',
    priceNumeric: '1.85 Cr',
    area: '1650 sq.ft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    category: 'fresh-booking',
    featured: true,
    description: 'Spacious 3BHK with modern amenities, park facing, ready to move.'
  },
  {
    id: 2,
    title: 'Premium 2BHK Flat',
    sector: 'Sector 93A, Noida',
    bhk: '2 BHK',
    price: '₹85 L',
    priceNumeric: '85 L',
    area: '1050 sq.ft',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    category: 'fresh-booking',
    featured: true,
    description: 'Newly constructed 2BHK with premium fittings, gated society.'
  },
  {
    id: 3,
    title: '4BHK Penthouse',
    sector: 'Sector 128, Noida',
    bhk: '4 BHK',
    price: '₹3.2 Cr',
    priceNumeric: '3.2 Cr',
    area: '2800 sq.ft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    category: 'resale',
    featured: true,
    description: 'Luxury penthouse with terrace, private lift, premium society.'
  },
  {
    id: 4,
    title: '2BHK Builder Floor',
    sector: 'Sector 93, Noida',
    bhk: '2 BHK',
    price: '₹22,000/month',
    priceNumeric: '22K/month',
    area: '950 sq.ft',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    category: 'rental',
    featured: true,
    description: 'Well-maintained builder floor, independent entrance, parking.'
  },
  {
    id: 5,
    title: 'Commercial Office Space',
    sector: 'Sector 135, Noida',
    bhk: 'Office',
    price: '₹75 L',
    priceNumeric: '75 L',
    area: '1200 sq.ft',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    category: 'commercial',
    featured: true,
    description: 'Premium office space in IT corridor, plug and play, parking.'
  },
  {
    id: 6,
    title: 'Residential Plot',
    sector: 'Sector 108, Noida',
    bhk: 'Plot',
    price: '₹2.1 Cr',
    priceNumeric: '2.1 Cr',
    area: '300 sq.yd',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    category: 'plots',
    featured: true,
    description: 'Corner plot, prime location, ready for construction, all papers clear.'
  },
  {
    id: 7,
    title: '3BHK + Servant Room',
    sector: 'Sector 104, Noida',
    bhk: '3 BHK',
    price: '₹1.45 Cr',
    priceNumeric: '1.45 Cr',
    area: '1450 sq.ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    category: 'fresh-booking',
    description: 'Spacious 3BHK with servant room, club amenities, near metro.'
  },
  {
    id: 8,
    title: '1BHK Studio Apartment',
    sector: 'Sector 82, Noida',
    bhk: '1 BHK',
    price: '₹32 L',
    priceNumeric: '32 L',
    area: '550 sq.ft',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    category: 'resale',
    description: 'Compact 1BHK, fully furnished, ideal for working professionals.'
  },
  {
    id: 9,
    title: '3BHK Rental Flat',
    sector: 'Sector 93A, Noida',
    bhk: '3 BHK',
    price: '₹35,000/month',
    priceNumeric: '35K/month',
    area: '1450 sq.ft',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80',
    category: 'rental',
    description: 'Semi-furnished 3BHK, society with pool, gym, and club.'
  },
  {
    id: 10,
    title: 'Retail Shop',
    sector: 'Sector 135, Noida',
    bhk: 'Shop',
    price: '₹60 L',
    priceNumeric: '60 L',
    area: '400 sq.ft',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    category: 'commercial',
    description: 'Ground floor shop, high footfall, main road facing.'
  },
  {
    id: 11,
    title: '2BHK Resale Flat',
    sector: 'Sector 82, Noida',
    bhk: '2 BHK',
    price: '₹55 L',
    priceNumeric: '55 L',
    area: '900 sq.ft',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
    category: 'resale',
    description: 'Ready to move 2BHK, well-ventilated, near market and school.'
  },
  {
    id: 12,
    title: '1BHK Rental',
    sector: 'Sector 104, Noida',
    bhk: '1 BHK',
    price: '₹15,000/month',
    priceNumeric: '15K/month',
    area: '500 sq.ft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    category: 'rental',
    description: 'Cozy 1BHK, independent, near metro station.'
  },
  {
    id: 13,
    title: 'Commercial Plot',
    sector: 'Sector 150, Noida',
    bhk: 'Plot',
    price: '₹4.5 Cr',
    priceNumeric: '4.5 Cr',
    area: '500 sq.yd',
    image: 'https://images.unsplash.com/photo-1570187505033-086a5b54627b?w=800&q=80',
    category: 'plots',
    description: 'Commercial plot on main road, suitable for mall/showroom.'
  },
  {
    id: 14,
    title: 'Warehouse Space',
    sector: 'Sector 82, Noida',
    bhk: 'Warehouse',
    price: '₹1.2 Cr',
    priceNumeric: '1.2 Cr',
    area: '5000 sq.ft',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    category: 'commercial',
    description: 'Large warehouse with loading dock, road access, 24/7 security.'
  },
  {
    id: 15,
    title: 'Luxury 4BHK Villa',
    sector: 'Sector 128, Noida',
    bhk: '4 BHK',
    price: '₹4.8 Cr',
    priceNumeric: '4.8 Cr',
    area: '3500 sq.ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    category: 'fresh-booking',
    description: 'Independent villa with garden, private pool, premium interiors.'
  },
  {
    id: 16,
    title: '2BHK Fresh Booking',
    sector: 'Sector 150, Noida',
    bhk: '2 BHK',
    price: '₹72 L',
    priceNumeric: '72 L',
    area: '1000 sq.ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    category: 'fresh-booking',
    description: 'New launch, high-rise apartment with panoramic views.'
  }
];

export const sectors = [
  { name: 'Sector 82', count: 45, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
  { name: 'Sector 93', count: 68, image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80' },
  { name: 'Sector 93A', count: 82, image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80' },
  { name: 'Sector 104', count: 54, image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80' },
  { name: 'Sector 108', count: 37, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80' },
  { name: 'Sector 128', count: 61, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80' },
  { name: 'Sector 135', count: 93, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  { name: 'Sector 150', count: 76, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' }
];
