import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, HeartHandshake } from 'lucide-react';

const BrandStory: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/14IvRxhNBLhAeYc6uJ2qVFgtIx4G6eaPz" 
          alt="Brand Background" 
          className="w-full h-full object-cover"
        />
        {/* Strong white overlay to ensure the dark text remains legible over the background image */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Subtle Gradient preserved on top of image/overlay if needed */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-1"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
             <span className="text-eroum-sage font-serif italic text-2xl">이로움[iroum]</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-eroum-dark tracking-tight">
            The Philosophy of Benefit <span className="font-light text-eroum-dark/50">(이로움)</span>
          </h2>
        </motion.div>

        {/* Deconstruction Area: The 'e' and 'ROUM' Split */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-20 relative">
          
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-px bg-gradient-to-b from-transparent via-eroum-sage/30 to-transparent -translate-x-1/2"></div>

          {/* Part A: The Prefix 'e' */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-end text-center md:text-right group"
          >
            <div className="mb-6 relative">
              <span className="text-[120px] leading-none font-light text-eroum-sage/20 absolute -top-8 -right-8 select-none group-hover:text-eroum-sage/30 transition-colors duration-500">e</span>
              <span className="text-8xl leading-none font-serif text-eroum-sage relative z-10">e</span>
            </div>
            
            <div className="flex items-center gap-2 mb-4 text-eroum-sage font-medium tracking-widest text-xs uppercase">
              <span>Earth</span>
              <span className="w-1 h-1 rounded-full bg-eroum-sage"></span>
              <span>Energy</span>
              <span className="w-1 h-1 rounded-full bg-eroum-sage"></span>
              <span>Eco</span>
            </div>
            
            <h3 className="text-xl font-bold text-eroum-dark mb-4">The Seed of Change</h3>
            <p className="text-eroum-dark/70 leading-relaxed max-w-sm">
              Every great change in the world begins with a tiny seed (<span className="text-eroum-sage font-bold font-serif">e</span>). 
              eROUM Global creates beneficial value for both people and nature, based on 'e' which symbolizes Earth, Energy, and Eco.
            </p>
          </motion.div>

          {/* Part B: The Root 'ROUM' */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center md:items-start text-center md:text-left group"
          >
             <div className="mb-6 relative">
              <span className="text-[100px] leading-none font-light text-eroum-earth/10 absolute -top-6 -left-4 select-none group-hover:text-eroum-earth/20 transition-colors duration-500">ROUM</span>
              <span className="text-7xl md:text-8xl leading-none font-bold text-eroum-earth relative z-10 tracking-tighter">ROUM</span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-eroum-earth font-medium tracking-widest text-xs uppercase">
              <span>Benefit</span>
              <span className="w-1 h-1 rounded-full bg-eroum-earth"></span>
              <span>Goodness</span>
              <span className="w-1 h-1 rounded-full bg-eroum-earth"></span>
              <span>Value</span>
            </div>

            <h3 className="text-xl font-bold text-eroum-dark mb-4">The Fruit of Goodness</h3>
            <p className="text-eroum-dark/70 leading-relaxed max-w-sm">
              Derived from the Korean word '<span className="text-eroum-earth font-semibold">이로움[iroum]</span>', meaning 'Benefit' or 'Goodness,' eROUM Global exists to create a virtuous cycle.
            </p>
          </motion.div>

        </div>

        {/* The Mission: Merged Concept */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="bg-eroum-cream/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-eroum-sage/10 shadow-sm"
        >
          <div className="w-12 h-1 bg-eroum-sage mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-eroum-dark/80 leading-relaxed font-light">
            "We act as the vital link between nations, delivering the benefits of Malaysia’s rich natural resources to Korea’s advanced bio-energy sector. Our mission goes beyond trading; it is about ensuring a <strong className="text-eroum-dark font-semibold">sustainable, transparent, and beneficial future</strong> for all stakeholders—and the planet we share."
          </p>
        </motion.div>

        {/* Original KR/MY Graphic */}
        <div className="mt-20 flex justify-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-4xl font-light text-eroum-sage group-hover:scale-110 transition-transform">KR</span>
                <span className="text-xs tracking-widest uppercase">Technology</span>
             </div>
             <div className="h-12 w-px bg-eroum-dark/20"></div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-4xl font-light text-eroum-earth group-hover:scale-110 transition-transform">MY</span>
                <span className="text-xs tracking-widest uppercase">Resources</span>
             </div>
        </div>

      </div>
    </section>
  );
};

export default BrandStory;