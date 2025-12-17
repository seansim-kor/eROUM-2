import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ScrollText, Handshake } from 'lucide-react';

// Reusing the FeatureItem style from TradingSection for consistency, adapted for a vertical list
const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay: number }> = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-4 p-5 rounded-xl hover:bg-eroum-accent/30 transition-colors border border-transparent hover:border-eroum-sage/20 group"
  >
    <div className="p-3 bg-eroum-sage/10 rounded-lg text-eroum-sage group-hover:bg-eroum-sage group-hover:text-white transition-colors duration-300 shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-eroum-dark mb-2">{title}</h4>
      <p className="text-sm text-eroum-dark/70 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const ConsultingSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual Side (Left - Mirrored from TradingSection) */}
          <div className="relative order-2 lg:order-1">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[600px]"
             >
                {/* Replaced with a reliable Unsplash image to ensure proper display */}
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
                  alt="Modern Business Architecture" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-eroum-dark/10 mix-blend-multiply"></div>
             </motion.div>

             {/* Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-eroum-sage/10 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>

          {/* Content Side (Right - Mirrored from TradingSection) */}
          <div className="order-1 lg:order-2">
            <span className="text-eroum-earth font-semibold tracking-widest text-xs uppercase mb-2 block">Consultancy</span>
            <h2 className="text-4xl font-bold text-eroum-dark mb-6">Your Bridge to ASEAN</h2>
            <p className="text-eroum-dark/70 mb-10 text-lg">
              We guide Korean enterprises through the complexities of the ASEAN market, transforming challenges into strategic opportunities.
            </p>

            <div className="flex flex-col gap-2">
              <FeatureItem 
                delay={0.1}
                icon={<Briefcase size={24} />}
                title="Market Entry Strategy"
                desc="Comprehensive feasibility studies and tailored entry roadmaps designed for specific industry verticals."
              />
              <FeatureItem 
                delay={0.2}
                icon={<ScrollText size={24} />}
                title="Regulatory Support"
                desc="Navigating local compliance, licensing, and government liaisons to ensure smooth operational setup."
              />
              <FeatureItem 
                delay={0.3}
                icon={<Handshake size={24} />}
                title="Partnership Matching"
                desc="Identifying and vetting local stakeholders to build robust, long-term joint ventures and collaborations."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;