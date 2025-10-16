
import { Shield, Users, TrendingUp, Calendar } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Verified Projects",
      description: "Every project is thoroughly verified by our team. No fake listings, no misleading information."
    },
    {
      icon: TrendingUp,
      title: "Pre-negotiated Group Discounts",
      description: "Join other buyers and get bulk discounts that individual buyers can't access."
    },
    {
      icon: Users,
      title: "Transparent Process",
      description: "Complete visibility into negotiations, pricing, and deal progress. No hidden charges."
    },
    {
      icon: Calendar,
      title: "Free Buyer-Builder Meetups",
      description: "Direct interaction with builders. Ask questions, see samples, and make informed decisions."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose GroupGains?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're changing how homes are bought in Mumbai. Join thousands of smart buyers 
            who've saved lakhs through group negotiations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
