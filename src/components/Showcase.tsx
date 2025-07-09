
import { MessageCircle, Video, Music, Calendar, BookOpen, Camera } from "lucide-react";

const Showcase = () => {
  const capabilities = [
    {
      icon: MessageCircle,
      title: "Intelligent Conversations",
      description: "Engage in deep, meaningful discussions about any topic with MOAA's advanced conversational AI.",
      demo: "💬 'Tell me about your day' → Provides empathetic listening and thoughtful responses"
    },
    {
      icon: Video,
      title: "Video Interactions",
      description: "Experience face-to-face conversations with MOAA's lifelike avatar technology.",
      demo: "📹 Real-time emotional recognition and response through visual cues"
    },
    {
      icon: Music,
      title: "Creative Companion",
      description: "Collaborate on creative projects, from music composition to storytelling.",
      demo: "🎵 'Let's write a song together' → Co-creates personalized music and lyrics"
    },
    {
      icon: Calendar,
      title: "Life Management",
      description: "MOAA helps organize your schedule, set goals, and track your personal growth.",
      demo: "📅 Proactive scheduling and gentle reminders for your wellbeing"
    },
    {
      icon: BookOpen,
      title: "Learning Partner",
      description: "Accelerate your learning with personalized tutoring and knowledge sharing.",
      demo: "📚 Adapts teaching style to your learning preferences and pace"
    },
    {
      icon: Camera,
      title: "Memory Keeper",
      description: "Capture and cherish important moments with MOAA's advanced memory system.",
      demo: "📸 'Remember this moment' → Creates lasting digital memories with context"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Endless Possibilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how MOAA transforms every aspect of your digital life with intelligent, caring, and adaptive AI companionship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 mb-6 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <capability.icon className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {capability.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {capability.description}
                </p>

                <div className="p-4 rounded-xl bg-black/50 border border-gray-700">
                  <p className="text-sm text-gray-300 font-mono">
                    {capability.demo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/30">
            <span className="text-lg text-gray-300">Ready to meet your AI companion?</span>
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400 font-semibold">MOAA is online</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
