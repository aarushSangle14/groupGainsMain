
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
            About GROUPGAINS: Building Value, Together. 🏡
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate young engineers who looked at the real estate landscape and saw a system 
            ripe for change. We saw the frustration of homebuyers navigating a maze of middlemen and the challenge 
            for builders to connect with genuine customers efficiently. The process was fragmented, costly, and 
            lacked transparency.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            We knew technology could bridge this gap. From this vision, GROUPGAINS was born.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission: Harnessing the Power of the Group</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At GROUPGAINS, our mission is to fundamentally reshape the property market by connecting 
              buyers and builders directly. We believe in the power of the group to create unprecedented value. 
              By bringing people together on a single, trusted platform, we engineer a situation where everyone gains.
            </p>
          </div>
        </div>

        {/* For Homebuyers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">How You Gain: For Homebuyers</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Join a smarter group of homebuyers who are tired of the old way. With GROUPGAINS, the advantage is yours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Collective Savings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By eliminating broker commissions and creating a direct channel, the savings are passed 
                  directly to you. Your budget goes further, and your dream home becomes more attainable.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Transparent Pricing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Knowledge is power. We provide a complete and transparent pricing history, so you can 
                  track market trends and make your purchase with absolute confidence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Direct Access, Zero Hassle</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect directly with the builders. Get clear, honest answers from the source without 
                  any filter, ensuring you have all the information you need to build your future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* For Builders Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">The Builder's Gain: A Partnership for Growth</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Your expertise is in building exceptional homes, not navigating inefficient sales funnels. 
            GROUPGAINS is your strategic partner for sustainable growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">A Group of Qualified Buyers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just provide leads; we provide a community. Get direct access to a large group 
                  of verified, high-intent buyers, delivered in bulk.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Significant Cost Reduction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dramatically lower your sales and marketing overhead. Our efficient model means you invest 
                  less in chasing leads and more in what you do best—building.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Direct Market Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Engage with your customers directly to gain invaluable insights into what they truly want. 
                  This direct feedback loop helps you build more desirable and successful projects.
                </p>
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

        {/* Future Vision */}
        <div className="bg-primary rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">The Future is Direct</h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            We believe the future of real estate isn't about adding more layers; it's about removing them. 
            It's about leveraging technology to create a marketplace that is fair, efficient, and built on trust. 
            We are more than just a property portal; we are the foundation for a new era in real estate.
          </p>
          <p className="text-xl font-semibold text-primary-foreground mt-6">
            Join us in building a better way home. 🤝
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
