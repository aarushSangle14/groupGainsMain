
import { Button } from "@/components/ui/button";
import { SearchFilters } from "@/components/SearchFilters";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: any;
  setFilters: (filters: any) => void;
}

export const HeroSection = ({ searchQuery, setSearchQuery, filters, setFilters }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Find Your Dream Home in Mumbai
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect residential property in Mumbai's most sought-after neighborhoods. 
            Your new home is just a search away.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <SearchFilters 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </div>
    </section>
  );
};
