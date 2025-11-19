export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  title: string;
  bio: string;
  specialties: string[];
  yearsExperience: number;
  totalSales: number;
  extension: string;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  description: string;
  status: 'For Sale' | 'Pending' | 'Sold';
  agentId: string;
  listingDate: string;
}

export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@premierrealty.com',
    phone: '(555) 123-4567',
    photo: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    title: 'Senior Real Estate Agent',
    bio: 'With over 15 years of experience in luxury real estate, I specialize in helping clients find their dream homes in the metro area. My commitment to excellence and personalized service has earned me numerous awards and a loyal client base.',
    specialties: ['Luxury Homes', 'Residential', 'Investment Properties'],
    yearsExperience: 15,
    totalSales: 127,
    extension: 'sarah-mitchell'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@premierrealty.com',
    phone: '(555) 234-5678',
    photo: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    title: 'Real Estate Agent',
    bio: 'Passionate about connecting first-time homebuyers with the perfect property. I pride myself on clear communication and making the home buying process smooth and stress-free.',
    specialties: ['First-Time Buyers', 'Condos', 'Urban Properties'],
    yearsExperience: 8,
    totalSales: 94,
    extension: 'michael-chen'
  },
  {
    id: '3',
    name: 'Jennifer Rodriguez',
    email: 'jennifer.rodriguez@premierrealty.com',
    phone: '(555) 345-6789',
    photo: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    title: 'Commercial Real Estate Specialist',
    bio: 'Specializing in commercial properties and investment opportunities. With a background in finance, I bring analytical expertise to every transaction.',
    specialties: ['Commercial', 'Investment Properties', 'Multi-Family'],
    yearsExperience: 12,
    totalSales: 156,
    extension: 'jennifer-rodriguez'
  }
];

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Estate',
    price: 2850000,
    address: '123 Oakwood Drive',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90210',
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4500,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
    ],
    description: 'Stunning modern estate with panoramic views, gourmet kitchen, and resort-style backyard. Features include smart home technology, wine cellar, and home theater.',
    status: 'For Sale',
    agentId: '1',
    listingDate: '2025-10-15'
  },
  {
    id: '2',
    title: 'Downtown Luxury Condo',
    price: 895000,
    address: '456 Metropolitan Ave, Unit 2401',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90012',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1850,
    images: [
      'https://images.unsplash.com/photo-1631240408177-5fa8281abae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
    ],
    description: 'Sophisticated high-rise condo in the heart of downtown. Floor-to-ceiling windows, premium finishes, and world-class amenities including pool, gym, and concierge.',
    status: 'For Sale',
    agentId: '2',
    listingDate: '2025-11-01'
  },
  {
    id: '3',
    title: 'Charming Family Home',
    price: 1250000,
    address: '789 Maple Street',
    city: 'Pasadena',
    state: 'CA',
    zipCode: '91101',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    images: [
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
    ],
    description: 'Beautiful traditional home in sought-after neighborhood. Updated kitchen, spacious backyard, excellent schools nearby. Perfect for growing families.',
    status: 'Pending',
    agentId: '1',
    listingDate: '2025-09-20'
  },
  {
    id: '4',
    title: 'Investment Opportunity - Multi-Unit',
    price: 3200000,
    address: '321 Commerce Boulevard',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90015',
    bedrooms: 12,
    bathrooms: 8,
    sqft: 7800,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
    ],
    description: 'Prime investment property with 6 fully-leased units. Excellent cash flow, recent renovations, and strong tenant history. Great location near public transit.',
    status: 'For Sale',
    agentId: '3',
    listingDate: '2025-10-28'
  },
  {
    id: '5',
    title: 'Cozy Starter Home',
    price: 675000,
    address: '555 Elm Avenue',
    city: 'Glendale',
    state: 'CA',
    zipCode: '91201',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    images: [
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'https://images.unsplash.com/photo-1631240408177-5fa8281abae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
    ],
    description: 'Perfect first home with updated amenities. Open floor plan, modern kitchen, and low-maintenance yard. Close to shops and restaurants.',
    status: 'For Sale',
    agentId: '2',
    listingDate: '2025-11-10'
  },
  {
    id: '6',
    title: 'Penthouse Suite with Views',
    price: 4500000,
    address: '888 Skyline Tower, Unit PH1',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90017',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3800,
    images: [
      'https://images.unsplash.com/photo-1631240408177-5fa8281abae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'
    ],
    description: 'Ultra-luxury penthouse with 360-degree city views. Private elevator, chef\'s kitchen, spa-like bathrooms, and expansive terrace. The epitome of sophisticated living.',
    status: 'For Sale',
    agentId: '1',
    listingDate: '2025-11-05'
  }
];
