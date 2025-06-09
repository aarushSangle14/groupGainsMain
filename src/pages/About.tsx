
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Buyer-First Approach",
      description: "Every decision we make is in the best interest of home buyers. No compromises."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete visibility into negotiations, pricing, and deal progress. No hidden agendas."
    },
    {
      icon: Users,
      title: "Community Power",
      description: "Strength in numbers. Together, buyers have more negotiating power than going alone."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "We constantly evolve our platform to deliver better deals and experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About HomeHuddle
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to ensure no home buyer overpays or feels alone during 
            the biggest purchase of their life.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To democratize home buying in Mumbai and MMR by creating a transparent, 
              community-driven platform where buyers can leverage collective bargaining 
              power to secure the best possible deals on verified properties.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-2xl font-semibold text-primary mb-2">₹847 Crores</p>
              <p className="text-muted-foreground">Total savings generated for our community</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HomeHuddle was born from a simple observation: home buyers in Mumbai 
                were getting raw deals, not because properties were overpriced, but 
                because they lacked negotiating power.
              </p>
              <p>
                Our founders, having experienced the frustration of solo home buying, 
                realized that builders were more than willing to offer discounts for 
                bulk sales – but individual buyers rarely had access to these deals.
              </p>
              <p>
                We decided to change this by creating a platform where like-minded 
                buyers could come together, share information, and negotiate as a group. 
                The results exceeded our expectations.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">2022</h3>
                <p className="text-muted-foreground">Founded with first group deal in Kharghar</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">2023</h3>
                <p className="text-muted-foreground">Expanded to cover entire Mumbai & MMR</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">2024</h3>
                <p className="text-muted-foreground">5000+ successful deals, ₹800+ Cr savings</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-primary rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-primary-foreground mb-2">5,000+</p>
              <p className="text-primary-foreground/90">Happy Families</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-foreground mb-2">₹14L</p>
              <p className="text-primary-foreground/90">Average Savings per Deal</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-foreground mb-2">50+</p>
              <p className="text-primary-foreground/90">Builder Partners</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
