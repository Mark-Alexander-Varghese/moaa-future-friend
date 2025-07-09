
import { Brain, Heart, Zap, Shield, Users, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced neural networks that learn and adapt to your unique personality, preferences, and needs for truly personalized interactions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "MOAA understands human emotions, provides empathetic responses, and offers genuine emotional support when you need it most.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Real-Time Adaptation",
      description: "Instantly adapts to your mood, context, and situation to provide the most relevant and helpful assistance.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your conversations and data are protected with military-grade encryption and complete privacy control.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Social Integration",
      description: "Seamlessly connects with your social life, helping you maintain relationships and discover new connections.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Continuous Evolution",
      description: "MOAA grows with you, developing deeper understanding and more sophisticated responses over time.",
      color: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            MOAA combines cutting-edge AI technology with human-like understanding to create the most advanced companion experience ever built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                   style={{backgroundImage: `linear-gradient(135deg, ${feature.color.replace('from-', '').replace('to-', ', ')})`}}></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                  style={{backgroundImage: `linear-gradient(135deg, ${feature.color.replace('from-', '').replace('to-', ', ')})`}}>
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
