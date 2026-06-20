export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Sunil Kumar',
    role: 'Founder & CEO',
    image: './src/data/assets/id1.jpeg',
    phone: '+91 9953444307',
    email: 'aryan@aryanproperties.com',
    bio: 'With 22+ years of experience in Noida real estate, Sunil Kumar founded Aryan Properties with a vision to provide transparent and reliable property services.'
  },
  {
    id: 2,
    name: 'Arvind Kumar Shukla',
    role: 'Legal & Documentation Head',
    image: './src/data/assets/id_2.png',
    phone: '+91 9873194446',
    email: 'priya@aryanproperties.com',
    bio: 'Arvind ensures all property transactions are legally sound with complete documentation support.'
  },
  {
    id: 3,
    name: 'Manoj Kumar',
    role: 'Senior Property Consultant',
    image: './src/data/assets/id3.png',
    phone: '+91 9873824446',
    email: 'rajesh@aryanproperties.com',
    bio: 'Specializing in commercial and residential properties, Manoj has closed over 1000+ deals successfully.'
  },
  {
    id: 4,
    name: 'Monu Kumar',
    role: 'Senior Property Consultant',
    image: './src/data/assets/id4.png',
    phone: '+91 9899185715',
    email: 'neha@aryanproperties.com',
    bio: 'Trusted real estate expert with 400+ successful property transactions.'
  },
  {
    id: 5,
    name: 'Deepanshu',
    role: 'Senior Property Consultant',
    image: './src/data/assets/id5.png',
    phone: '+91 9953444611',
    email: 'vikram@aryanproperties.com',
    bio: 'Deeepanshu is an expert in commercial and residential real estate with 300+ successful deals.'
  },
  /*
  {
    id: 6,
    name: 'Anjali Verma',
    role: 'Client Relationship Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    phone: '+91 9810012350',
    email: 'anjali@aryanproperties.com',
    bio: 'Anjali ensures every client has a seamless and satisfying property journey with us.'
  }
    */
];

export const testimonials = [
  {
    id: 1,
    name: 'Rahul Mehta',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    text: 'Aryan Properties helped me find my dream 3BHK in Sector 150. Their knowledge of the local market and transparent dealing was impressive. Highly recommended!',
    rating: 5
  },
  {
    id: 2,
    name: 'Sneha Patel',
    role: 'Doctor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'I was looking for a rental property in Sector 104 and their team showed me multiple options within my budget. The documentation was handled smoothly.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Khanna',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    text: 'Bought commercial office space in Sector 135 through Aryan Properties. Their commercial leasing expertise saved me a lot of time and money. True professionals!',
    rating: 5
  },
  {
    id: 4,
    name: 'Kavita Singh',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    text: 'Sold my flat in Sector 93A at the best market price thanks to Aryan Properties team. They handled everything from listing to paperwork. Very trustworthy.',
    rating: 5
  }
];

export const services = [
  {
    id: 1,
    title: 'Buy Property',
    description: 'Find your dream home from our curated list of verified properties across prime Noida sectors.',
    icon: 'Home'
  },
  {
    id: 2,
    title: 'Sell Property',
    description: 'Get the best market price for your property with our extensive network of genuine buyers.',
    icon: 'DollarSign'
  },
  {
    id: 3,
    title: 'Rent Property',
    description: 'Find reliable tenants or the perfect rental home that fits your budget and preferences.',
    icon: 'Key'
  },
  {
    id: 4,
    title: 'Property Documentation',
    description: 'Complete legal assistance for registration, stamp duty, sale deed, and all paperwork.',
    icon: 'FileText'
  },
  {
    id: 5,
    title: 'Fresh Booking',
    description: 'Exclusive deals on new launches and under-construction projects from top builders.',
    icon: 'Building2'
  },
  {
    id: 6,
    title: 'Investment Consultation',
    description: 'Expert advice on real estate investments to maximize your ROI in Noida market.',
    icon: 'TrendingUp'
  },
  {
    id: 7,
    title: 'Property Valuation',
    description: 'Accurate market valuation of your property based on current trends and comparable deals.',
    icon: 'BarChart3'
  },
  {
    id: 8,
    title: 'Commercial Leasing',
    description: 'Specialized services for office spaces, retail shops, warehouses, and commercial plots.',
    icon: 'Briefcase'
  }
];
