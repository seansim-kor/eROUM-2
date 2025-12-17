import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-eroum-cream">
      {/* Background Image - Palm Trees/Plantation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596020560737-124b61836c1e?q=80&w=2070&auto=format&fit=crop" 
          alt="Palm trees plantation"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Overlay - Gradient from solid cream to transparent to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-eroum-cream via-eroum-cream/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative">
        <div className="max-w-3xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eroum-dark/5 border border-eroum-dark/5 text-eroum-dark/60 text-[11px] font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-eroum-sage/60"></span>
              Premier Partner in ASEAN
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-eroum-dark leading-[1.1] mb-8 tracking-tight">
              Bridging Resources, <br />
              <span className="text-eroum-sage italic font-light">Refining the Future.</span>
            </h1>
            
            <p className="text-lg text-eroum-dark/70 mb-10 max-w-lg leading-relaxed">
              Premier Sourcing Partner for Palm Acid Oil (PAO) & Strategic Business Consultancy in ASEAN. Connecting Korean innovation with Malaysian abundance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-eroum-dark text-white rounded-full font-medium shadow-xl hover:bg-eroum-earth transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Partner with eROUM
                <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;