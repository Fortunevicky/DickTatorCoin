import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import LeadersSection from './sections/LeadersSection';
import TokenomicsSection from './sections/TokenomicsSection';
import FAQSection from './sections/FAQSection';
import JoinSection from './sections/JoinSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "DickTator Coin (DiCK) - The Revolutionary Meme Coin";
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LeadersSection />
      <TokenomicsSection />
      <FAQSection />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App;