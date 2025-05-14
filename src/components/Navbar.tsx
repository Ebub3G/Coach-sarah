
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-900">
              Sarah<span className="text-coach-blue">Coach</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-base font-medium text-gray-500 hover:text-coach-blue transition-colors">
              About
            </a>
            <a href="#services" className="text-base font-medium text-gray-500 hover:text-coach-blue transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-base font-medium text-gray-500 hover:text-coach-blue transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-base font-medium text-gray-500 hover:text-coach-blue transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex">
            <Button className="btn-primary">Book a Call</Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#about" className="block text-base font-medium text-gray-500 hover:text-coach-blue transition-colors">
              About
            </a>
            <a href="#services" className="block text-base font-medium text-gray-500 hover:text-coach-blue transition-colors">
              Services
            </a>
            <a href="#testimonials" className="block text-base font-medium text-gray-500 hover:text-coach-blue transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="block text-base font-medium text-gray-500 hover:text-coach-blue transition-colors">
              Contact
            </a>
            <Button className="btn-primary w-full">Book a Call</Button>
          </div>
        )}
      </div>
    </header>
  );
}
