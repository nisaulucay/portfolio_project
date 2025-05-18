import React, { useEffect, useState } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Header from "../../portfolio_project/src/components/layout/Header";
import Footer from "../../portfolio_project/src/components/layout/Footer";

import HeroSection from "../../portfolio_project/src/components/sections/HeroSection";
import AboutSection from "../../portfolio_project/src/components/sections/AboutSection";
import SkillsSection from "../../portfolio_project/src/components/sections/SkillsSection";
import PortfolioSection from "../../portfolio_project/src/components/sections/PortfolioSection";
import ContactSection from '../../portfolio_project/src/components/sections/ContactSection';

import { TooltipProvider } from "../../portfolio_project/src/components/ui/tooltip";

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











