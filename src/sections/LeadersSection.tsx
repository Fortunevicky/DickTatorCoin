import React, { useState } from 'react';

interface Leader {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  years: string;
  quote: string;
}

const leaders: Leader[] = [
  {
    id: 1,
    name: "Stalin",
    title: "The Man of Steel",
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg",
    description: "Known for his signature mustache and five-year plans that never quite worked out. His diet plan helped millions lose weight involuntarily.",
    years: "1922-1953",
    quote: "One death is a tragedy; a million is a statistic."
  },
  {
    id: 2,
    name: "Hitler",
    title: "Failed Artist, Successful Dictator",
    image: "https://images.pexels.com/photos/4555464/pexels-photo-4555464.jpeg",
    description: "A vegetarian who cared deeply about animals while showing considerably less concern for certain groups of humans. His European tour ended abruptly in 1945.",
    years: "1933-1945",
    quote: "Anyone can deal with victory. Only the mighty can bear defeat."
  },
  {
    id: 3,
    name: "Mao",
    title: "The Great Helmsman",
    image: "https://images.pexels.com/photos/12339350/pexels-photo-12339350.jpeg",
    description: "Pioneered the 'Great Leap Forward' which mostly leapt into famine. His little red book became a bestseller, though reading it was strongly encouraged.",
    years: "1949-1976",
    quote: "Political power grows out of the barrel of a gun."
  },
  {
    id: 4,
    name: "Kim Jong-un",
    title: "The Supreme Leader",
    image: "https://images.pexels.com/photos/1028926/pexels-photo-1028926.jpeg",
    description: "Famously doesn't need to use toilets because his body is so efficient. Has a hairstyle that's mandatory viewing in North Korean barbershops.",
    years: "2011-Present",
    quote: "The internet? Why? We have our own intranet!"
  }
];

const LeadersSection: React.FC = () => {
  const [activeLeader, setActiveLeader] = useState<Leader | null>(null);

  const openLeaderModal = (leader: Leader) => {
    setActiveLeader(leader);
  };

  const closeLeaderModal = () => {
    setActiveLeader(null);
  };

  return (
    <section id="leaders" className="py-20 bg-gradient-to-b from-dark-gray to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            Meet The <span className="text-neon-yellow neon-text">DiCKs</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            History's most notorious figures, reimagined with the satire they deserve.
            Click on each leader to learn more about their questionable achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div 
              key={leader.id} 
              className="dictator-card cursor-pointer"
              onClick={() => openLeaderModal(leader)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-heading mb-1 text-neon-pink">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  {leader.title}
                </p>
                <p className="text-xs text-neon-yellow">
                  {leader.years}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Leader Modal */}
        {activeLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeLeaderModal}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div 
              className="bg-dark-gray z-10 rounded-lg w-full max-w-2xl overflow-hidden neon-box"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img 
                  src={activeLeader.image} 
                  alt={activeLeader.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-heading text-white">
                    {activeLeader.name}
                  </h3>
                  <p className="text-neon-pink">
                    {activeLeader.title}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  {activeLeader.description}
                </p>
                
                <div className="border-l-4 border-neon-yellow pl-4 mb-4">
                  <p className="text-gray-300 italic">
                    "{activeLeader.quote}"
                  </p>
                </div>
                
                <p className="text-sm text-gray-400">
                  Ruled: {activeLeader.years}
                </p>
              </div>
              
              <div className="bg-black p-4 flex justify-end">
                <button 
                  className="bg-neon-pink hover:bg-neon-pink/80 text-white font-bold py-2 px-4 rounded-md"
                  onClick={closeLeaderModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadersSection;