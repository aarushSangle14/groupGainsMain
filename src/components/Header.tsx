
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/groupgains-logo.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="GroupGains" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/ongoing-deals" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Ongoing Deals
            </Link>
            <Link to="/area-insights" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Area Insights
            </Link>
            <Link to="/meetups" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Meetups
            </Link>
            <Link to="/builders" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              For Builders
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register as Buyer</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/ongoing-deals"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                Ongoing Deals
              </Link>
              <Link
                to="/area-insights"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                Area Insights
              </Link>
              <Link
                to="/meetups"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                Meetups
              </Link>
              <Link
                to="/builders"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                For Builders
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                About Us
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/register">Register as Buyer</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
