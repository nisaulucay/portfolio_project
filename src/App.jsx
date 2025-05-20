import React, { useEffect, useState } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ContactSection from "./components/sections/ContactSection";

import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from 'sonner';



function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Header isScrolled={isScrolled} />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <PortfolioSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </TooltipProvider>

        <Toaster richColors position="bottom-right" />
      </QueryClientProvider>
  );
}

export default App;











