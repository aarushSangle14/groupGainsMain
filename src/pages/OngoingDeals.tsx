
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Clock, Filter } from "lucide-react";

const OngoingDeals = () => {
  const deals = [
    {
      id: 1,
      title: "2BHK in Bibwewadi",
      location: "Bibwewadi, Pune",
      buyers: 8,
      timeline: "2 weeks to finalize",
      marketRate: "₹85 L",
      groupRate: "₹78 L",
      savings: "₹7 L",
      status: "Active",
      builder: "Lodha Group",
      bhk: "2BHK"
    },
    {
      id: 2,
      title: "1BHK in Katraj",
      location: "Katraj, Pune",
      buyers: 12,
      timeline: "1 week to finalize",
      marketRate: "₹65 L",
      groupRate: "₹58 L",
      savings: "₹7 L",
      status: "Closing Soon",
      builder: "Runwal Group",
      bhk: "1BHK"
    },
    {
      id: 3,
      title: "3BHK in Kothrud",
      location: "Kothrud, Pune",
      buyers: 5,
      timeline: "3 weeks to finalize",
      marketRate: "₹1.2 Cr",
      groupRate: "₹1.1 Cr",
      savings: "₹10 L",
      status: "New",
      builder: "Godrej Properties",
      bhk: "3BHK"
    },
    {
      id: 4,
      title: "2BHK in Koregaon Park",
      location: "Koregaon Park, Pune",
      buyers: 15,
      timeline: "5 days to finalize",
      marketRate: "₹2.1 Cr",
      groupRate: "₹1.95 Cr",
      savings: "₹15 L",
      status: "Hot Deal",
      builder: "Oberoi Realty",
      bhk: "2BHK"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ongoing Group Deals
          </h1>
          <p className="text-xl text-muted-foreground">
            Join active negotiations and save lakhs on verified properties in Pune
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              All Areas
            </Button>
            <Button variant="outline" size="sm">1BHK</Button>
            <Button variant="outline" size="sm">2BHK</Button>
            <Button variant="outline" size="sm">3BHK</Button>
            <Button variant="outline" size="sm">Budget: ₹50L - ₹1Cr</Button>
            <Button variant="outline" size="sm">Closing Soon</Button>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{deal.title}</CardTitle>
                  <Badge 
                    variant={deal.status === "Closing Soon" || deal.status === "Hot Deal" ? "destructive" : "default"}
                    className={deal.status === "New" ? "bg-green-500" : ""}
                  >
                    {deal.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{deal.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Builder: {deal.builder}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm font-medium">{deal.buyers} buyers joined</span>
                  </div>
                  <Badge variant="outline">{deal.bhk}</Badge>
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
      </div>

      <Footer />
    </div>
  );
};

export default OngoingDeals;
