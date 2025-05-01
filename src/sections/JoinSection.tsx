import React from 'react';
import { Instagram as Telegram, Twitter, Disc as Discord, Youtube } from 'lucide-react';
import CoinLogo from '../components/CoinLogo';

const JoinSection: React.FC = () => {
  const socialLinks = [
    { name: "Twitter", icon: <Twitter size={24} />, url: "#", color: "bg-[#1DA1F2]" },
    { name: "Telegram", icon: <Telegram size={24} />, url: "#", color: "bg-[#0088cc]" },
    { name: "Discord", icon: <Discord size={24} />, url: "#", color: "bg-[#5865F2]" },
    { name: "YouTube", icon: <Youtube size={24} />, url: "#", color: "bg-[#FF0000]" }
  ];

  return (
    <section id="join" className="py-20 relative">
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: `radial-gradient(circle at center, rgba(255, 0, 255, 0.8), rgba(153, 0, 255, 0.6) 40%, rgba(68, 68, 68, 0.4) 70%, rgba(17, 17, 17, 1) 100%)`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            Join The <span className="text-neon-yellow neon-text">Revolution</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Become part of the DiCK community and help us grow the most satirical token in crypto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-dark-gray/80 backdrop-blur-md rounded-lg p-6 border border-dull-gray">
            <h3 className="text-2xl font-heading mb-6 text-neon-pink">
              Subscribe to Updates
            </h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-dull-gray rounded-md px-4 py-2 text-white focus:outline-none focus:border-neon-pink"
                  placeholder="Comrade Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-black/50 border border-dull-gray rounded-md px-4 py-2 text-white focus:outline-none focus:border-neon-pink"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="pt-2">
                <button 
                  type="button"
                  className="w-full btn-primary py-3"
                >
                  Join The Movement
                </button>
              </div>
              
              <p className="text-xs text-gray-400 italic">
                By subscribing, you agree to receive propaganda and occasional revolution updates. Your data is protected by our secret police.
              </p>
            </form>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-dark-gray/80 backdrop-blur-md rounded-lg p-6 border border-dull-gray mb-8">
              <div className="flex items-center mb-6">
                <CoinLogo size={60} animated={false} className="mr-4" />
                <h3 className="text-2xl font-heading text-neon-yellow">
                  Follow DiCK
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className={`${link.color} hover:opacity-90 transition-opacity duration-300 rounded-md py-3 px-4 flex items-center justify-center text-white`}
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-dark-gray/80 backdrop-blur-md rounded-lg p-6 border border-dull-gray flex-1">
              <h3 className="text-2xl font-heading mb-4 text-neon-pink">
                Community Rules
              </h3>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">•</span>
                  <span>Keep it satirical, but respectful</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">•</span>
                  <span>No glorifying actual atrocities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">•</span>
                  <span>Memes should punch up, not down</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">•</span>
                  <span>Share DiCK responsibly</span>
                </li>
              </ul>
              
              <p className="text-neon-pink font-bold mt-4 italic">
                "United in satire, divided we fall."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;