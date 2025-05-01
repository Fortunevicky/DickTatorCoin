import React, { useEffect, useState } from 'react';
import CoinLogo from '../components/CoinLogo';

const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ 
        background: `radial-gradient(circle at center, rgba(255, 0, 255, 0.8), rgba(153, 0, 255, 0.6) 40%, rgba(68, 68, 68, 0.4) 70%, rgba(17, 17, 17, 1) 100%)`,
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 opacity-10"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(70%) blur(2px)',
            transform: `translateY(${offset * 0.5}px)`
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center py-16">
        <CoinLogo size={180} className="mx-auto mb-8" />
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-6 neon-text">
          DickTator Coin
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-body">
          The <span className="text-neon-yellow font-bold">Revolutionary</span> Meme Coin
          That Celebrates History's Most <span className="text-neon-pink font-bold">Notorious</span> Leaders
        </p>
        
        <div className="text-sm md:text-base text-gray-300 mb-12 max-w-xl mx-auto">
          <p>Warning: Contains edgy humor and historical satire. HODL at your own risk.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#about" 
            className="btn-primary"
          >
            Learn About DiCK
          </a>
          <a 
            href="#join" 
            className="bg-transparent border-2 border-neon-pink hover:bg-neon-pink/20 text-white font-bold py-2 px-6 rounded-md transition-all duration-300 uppercase tracking-wider"
          >
            Join The Revolution
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;