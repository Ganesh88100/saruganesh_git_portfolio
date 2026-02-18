import Header from "@/components/Portfolio/Header";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Skills from "@/components/Portfolio/Skills";
import Services from "@/components/Portfolio/Services";
import PortfolioSection from "@/components/Portfolio/Portfolio";
import AIAgentProject from "@/components/Portfolio/AIAgentProject";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <PortfolioSection />
      <AIAgentProject />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
