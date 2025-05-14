
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "1:1 Coaching Sessions",
      description: "Personalized coaching tailored to your unique challenges and goals, with actionable strategies for growth.",
      icon: "👤"
    },
    {
      id: 2,
      title: "Career Strategy Planning",
      description: "Develop a clear roadmap for your career advancement, with strategic guidance and practical next steps.",
      icon: "📈"
    },
    {
      id: 3,
      title: "Mindset & Confidence Building",
      description: "Transform limiting beliefs and develop unshakeable confidence to tackle challenges and pursue opportunities.",
      icon: "🧠"
    },
    {
      id: 4,
      title: "Goal Accountability Programs",
      description: "Stay on track with your goals through regular check-ins and a supportive accountability framework.",
      icon: "🎯"
    }
  ];
  
  return (
    <section id="services" className="bg-coach-soft-blue">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">My Coaching Services</h2>
          <p className="section-subtitle">
            Comprehensive coaching solutions designed to help you overcome challenges and achieve your most ambitious goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.id} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="btn-primary">View Coaching Packages</Button>
        </div>
      </div>
    </section>
  );
}
