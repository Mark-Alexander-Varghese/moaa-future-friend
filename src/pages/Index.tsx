
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Features />
      <About />
      <Showcase />
      <Footer />
    </div>
  );
};

export default Index;
