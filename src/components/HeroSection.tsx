
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-coach-soft-blue to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Unlock Your Potential with <span className="text-coach-blue">Expert Coaching</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Helping ambitious professionals achieve clarity, confidence, and career growth
            </p>
            <div className="mt-10">
              <Button className="btn-primary text-lg px-8">Book a Free Discovery Call</Button>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-coach-blue rounded-full opacity-10 blur-3xl transform -translate-y-1/4"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Professional coaching" 
                className="relative rounded-lg shadow-xl w-full h-auto object-cover z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
