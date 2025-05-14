
import { Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Sarah<span className="text-coach-blue">Coach</span></h3>
            <p className="text-gray-300 mb-4">
              Helping ambitious professionals achieve clarity, confidence, and career growth through expert coaching.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-coach-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-coach-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-coach-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-coach-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-300 hover:text-coach-blue transition-colors">About</a>
              <a href="#services" className="text-gray-300 hover:text-coach-blue transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-300 hover:text-coach-blue transition-colors">Testimonials</a>
              <a href="#" className="text-gray-300 hover:text-coach-blue transition-colors">Blog</a>
              <a href="#contact" className="text-gray-300 hover:text-coach-blue transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-coach-blue shrink-0 mt-1" />
                <span>hello@yourcoach.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-coach-blue shrink-0 mt-1" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} SarahCoach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
