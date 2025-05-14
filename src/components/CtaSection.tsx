
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="bg-coach-blue text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-10 text-white/90">
            Take the first step toward unlocking your full potential. Schedule a free consultation and let's discuss how coaching can help you achieve your goals.
          </p>
          <Button className="bg-white text-coach-blue hover:bg-opacity-90 font-medium py-3 px-8 text-lg rounded-md shadow-lg hover:shadow-xl transition-all">
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
