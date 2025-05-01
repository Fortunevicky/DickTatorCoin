import React, { useEffect, useRef } from 'react';

const TokenomicsSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasSize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Define the data for the pie chart
    const data = [
      { label: "Dictator's Wallet", value: 50, color: '#ff00ff' },
      { label: "Propaganda Fund", value: 20, color: '#9900ff' },
      { label: "Public Distribution", value: 15, color: '#ffff00' },
      { label: "Secret Police", value: 10, color: '#00ffff' },
      { label: "Political Prisoners", value: 5, color: '#ff5555' }
    ];
    
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    // Draw the pie chart
    const drawPieChart = () => {
      if (!ctx || !canvasRef.current) return;
      
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      
      const centerX = canvasRef.current.width / 2;
      const centerY = canvasRef.current.height / 2;
      const radius = Math.min(centerX, centerY) - 20;
      
      let startAngle = 0;
      
      data.forEach(item => {
        const sliceAngle = (2 * Math.PI * item.value) / total;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        
        ctx.fillStyle = item.color;
        ctx.fill();
        
        // Draw slice label
        const middleAngle = startAngle + sliceAngle / 2;
        const labelX = centerX + (radius * 0.7) * Math.cos(middleAngle);
        const labelY = centerY + (radius * 0.7) * Math.sin(middleAngle);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${item.value}%`, labelX, labelY);
        
        startAngle += sliceAngle;
      });
      
      // Draw center circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.4, 0, 2 * Math.PI);
      ctx.fillStyle = '#222222';
      ctx.fill();
      
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('DiCK', centerX, centerY - 10);
      ctx.fillText('Distribution', centerX, centerY + 10);
    };
    
    drawPieChart();
    window.addEventListener('resize', drawPieChart);
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('resize', drawPieChart);
    };
  }, []);

  const tokenomicsData = [
    { label: "Total Supply", value: "1,000,000,000,000" },
    { label: "Current Price", value: "$0.000001984" },
    { label: "Market Cap", value: "$1,984,000" },
    { label: "Holders", value: "25,000" },
    { label: "Predicted Growth", value: "Up 1000% or Gulag" }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-black to-dark-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            DiCK <span className="text-neon-pink neon-text">Tokenomics</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Our token distribution is as fair as a rigged election, but at least we're honest about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-dark-gray rounded-lg p-6 border border-dull-gray">
            <h3 className="text-2xl font-heading mb-6 text-center text-neon-yellow">
              DiCK Distribution
            </h3>
            <div className="relative aspect-square">
              <canvas 
                ref={canvasRef} 
                className="w-full h-full"
              ></canvas>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neon-pink mr-2"></div>
                <span className="text-gray-300">Dictator's Wallet (50%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neon-purple mr-2"></div>
                <span className="text-gray-300">Propaganda Fund (20%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neon-yellow mr-2"></div>
                <span className="text-gray-300">Public Distribution (15%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-neon-blue mr-2"></div>
                <span className="text-gray-300">Secret Police (10%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 text-[#ff5555] mr-2"></div>
                <span className="text-gray-300">Political Prisoners (5%)</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-dark-gray rounded-lg p-6 border border-dull-gray mb-8">
              <h3 className="text-2xl font-heading mb-6 text-center text-neon-yellow">
                Key Stats
              </h3>
              
              <div className="space-y-6">
                {tokenomicsData.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-dull-gray pb-2">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-neon-pink font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-dark-gray rounded-lg p-6 border border-dull-gray flex-1">
              <h3 className="text-2xl font-heading mb-4 text-neon-yellow">
                DiCK Tax Policy
              </h3>
              
              <p className="text-gray-300 mb-4">
                Just like real dictators, we take a significant cut of every transaction:
              </p>
              
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">•</span>
                  <span>10% tax on all transactions (because we can)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">•</span>
                  <span>5% goes to the Dictator's private vault</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">•</span>
                  <span>3% for propaganda and marketing efforts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">•</span>
                  <span>2% distributed to loyal comrades holding DiCK</span>
                </li>
              </ul>
              
              <p className="text-neon-yellow font-bold mt-4 italic">
                "Taxation is theft, unless we're the ones doing it."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;