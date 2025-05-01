import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is DiCK a real cryptocurrency?",
    answer: "No, DiCK is a satirical concept designed to poke fun at both crypto culture and historical dictators. Please don't actually try to invest in this fictional coin."
  },
  {
    question: "Isn't this offensive to victims of these regimes?",
    answer: "DiCK uses dark humor to critique authoritarian leaders, not to mock their victims. Satire has long been a tool to process historical trauma and criticize those in power."
  },
  {
    question: "Can I create my own DiCK memes?",
    answer: "Absolutely! The whole point of DiCK is to encourage satirical creativity. Just remember to punch up at the dictators, not down at their victims."
  },
  {
    question: "Why is it called DiCK?",
    answer: "The name is intentionally provocative to match the edgy, satirical nature of the concept. Plus, most dictators were, well... you know."
  },
  {
    question: "Which dictator would have the most DiCK?",
    answer: "Historically speaking, probably Stalin. He had a knack for controlling everything and everyone around him. His DiCK would be distributed very inequitably."
  },
  {
    question: "Is DiCK politically biased?",
    answer: "DiCK makes fun of authoritarians from all political spectrums. Left-wing, right-wing—if you're oppressing people, you're fair game for DiCK jokes."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-dark-gray to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            Frequently Asked <span className="text-neon-yellow neon-text">Questions</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Everything you wanted to know about DiCK but were afraid to ask.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-dull-gray rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-dark-gray hover:bg-dark-gray/80 transition-colors duration-300 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-heading text-white">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-neon-pink" />
                ) : (
                  <ChevronDown className="text-neon-pink" />
                )}
              </button>
              
              <div 
                className={`bg-black/50 px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'py-6 max-h-96' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            Still have questions? Join our community to learn more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;