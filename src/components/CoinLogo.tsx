import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';

interface CoinLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

const CoinLogo: React.FC<CoinLogoProps> = ({ 
  size = 120, 
  animated = true,
  className = "" 
}) => {
  const [rotation, setRotation] = useState(0);
  const [hover, setHover] = useState(false);
  
  useEffect(() => {
    if (animated && !hover) {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [animated, hover]);
  
  return (
    <div 
      className={`relative ${className} ${animated ? 'floating' : ''}`}
      style={{ 
        width: size, 
        height: size 
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          transform: `rotateY(${rotation}deg)`,
          transition: 'transform 0.1s linear'
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-neon-pink opacity-30 blur-lg animate-pulse-glow"></div>
          <div className="relative z-10 bg-gradient-to-br from-neon-pink via-neon-purple to-neon-blue rounded-full p-4 flex items-center justify-center">
            <Coins size={size * 0.6} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinLogo;