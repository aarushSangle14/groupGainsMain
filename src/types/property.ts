
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  type: 'apartment' | 'villa' | 'penthouse' | 'studio';
  images: string[];
  amenities: string[];
  rating: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SearchFilters {
  priceRange: [number, number];
  bedrooms: string;
  propertyType: string;
  location: string;
  amenities: string[];
}
