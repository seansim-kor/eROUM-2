import React from 'react';
import { motion } from 'framer-motion';

const BrandStory: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-eroum-cream to-white"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block mb-4">
             <span className="text-eroum-sage font-serif italic text-2xl">I-Roum</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-eroum-dark mb-8 tracking-tight">
            The Philosophy of Benefit <span className="font-light">(이로움)</span>
          </h2>

          <div className="prose prose-lg mx-auto text-eroum-dark/70 leading-relaxed">
            <p className="mb-6">
              Derived from the Korean word <span className="text-eroum-earth font-semibold">'I-Roum' (이로움)</span>, meaning 'Benefit' or 'Goodness,' eROUM Global exists to create a virtuous cycle.
            </p>
            <p>
              We act as the vital link between nations, delivering the benefits of Malaysia’s rich natural resources to Korea’s advanced bio-energy sector. Our mission goes beyond trading; it is about ensuring a sustainable, transparent, and beneficial future for all stakeholders—and the planet we share.
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-16 opacity-50">
             <div className="flex flex-col items-center gap-2">
                <span className="text-4xl font-light text-eroum-sage">KR</span>
                <span className="text-xs tracking-widest uppercase">Technology</span>
             </div>
             <div className="h-12 w-px bg-eroum-dark/20"></div>
             <div className="flex flex-col items-center gap-2">
                <span className="text-4xl font-light text-eroum-earth">MY</span>
                <span className="text-xs tracking-widest uppercase">Resources</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;