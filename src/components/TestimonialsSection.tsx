
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bought 2BHK in Kharghar",
      savings: "₹7 lakhs",
      quote: "I saved ₹7 lakhs thanks to this platform! The group negotiation was transparent and the builder was genuine. Highly recommend GroupGains.",
      image: "/placeholder.svg"
    },
    {
      name: "Rajesh Patel",
      location: "Bought 3BHK in Thane",
      savings: "₹12 lakhs",
      quote: "As a first-time buyer, I was worried about getting cheated. GroupGains' team guided me throughout and I got an amazing deal with other buyers.",
      image: "/placeholder.svg"
    },
    {
      name: "Anjali Gupta",
      location: "Bought 1BHK in Mira Road",
      savings: "₹5 lakhs",
      quote: "The meetups with builders were very helpful. I could ask all my questions directly and felt confident about my purchase decision.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people, real savings. See how GroupGains helped buyers across Pune 
            get better deals on their dream homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Saved {testimonial.savings}
                  </span>
                </div>

                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
