import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileSearch, Globe2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-eroum-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" width="100%" height="100%">
           <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="1" fill="currentColor" />
           </pattern>
           <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Industry Leaders Choose eROUM</h2>
          <p className="text-white/60 text-lg">Built on the pillars of Trust, Transparency, and Cultural Intelligence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-eroum-sage transition-colors duration-500">
              <ShieldCheck size={36} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Compliance First</h3>
            <p className="text-white/60 leading-relaxed">
              We adhere strictly to international standards. Our operations are fully compliant with environmental regulations, ensuring zero risk for our partners.
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-eroum-sage transition-colors duration-500">
              <FileSearch size={36} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Transparent Traceability</h3>
            <p className="text-white/60 leading-relaxed">
              Ready for ISCC & ESG requirements. We provide end-to-end visibility from the mill to the vessel, safeguarding your sustainability credentials.
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-eroum-sage transition-colors duration-500">
              <Globe2 size={36} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Bridging Cultures</h3>
            <p className="text-white/60 leading-relaxed">
              More than translation. We interpret business nuances between Korea and Malaysia, preventing misunderstandings and accelerating deal closure.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;