
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AreaInsights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Area Insights
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Data-driven insights for Mumbai & MMR properties
          </p>
          <p className="text-muted-foreground">
            This page is under development. Coming soon with detailed area analysis, 
            market trends, and builder reputation data.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AreaInsights;
