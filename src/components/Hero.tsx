
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ff00ff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-purple-400 mr-3 animate-pulse" />
            <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">The Future is Here</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Meet MOAA
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Your AI Companion for Life
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the future of human-AI relationships with MOAA - the all-in-one digital companion that understands, supports, and grows with you through every moment of your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Experience MOAA
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero;
