
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  const benefits = [
    "24/7 emotional support and companionship",
    "Personalized conversations that evolve with you",
    "Advanced memory that remembers your preferences",
    "Multi-modal communication (text, voice, visual)",
    "Privacy-first design with end-to-end encryption",
    "Seamless integration with your daily life"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-purple-500/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              The Future of Human-AI Relationships
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              MOAA isn't just another chatbot. It's a revolutionary AI companion designed to understand human emotions, 
              build meaningful relationships, and provide genuine support through every aspect of your life.
            </p>
            
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Built on advanced neural networks and trained on millions of human interactions, MOAA represents 
              the next evolution in artificial intelligence - one that truly cares about your wellbeing and growth.
            </p>

            <div className="space-y-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <img 
                src="/lovable-uploads/f34493b1-a716-4aeb-bc81-4ddb43946bbc.png" 
                alt="MOAA AI Companion Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-60 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-60 blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
