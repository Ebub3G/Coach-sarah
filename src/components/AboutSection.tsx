
import { Book, Target, Briefcase } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-coach-light-blue rounded-full opacity-50 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd" 
                alt="Sarah - Professional Coach" 
                className="relative rounded-lg shadow-xl w-full h-auto max-w-md mx-auto z-10"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="section-title">About Sarah</h2>
            <p className="section-subtitle">
              A personal growth strategist with 10+ years of experience helping professionals unlock their full potential.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-coach-light-blue rounded-full p-2 shrink-0">
                  <Briefcase className="h-5 w-5 text-coach-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Leadership Development</h3>
                  <p className="text-gray-600">
                    Guiding professionals to develop strong leadership skills and advance their careers with confidence.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 bg-coach-light-blue rounded-full p-2 shrink-0">
                  <Book className="h-5 w-5 text-coach-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Mindset Transformation</h3>
                  <p className="text-gray-600">
                    Helping clients overcome limiting beliefs and develop a growth mindset for personal and professional success.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 bg-coach-light-blue rounded-full p-2 shrink-0">
                  <Target className="h-5 w-5 text-coach-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Strategic Goal Setting</h3>
                  <p className="text-gray-600">
                    Creating actionable plans and accountability systems to achieve meaningful personal and career goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
