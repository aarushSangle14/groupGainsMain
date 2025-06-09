
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Clock } from "lucide-react";

export const FeaturedDeals = () => {
  const deals = [
    {
      id: 1,
      title: "2BHK in Kharghar",
      location: "Kharghar, Navi Mumbai",
      buyers: 8,
      timeline: "2 weeks to finalize",
      marketRate: "₹85 L",
      groupRate: "₹78 L",
      savings: "₹7 L",
      status: "Active"
    },
    {
      id: 2,
      title: "1BHK in Mira Road",
      location: "Mira Road, Mumbai",
      buyers: 12,
      timeline: "1 week to finalize",
      marketRate: "₹65 L",
      groupRate: "₹58 L",
      savings: "₹7 L",
      status: "Closing Soon"
    },
    {
      id: 3,
      title: "3BHK in Thane",
      location: "Thane West, Mumbai",
      buyers: 5,
      timeline: "3 weeks to finalize",
      marketRate: "₹1.2 Cr",
      groupRate: "₹1.1 Cr",
      savings: "₹10 L",
      status: "New"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ongoing Group Deals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join these active negotiations and save lakhs on your dream home. 
            The more buyers, the better the deal!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <Card key={deal.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{deal.title}</CardTitle>
                  <Badge 
                    variant={deal.status === "Closing Soon" ? "destructive" : "default"}
                    className={deal.status === "New" ? "bg-green-500" : ""}
                  >
                    {deal.status}
                  </Badge>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{deal.location}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm font-medium">{deal.buyers} buyers interested</span>
                  </div>
                </div>

                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{deal.timeline}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
                  <div>
                    <p className="text-sm text-muted-foreground">Market Rate</p>
                    <p className="font-semibold line-through text-muted-foreground">{deal.marketRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Group Rate</p>
                    <p className="font-semibold text-green-600">{deal.groupRate}</p>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    💰 Save {deal.savings} by joining!
                  </p>
                </div>

                <Button className="w-full">Join This Deal Group</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Ongoing Deals
          </Button>
        </div>
      </div>
    </section>
  );
};
