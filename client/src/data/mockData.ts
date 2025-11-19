// -----------------------------
// INTERFACES
// -----------------------------
export interface Office {
  id: string;
  name: string;
  slug: string;
  city: string;
  province: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  description: string;
}

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
  officeId: string;
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
  status: "For Sale" | "Pending" | "Sold";
  agentId: string;
  officeId: string;
  listingDate: string;
  featured?: boolean;
}

// -----------------------------
// OFFICES
// -----------------------------
export const mockOffices: Office[] = [
  {
    id: "1",
    name: "Premier Realty Toronto",
    slug: "toronto",
    city: "Toronto",
    province: "ON",
    address: "123 Bay Street, Toronto, ON M5J 2R8",
    phone: "(416) 555-1000",
    email: "toronto@premierrealty.com",
    image:
      "https://images.unsplash.com/photo-1559869824-929df9dab35e?crop=entropy&fit=max&w=1080",
    description:
      "Serving the Greater Toronto Area with expert real estate services for over 20 years. Our team specializes in luxury condos, downtown properties, and investment opportunities.",
  },
  {
    id: "2",
    name: "Premier Realty London",
    slug: "london-ontario",
    city: "London",
    province: "ON",
    address: "456 Richmond Street, London, ON N6A 3E6",
    phone: "(519) 555-2000",
    email: "london@premierrealty.com",
    image:
      "https://images.unsplash.com/photo-1611516807340-b53639b6e19a?crop=entropy&fit=max&w=1080",
    description:
      "Your trusted real estate partner in London and surrounding areas. We specialize in family homes, commercial properties, and first-time buyer services.",
  },
  {
    id: "3",
    name: "Premier Realty Mississauga",
    slug: "mississauga",
    city: "Mississauga",
    province: "ON",
    address: "789 Hurontario Street, Mississauga, ON L5B 1N2",
    phone: "(905) 555-3000",
    email: "mississauga@premierrealty.com",
    image:
      "https://images.unsplash.com/photo-1595282009135-5ea437efe076?crop=entropy&fit=max&w=1080",
    description:
      "Premier real estate services in Mississauga and the West GTA. Expert guidance for residential and commercial transactions.",
  },
];

// -----------------------------
// AGENTS
// -----------------------------
export const mockAgents: Agent[] = [
  // TORONTO
  {
    id: "1",
    name: "Sarah Mitchell",
    email: "sarah.mitchell@premierrealty.com",
    phone: "(416) 555-1234",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&fit=max&w=400",
    title: "Senior Real Estate Agent",
    bio: "With 15+ years in luxury real estate, I help clients find premium homes in Toronto.",
    specialties: ["Luxury Condos", "Downtown Toronto", "Investment Properties"],
    yearsExperience: 15,
    totalSales: 127,
    extension: "sarah-mitchell",
    officeId: "1",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@premierrealty.com",
    phone: "(416) 555-2345",
    photo:
      "https://images.unsplash.com/photo-1504595403659-9088ce801e29?crop=entropy&fit=max&w=400",
    title: "Real Estate Agent",
    bio: "Helping first-time homebuyers with clarity and care. Toronto condo specialist.",
    specialties: ["First-Time Buyers", "Condos", "Urban Properties"],
    yearsExperience: 8,
    totalSales: 94,
    extension: "michael-chen",
    officeId: "1",
  },
  {
    id: "3",
    name: "Jennifer Rodriguez",
    email: "jennifer.rodriguez@premierrealty.com",
    phone: "(416) 555-3456",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&fit=max&w=400",
    title: "Commercial Real Estate Specialist",
    bio: "Commercial & multi-family investment specialist serving the GTA.",
    specialties: ["Commercial", "Investment Properties", "Multi-Family"],
    yearsExperience: 12,
    totalSales: 156,
    extension: "jennifer-rodriguez",
    officeId: "1",
  },

  // LONDON
  {
    id: "4",
    name: "David Thompson",
    email: "david.thompson@premierrealty.com",
    phone: "(519) 555-4567",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&fit=max&w=400",
    title: "Senior Real Estate Agent",
    bio: "London-born agent with deep local knowledge. Specializes in growing families.",
    specialties: ["Residential", "Family Homes", "Relocation"],
    yearsExperience: 18,
    totalSales: 203,
    extension: "david-thompson",
    officeId: "2",
  },
  {
    id: "5",
    name: "Emily Watson",
    email: "emily.watson@premierrealty.com",
    phone: "(519) 555-5678",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&fit=max&w=400",
    title: "Real Estate Agent",
    bio: "Dedicated to helping first-time buyers and suburban families in London.",
    specialties: ["First-Time Buyers", "Residential", "Suburbs"],
    yearsExperience: 6,
    totalSales: 78,
    extension: "emily-watson",
    officeId: "2",
  },

  // MISSISSAUGA
  {
    id: "6",
    name: "Robert Singh",
    email: "robert.singh@premierrealty.com",
    phone: "(905) 555-6789",
    photo:
      "https://images.unsplash.com/photo-1597861157927-4c1f2b0d6ad1?crop=entropy&fit=max&w=400",
    title: "Real Estate Broker",
    bio: "Leading the Mississauga office with a focus on luxury properties & commercial deals.",
    specialties: ["Luxury Homes", "Commercial", "New Developments"],
    yearsExperience: 14,
    totalSales: 189,
    extension: "robert-singh",
    officeId: "3",
  },
  {
    id: "7",
    name: "Lisa Park",
    email: "lisa.park@premierrealty.com",
    phone: "(905) 555-7890",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&fit=max&w=400",
    title: "Real Estate Agent",
    bio: "Helping clients navigate Mississauga's fast-paced market with confidence.",
    specialties: ["Condos", "Townhomes", "Investment Properties"],
    yearsExperience: 9,
    totalSales: 112,
    extension: "lisa-park",
    officeId: "3",
  },
];

