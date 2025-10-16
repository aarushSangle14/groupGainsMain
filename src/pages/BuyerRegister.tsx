
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const BuyerRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    locations: [],
    budget: "",
    bhk: "",
    timeline: "",
    requirements: ""
  });

  const locations = [
    "Kharghar", "Mira Road", "Thane", "Bandra", "Andheri", "Powai", 
    "Navi Mumbai", "Goregaon", "Malad", "Kandivali", "Borivali"
  ];

  const bhkOptions = ["1BHK", "2BHK", "3BHK", "4BHK+"];
  const budgetRanges = [
    "₹30-50 Lakhs", "₹50-75 Lakhs", "₹75 Lakhs - ₹1 Cr", 
    "₹1-1.5 Cr", "₹1.5-2 Cr", "₹2 Cr+"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Register as a Buyer
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us what you're looking for – we'll bring the builders to you!
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Let's Find Your Perfect Home Deal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Preferences */}
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Preferred Locations in Mumbai/MMR *
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox id={location} />
                      <Label htmlFor={location} className="text-sm">
                        {location}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Budget Range *
                  </Label>
                  <div className="space-y-2">
                    {budgetRanges.map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox 
                          name="budget" 
                          id={range}
                          checked={formData.budget === range}
                          onCheckedChange={() => setFormData({...formData, budget: range})}
                        />
                        <Label htmlFor={range} className="text-sm">
                          {range}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Configuration *
                  </Label>
                  <div className="space-y-2">
                    {bhkOptions.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox 
                          name="bhk"
                          id={option}
                          checked={formData.bhk === option}
                          onCheckedChange={() => setFormData({...formData, bhk: option})}
                        />
                        <Label htmlFor={option} className="text-sm">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="timeline">Timeline to Buy *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                  {["Within 1 month", "1-3 months", "3-6 months", "6+ months"].map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <Checkbox 
                        name="timeline"
                        id={time}
                        checked={formData.timeline === time}
                        onCheckedChange={() => setFormData({...formData, timeline: time})}
                      />
                      <Label htmlFor={time} className="text-sm">
                        {time}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="requirements">Additional Requirements (Optional)</Label>
                <Textarea
                  id="requirements"
                  placeholder="Tell us about any specific requirements like amenities, floor preferences, parking, etc."
                  value={formData.requirements}
                  onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  className="mt-2"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to receive updates about relevant property deals, group negotiations, and meetups via WhatsApp, SMS, and email. I understand that GroupGains is a free service with no hidden charges.
                </Label>
              </div>

              <Button className="w-full" size="lg">
                Register & Start Getting Better Deals
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  🔒 Your information is secure and will only be used to find you the best property deals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyerRegister;
