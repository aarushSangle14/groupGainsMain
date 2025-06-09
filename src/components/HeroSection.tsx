
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Shield, TrendingUp, Calendar } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Buying a Home?{" "}
              <span className="text-primary">Don't Go Alone</span> – Let's Get You a Better Deal,{" "}
              <span className="text-green-600">Together!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join group negotiations with builders in Mumbai & MMR. Get verified projects, 
              pre-negotiated discounts, and transparent processes – all for free.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Verified Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Group Discounts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Transparent Process</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Free Meetups</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/register">Register as Buyer</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/ongoing-deals">See Ongoing Group Deals</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Active Group Deal</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    8 Buyers Joined
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground">2BHK in Kharghar</h3>
                  <p className="text-muted-foreground">Premium location, ready to move</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Market Rate</p>
                    <p className="text-lg font-semibold text-foreground line-through">₹85 L</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Group Rate</p>
                    <p className="text-lg font-semibold text-green-600">₹78 L</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    💰 You save ₹7 Lakhs by joining this group!
                  </p>
                </div>

                <Button className="w-full">Join This Deal Group</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
