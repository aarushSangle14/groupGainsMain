
import { useState } from "react";
import { SearchFilters } from "@/components/SearchFilters";
import { PropertyCard } from "@/components/PropertyCard";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProperties } from "@/components/FeaturedProperties";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: [0, 50000000],
    bedrooms: "",
    propertyType: "",
    location: ""
  });

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        setFilters={setFilters}
      />
      <FeaturedProperties />
    </div>
  );
};

export default Index;
