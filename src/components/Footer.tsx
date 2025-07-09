
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Mail, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Begin Your Journey with MOAA
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the future of AI companionship. Join thousands who have already discovered their perfect digital partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Free
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg rounded-full"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                MOAA
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              The next generation of AI companions, designed to understand, support, and grow with you through every moment of your journey.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-purple-500/20">
                <Twitter className="w-5 h-5 text-purple-400" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-purple-500/20">
                <Github className="w-5 h-5 text-purple-400" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-purple-500/20">
                <Mail className="w-5 h-5 text-purple-400" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 MOAA. All rights reserved. Built with ❤️ for the future of human-AI relationships.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