// -----------------------------
// PROPERTIES
// -----------------------------
export const mockProperties: Property[] = [
  // TORONTO
  {
    id: "1",
    title: "Luxury Downtown Condo",
    price: 1895000,
    address: "123 Yonge Street, Unit 4501",
    city: "Toronto",
    state: "ON",
    zipCode: "M5B 1M4",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1650,
    images: [
      "https://images.unsplash.com/photo-1631240408177-5fa8281abae7?crop=entropy&fit=max&w=1080",
      "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&fit=max&w=1080",
    ],
    description:
      "Stunning luxury condo in the heart of downtown Toronto with world-class amenities.",
    status: "For Sale",
    agentId: "1",
    officeId: "1",
    listingDate: "2025-11-01",
    featured: true,
  },

  {
    id: "2",
    title: "Modern Loft in King West",
    price: 1250000,
    address: "456 King Street West, Unit 302",
    city: "Toronto",
    state: "ON",
    zipCode: "M5V 1K4",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 950,
    images: [
      "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&fit=max&w=1080",
      "https://images.unsplash.com/photo-1631240408177-5fa8281abae7?crop=entropy&fit=max&w=1080",
    ],
    description:
      "Trendy industrial loft with exposed brick, high ceilings, and amazing location.",
    status: "For Sale",
    agentId: "2",
    officeId: "1",
    listingDate: "2025-10-28",
    featured: true,
  },

  {
    id: "3",
    title: "Investment Property - Multi-Unit",
    price: 3200000,
    address: "789 Queen Street East",
    city: "Toronto",
    state: "ON",
    zipCode: "M4M 1J1",
    bedrooms: 12,
    bathrooms: 8,
    sqft: 7800,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&fit=max&w=1080",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&fit=max&w=1080",
    ],
    description:
      "Prime investment property with 6 fully leased units in Leslieville.",
    status: "For Sale",
    agentId: "3",
    officeId: "1",
    listingDate: "2025-10-15",
  },

  // LONDON
  {
    id: "4",
    title: "Beautiful Family Home",
    price: 825000,
    address: "321 Oxford Street West",
    city: "London",
    state: "ON",
    zipCode: "N6H 1T4",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    images: [
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&fit=max&w=1080",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&fit=max&w=1080",
    ],
    description:
      "Spacious family home in a quiet London neighborhood with premium upgrades.",
    status: "For Sale",
    agentId: "4",
    officeId: "2",
    listingDate: "2025-11-05",
    featured: true,
  },

  {
    id: "5",
    title: "Cozy Starter Home",
    price: 485000,
    address: "555 Dundas Street",
    city: "London",
    state: "ON",
    zipCode: "N5W 3A3",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    images: [
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&fit=max&w=1080",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&fit=max&w=1080",
    ],
    description:
      "Perfect first home with modern finishes and open-concept living.",
    status: "For Sale",
    agentId: "5",
    officeId: "2",
    listingDate: "2025-11-10",
  },

  {
    id: "6",
    title: "Charming Bungalow",
    price: 615000,
    address: "888 Commissioners Road",
    city: "London",
    state: "ON",
    zipCode: "N6K 1C7",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&fit=max&w=1080",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&fit=max&w=1080",
    ],
    description:
      "Well-maintained bungalow with hardwood floors and updated bathrooms.",
    status: "Pending",
    agentId: "4",
    officeId: "2",
    listingDate: "2025-10-20",
  },

  // MISSISSAUGA
  {
    id: "7",
    title: "Luxury Estate Home",
    price: 2450000,
    address: "100 Lakeshore Road West",
    city: "Mississauga",
    state: "ON",
    zipCode: "L5H 1G6",
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4200,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&fit=max&w=1080",
      "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&fit=max&w=1080",
    ],
    description:
      "Stunning waterfront estate with panoramic lake views and luxury finishes.",
    status: "For Sale",
    agentId: "6",
    officeId: "3",
    listingDate: "2025-10-25",
    featured: true,
  },

  {
    id: "8",
    title: "Modern Townhouse",
    price: 895000,
    address: "234 Burnhamthorpe Road",
    city: "Mississauga",
    state: "ON",
    zipCode: "L5B 3C2",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1850,
    images: [
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&fit=max&w=1080",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&fit=max&w=1080",
    ],
    description:
      "Contemporary townhouse near Square One with rooftop terrace and garage.",
    status: "For Sale",
    agentId: "7",
    officeId: "3",
    listingDate: "2025-11-08",
  },

  {
    id: "9",
    title: "Investment Condo",
    price: 625000,
    address: "567 Square One Drive, Unit 1205",
    city: "Mississauga",
    state: "ON",
    zipCode: "L5B 0G4",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    images: [
      "https://images.unsplash.com/photo-1631240408177-5fa8281abae7?crop=entropy&fit=max&w=1080",
      "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&fit=max&w=1080",
    ],
    description:
      "Strong cash-flow investment condo in prime Mississauga location.",
    status: "For Sale",
    agentId: "7",
    officeId: "3",
    listingDate: "2025-11-12",
  },
];
