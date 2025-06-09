
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Star } from "lucide-react";
import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/90">
              {property.type}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="default" className="bg-primary text-primary-foreground">
              {formatPrice(property.price)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
          {property.title}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-muted-foreground">
            <Home className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bedrooms} BHK • {property.area} sq ft</span>
          </div>
          
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {property.description}
        </p>
      </CardContent>
    </Card>
  );
};
