import React from 'react';
import { Coins } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 border-t border-dull-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Coins className="text-neon-pink h-8 w-8 mr-2" />
            <span className="font-heading text-xl text-white neon-text">
              DiCK<span className="text-neon-yellow">Tator</span> Coin
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#hero" className="text-gray-400 hover:text-neon-pink transition duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-neon-pink transition duration-300">
              About
            </a>
            <a href="#leaders" className="text-gray-400 hover:text-neon-pink transition duration-300">
              Leaders
            </a>
            <a href="#tokenomics" className="text-gray-400 hover:text-neon-pink transition duration-300">
              Tokenomics
            </a>
            <a href="#join" className="text-gray-400 hover:text-neon-pink transition duration-300">
              Join
            </a>
          </div>
        </div>
        
        <div className="border-t border-dull-gray pt-6 text-center text-gray-500 text-sm">
          <p className="mb-2">
            DiCK is a satirical project. Not financial advice. Not a real cryptocurrency.
          </p>
          <p>
            © {currentYear} DickTator Coin. All Rights Reserved (or Else).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;