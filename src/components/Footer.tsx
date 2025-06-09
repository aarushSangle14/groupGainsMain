
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">HH</span>
              </div>
              <span className="font-bold text-xl text-white">HomeHuddle</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your best deal home buying buddy in Mumbai & MMR. Join group negotiations 
              and save lakhs on verified properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/ongoing-deals" className="text-sm hover:text-white transition-colors">Ongoing Deals</Link></li>
              <li><Link to="/area-insights" className="text-sm hover:text-white transition-colors">Area Insights</Link></li>
              <li><Link to="/meetups" className="text-sm hover:text-white transition-colors">Meetups</Link></li>
              <li><Link to="/register" className="text-sm hover:text-white transition-colors">Register as Buyer</Link></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="font-semibold text-white mb-4">For Partners</h3>
            <ul className="space-y-2">
              <li><Link to="/builders" className="text-sm hover:text-white transition-colors">Builder Registration</Link></li>
              <li><Link to="/partnership" className="text-sm hover:text-white transition-colors">Partnership Program</Link></li>
              <li><Link to="/testimonials" className="text-sm hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 HomeHuddle. All rights reserved. Made with ❤️ for home buyers in Mumbai & MMR.
          </p>
        </div>
      </div>
    </footer>
  );
};
