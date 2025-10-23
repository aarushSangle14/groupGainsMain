import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BuilderRegister = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Builder Details
    builderName: "",
    companyName: "",
    email: "",
    phone: "",
    
    // Property Details
    projectName: "",
    location: "",
    description: "",
    totalUnits: "",
    availableUnits: "",
    
    // Configuration
    configurations: [] as string[],
    
    // Pricing (in Lakhs)
    priceFrom: "",
    priceTo: "",
    
    // Area (in sq ft)
    areaFrom: "",
    areaTo: "",
    
    // Dates
    possessionDate: "",
    launchDate: "",
    
    // Amenities & Features
    amenities: "",
    
    // Additional Info
    reraNumber: "",
    bankApprovals: "",
    additionalInfo: "",
  });

  const configurations = ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK", "Villa", "Penthouse", "Studio"];
  const locationOptions = [
    "Bibwewadi", "Katraj", "Kothrud", "Hadapsar", "Wakad", "Hinjewadi",
    "Koregaon Park", "Viman Nagar", "Baner", "Aundh", "Pimpri Chinchwad"
  ];

  const handleConfigurationChange = (config: string) => {
    setFormData(prev => ({
      ...prev,
      configurations: prev.configurations.includes(config)
        ? prev.configurations.filter(c => c !== config)
        : [...prev.configurations, config]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.builderName || !formData.email || !formData.phone || !formData.projectName || 
        !formData.location || formData.configurations.length === 0 || !formData.possessionDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    console.log("Builder Registration Data:", formData);
    
    toast({
      title: "Registration Submitted!",
      description: "Thank you for registering. Our team will contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Builder Registration
            </h1>
            <p className="text-lg text-muted-foreground">
              Join GROUPGAINS and connect directly with verified home buyers in Pune
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Builder Information */}
            <Card>
              <CardHeader>
                <CardTitle>Builder Information</CardTitle>
                <CardDescription>Tell us about yourself and your company</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="builderName">Contact Person Name *</Label>
                    <Input
                      id="builderName"
                      value={formData.builderName}
                      onChange={(e) => setFormData({ ...formData, builderName: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="builder@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Provide information about your property project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectName">Project Name *</Label>
                    <Input
                      id="projectName"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      placeholder="e.g., Paradise Heights"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <select
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select location</option>
                      {locationOptions.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your project, its unique features, and benefits..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="totalUnits">Total Units</Label>
                    <Input
                      id="totalUnits"
                      type="number"
                      value={formData.totalUnits}
                      onChange={(e) => setFormData({ ...formData, totalUnits: e.target.value })}
                      placeholder="Total number of units"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="availableUnits">Available Units</Label>
                    <Input
                      id="availableUnits"
                      type="number"
                      value={formData.availableUnits}
                      onChange={(e) => setFormData({ ...formData, availableUnits: e.target.value })}
                      placeholder="Currently available units"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configuration & Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Configuration & Pricing</CardTitle>
                <CardDescription>Specify available configurations and price range</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Available Configurations *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                    {configurations.map((config) => (
                      <label key={config} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.configurations.includes(config)}
                          onChange={() => handleConfigurationChange(config)}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <span className="text-sm">{config}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="priceFrom">Price From (₹ Lakhs)</Label>
                    <Input
                      id="priceFrom"
                      type="number"
                      value={formData.priceFrom}
                      onChange={(e) => setFormData({ ...formData, priceFrom: e.target.value })}
                      placeholder="e.g., 45"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="priceTo">Price To (₹ Lakhs)</Label>
                    <Input
                      id="priceTo"
                      type="number"
                      value={formData.priceTo}
                      onChange={(e) => setFormData({ ...formData, priceTo: e.target.value })}
                      placeholder="e.g., 120"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="areaFrom">Area From (sq ft)</Label>
                    <Input
                      id="areaFrom"
                      type="number"
                      value={formData.areaFrom}
                      onChange={(e) => setFormData({ ...formData, areaFrom: e.target.value })}
                      placeholder="e.g., 600"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="areaTo">Area To (sq ft)</Label>
                    <Input
                      id="areaTo"
                      type="number"
                      value={formData.areaTo}
                      onChange={(e) => setFormData({ ...formData, areaTo: e.target.value })}
                      placeholder="e.g., 2500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline & Legal */}
            <Card>
              <CardHeader>
                <CardTitle>Timeline & Legal Information</CardTitle>
                <CardDescription>Important dates and legal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="possessionDate">Expected Possession Date *</Label>
                    <Input
                      id="possessionDate"
                      type="date"
                      value={formData.possessionDate}
                      onChange={(e) => setFormData({ ...formData, possessionDate: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="launchDate">Launch Date</Label>
                    <Input
                      id="launchDate"
                      type="date"
                      value={formData.launchDate}
                      onChange={(e) => setFormData({ ...formData, launchDate: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reraNumber">RERA Registration Number</Label>
                    <Input
                      id="reraNumber"
                      value={formData.reraNumber}
                      onChange={(e) => setFormData({ ...formData, reraNumber: e.target.value })}
                      placeholder="Enter RERA number"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="bankApprovals">Bank Approvals</Label>
                    <Input
                      id="bankApprovals"
                      value={formData.bankApprovals}
                      onChange={(e) => setFormData({ ...formData, bankApprovals: e.target.value })}
                      placeholder="e.g., SBI, HDFC, ICICI"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities & Features</CardTitle>
                <CardDescription>List all amenities available in your project</CardDescription>
              </CardHeader>
              <CardContent>
                <Label htmlFor="amenities">Amenities</Label>
                <Textarea
                  id="amenities"
                  value={formData.amenities}
                  onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                  placeholder="e.g., Swimming Pool, Gym, Garden, Club House, Security, Parking, Power Backup..."
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>Any other details you'd like to share</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  placeholder="Share any additional information about your project, special offers, or requirements..."
                  rows={4}
                />
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button type="submit" size="lg" className="px-12">
                Submit Registration
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuilderRegister;
