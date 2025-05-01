import React from 'react';
import { Laugh, Target, Skull, Award } from 'lucide-react';

const features = [
  {
    icon: <Laugh size={32} className="text-neon-pink" />,
    title: "Satirical Humor",
    description: "DiCK embraces dark humor and satire to critique history's most powerful leaders."
  },
  {
    icon: <Target size={32} className="text-neon-yellow" />,
    title: "Rebellious Spirit",
    description: "Join a community that celebrates resistance against authoritarian control."
  },
  {
    icon: <Skull size={32} className="text-neon-purple" />,
    title: "Edgy Memes",
    description: "Share and create politically charged memes that push boundaries."
  },
  {
    icon: <Award size={32} className="text-neon-blue" />,
    title: "Historical Context",
    description: "Learn about history's most notorious figures through satirical commentary."
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-dark-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            About <span className="text-neon-pink neon-text">DiCK</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            DickTator Coin stands as a hilarious, edgy meme-driven token that celebrates the resilience 
            and rebellious spirit of individuals throughout history. We use satire to critique while honoring those who resisted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark-gray rounded-lg p-6 transition-all duration-300 hover:neon-box"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black/50 rounded-lg p-8 border border-dull-gray">
          <h3 className="text-2xl font-heading mb-4 text-neon-yellow">
            The DiCK Manifesto
          </h3>
          <p className="text-lg mb-4 text-gray-300">
            In a world dominated by centralized powers and authority figures, DiCK stands proud
            as a symbol of resistance. Our satirical coin doesn't just mock the oppressors—it celebrates
            the resilience of those who survived their regimes.
          </p>
          <p className="text-lg mb-4 text-gray-300">
            Whether it was surviving the chaos of WWII or the harsh realities of life under authoritarian control,
            DiCK pays homage to the human spirit while using dark humor to process historical trauma.
          </p>
          <p className="text-lg text-neon-pink font-bold">
            Remember: DiCK might be hard to swallow, but it's always worth it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;