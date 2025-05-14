
export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Working with Sarah changed the trajectory of my career. Her guidance helped me land a promotion I'd been working toward for years, and her strategies for building confidence have changed how I approach challenges.",
      author: "Jennifer K.",
      role: "Marketing Director"
    },
    {
      id: 2,
      quote: "Sarah's coaching provided exactly what I needed to transition from manager to executive. Her insights into leadership and communication helped me develop the skills necessary to lead my team through a major company transition.",
      author: "Michael T.",
      role: "Tech Executive"
    }
  ];
  
  return (
    <section id="testimonials" className="bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">
            Don't take my word for it — hear what my clients have to say about their coaching experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-coach-soft-blue p-8 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-5 -left-2 text-coach-blue text-6xl opacity-30">"</div>
              <p className="text-lg text-gray-700 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-coach-blue/20 flex items-center justify-center text-coach-blue font-bold">
                  {testimonial.author[0]}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
