
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get the Best Deal on Your Dream Home?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of smart buyers in Mumbai & MMR who've saved lakhs through group negotiations. 
            Register now and start your journey to homeownership.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/register">Register as Buyer - It's Free!</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/ongoing-deals">Browse Active Deals</Link>
            </Button>
          </div>

          <p className="text-primary-foreground/80 text-sm mt-6">
            No hidden charges. No spam. Just great deals on verified properties.
          </p>
        </div>
      </div>
    </section>
  );
};
