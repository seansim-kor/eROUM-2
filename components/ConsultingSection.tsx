import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ScrollText, Handshake } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-eroum-sage/10 transition-all duration-300"
  >
    <div className="w-14 h-14 bg-eroum-cream rounded-xl flex items-center justify-center text-eroum-earth mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-eroum-dark mb-4">{title}</h3>
    <p className="text-eroum-dark/60 leading-relaxed">{desc}</p>
  </motion.div>
);

const ConsultingSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-eroum-earth font-semibold tracking-widest text-xs uppercase mb-2 block">Consultancy</span>
          <h2 className="text-4xl font-bold text-eroum-dark mb-6">Your Bridge to ASEAN</h2>
          <p className="text-eroum-dark/70 text-lg">
            We guide Korean enterprises through the complexities of the Malaysian market, transforming challenges into strategic opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Briefcase size={28} />}
            title="Market Entry Strategy"
            desc="Comprehensive feasibility studies and tailored entry roadmaps designed for specific industry verticals."
          />
          <ServiceCard 
            icon={<ScrollText size={28} />}
            title="Regulatory Support"
            desc="Navigating local compliance, licensing, and government liaisons to ensure smooth operational setup."
          />
          <ServiceCard 
            icon={<Handshake size={28} />}
            title="Partnership Matching"
            desc="Identifying and vetting local stakeholders to build robust, long-term joint ventures and collaborations."
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;