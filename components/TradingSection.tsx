import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Truck, TrendingDown, CheckCircle2 } from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay: number }> = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-eroum-sage/20 group"
  >
    <div className="p-3 bg-eroum-sage/10 rounded-lg text-eroum-sage group-hover:bg-eroum-sage group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-eroum-dark mb-2">{title}</h4>
      <p className="text-sm text-eroum-dark/70 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const TradingSection: React.FC = () => {
  return (
    <section className="py-24 bg-eroum-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <span className="text-eroum-earth font-semibold tracking-widest text-xs uppercase mb-2 block">Core Business</span>
            <h2 className="text-4xl font-bold text-eroum-dark mb-6">Bio Diesel PAO Trading</h2>
            <p className="text-eroum-dark/70 mb-10 text-lg">
              Unrivaled supply stability and quality control for Korea's Tier 1 manufacturers. We understand that consistency is your production line's lifeline.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <FeatureItem 
                delay={0.1}
                icon={<Factory size={24} />}
                title="Strategic Sourcing"
                desc="Direct access to Tier 2 independent mills & refiners in Port Klang & Pasir Gudang."
              />
              <FeatureItem 
                delay={0.2}
                icon={<CheckCircle2 size={24} />}
                title="Quality Assurance"
                desc="Strict control: FFA 50-70%, M&I <3%. Verified by SGS/Intertek pre-shipment."
              />
              <FeatureItem 
                delay={0.3}
                icon={<Truck size={24} />}
                title="Logistics Optimization"
                desc="Expertise in ISO Tanks & Flexibags with specialized heating for winter transport."
              />
              <FeatureItem 
                delay={0.4}
                icon={<TrendingDown size={24} />}
                title="Cost Efficiency"
                desc="Leveraging Malaysia’s export duty advantages for maximum competitive pricing."
              />
            </div>
          </div>

          {/* Visual Side - Palm Tree Image */}
          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
             >
                <img 
                  src="/handwriting.jpeg"
                  alt="Palm Oil Plantation" 
                  className="w-full h-auto object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-eroum-sage/10 mix-blend-overlay"></div>
             </motion.div>

             {/* Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TradingSection;
