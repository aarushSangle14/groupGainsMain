
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OngoingDeals from "./pages/OngoingDeals";
import BuyerRegister from "./pages/BuyerRegister";
import BuilderRegister from "./pages/BuilderRegister";
import AreaInsights from "./pages/AreaInsights";
import Meetups from "./pages/Meetups";
import Builders from "./pages/Builders";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ongoing-deals" element={<OngoingDeals />} />
          <Route path="/register" element={<BuyerRegister />} />
          <Route path="/builder-register" element={<BuilderRegister />} />
          <Route path="/area-insights" element={<AreaInsights />} />
          <Route path="/meetups" element={<Meetups />} />
          <Route path="/builders" element={<Builders />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
