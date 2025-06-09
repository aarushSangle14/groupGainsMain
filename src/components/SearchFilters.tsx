
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Home, MapPin } from "lucide-react";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: any;
  setFilters: (filters: any) => void;
}

export const SearchFilters = ({ searchQuery, setSearchQuery, filters, setFilters }: SearchFiltersProps) => {
  const handleSearch = () => {
    console.log("Searching with:", { searchQuery, filters });
    // TODO: Implement search functionality
  };

  return (
    <Card className="p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Enter location (e.g., Bandra, Andheri)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <select 
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          value={filters.propertyType}
          onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="penthouse">Penthouse</option>
          <option value="studio">Studio</option>
        </select>

        <select 
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          value={filters.bedrooms}
          onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
        >
          <option value="">Bedrooms</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4+ BHK</option>
        </select>

        <select 
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          value={filters.priceRange[1] === 50000000 ? "" : "custom"}
          onChange={(e) => {
            if (e.target.value === "low") setFilters({...filters, priceRange: [0, 20000000]});
            else if (e.target.value === "mid") setFilters({...filters, priceRange: [20000000, 50000000]});
            else if (e.target.value === "high") setFilters({...filters, priceRange: [50000000, 100000000]});
            else setFilters({...filters, priceRange: [0, 50000000]});
          }}
        >
          <option value="">Price Range</option>
          <option value="low">₹0 - ₹2Cr</option>
          <option value="mid">₹2Cr - ₹5Cr</option>
          <option value="high">₹5Cr+</option>
        </select>
      </div>
      
      <Button onClick={handleSearch} className="w-full md:w-auto">
        <Search className="mr-2 h-4 w-4" />
        Search Properties
      </Button>
    </Card>
  );
};
