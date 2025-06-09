
import { Property } from "@/types/property";

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Luxury 3BHK Apartment in Bandra West",
    description: "Spacious 3BHK apartment with sea view, modern amenities, and prime location near shopping centers and restaurants.",
    price: 45000000,
    location: "Bandra West, Mumbai",
    area: 1200,
    bedrooms: 3,
    bathrooms: 3,
    type: "apartment",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
    ],
    amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Power Backup"],
    rating: 4.8,
    featured: true,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15"
  },
  {
    id: "2",
    title: "Modern 2BHK in Andheri East",
    description: "Contemporary 2BHK apartment with excellent connectivity to airport and business districts. Perfect for professionals.",
    price: 28000000,
    location: "Andheri East, Mumbai",
    area: 950,
    bedrooms: 2,
    bathrooms: 2,
    type: "apartment",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aab21900?w=800&h=600&fit=crop"
    ],
    amenities: ["Gym", "Parking", "Security", "Garden", "Club House"],
    rating: 4.5,
    featured: true,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-10"
  },
  {
    id: "3",
    title: "Elegant Villa in Juhu",
    description: "Stunning 4BHK villa with private garden, close to the beach. Perfect for families seeking luxury and comfort.",
    price: 85000000,
    location: "Juhu, Mumbai",
    area: 2500,
    bedrooms: 4,
    bathrooms: 4,
    type: "villa",
    images: [
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    ],
    amenities: ["Private Garden", "Swimming Pool", "Parking", "Security", "Terrace"],
    rating: 4.9,
    featured: true,
    createdAt: "2024-01-08",
    updatedAt: "2024-01-08"
  },
  {
    id: "4",
    title: "Cozy 1BHK Studio in Powai",
    description: "Compact yet comfortable 1BHK studio apartment perfect for young professionals. Great amenities and location.",
    price: 15000000,
    location: "Powai, Mumbai",
    area: 600,
    bedrooms: 1,
    bathrooms: 1,
    type: "studio",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&h=600&fit=crop"
    ],
    amenities: ["Gym", "Parking", "Security", "Wi-Fi", "Cafeteria"],
    rating: 4.3,
    featured: false,
    createdAt: "2024-01-05",
    updatedAt: "2024-01-05"
  },
  {
    id: "5",
    title: "Luxury Penthouse in Worli",
    description: "Spectacular penthouse with panoramic city views. Premium finishes and world-class amenities in Mumbai's business district.",
    price: 120000000,
    location: "Worli, Mumbai",
    area: 3000,
    bedrooms: 4,
    bathrooms: 5,
    type: "penthouse",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop"
    ],
    amenities: ["Private Terrace", "Swimming Pool", "Gym", "Concierge", "Valet Parking"],
    rating: 5.0,
    featured: true,
    createdAt: "2024-01-03",
    updatedAt: "2024-01-03"
  },
  {
    id: "6",
    title: "Spacious 3BHK in Malad West",
    description: "Well-designed 3BHK apartment in a family-friendly neighborhood with excellent schools and shopping nearby.",
    price: 32000000,
    location: "Malad West, Mumbai",
    area: 1100,
    bedrooms: 3,
    bathrooms: 2,
    type: "apartment",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop"
    ],
    amenities: ["Playground", "Parking", "Security", "Garden", "Community Hall"],
    rating: 4.4,
    featured: true,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01"
  }
];
