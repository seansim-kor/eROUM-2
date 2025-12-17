import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-eroum-sage/20 border border-eroum-sage flex items-center justify-center">
                 <div className="w-3 h-3 rounded-full bg-eroum-sage" />
              </div>
              <span className="font-bold text-xl tracking-tight text-eroum-dark">
                eROUM Global
              </span>
            </div>
            <p className="text-eroum-dark/60 max-w-sm mb-6 leading-relaxed">
              Your trusted partner in renewable energy resources and ASEAN market expansion. Delivering goodness through sustainable trade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-eroum-sage hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-eroum-dark mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-eroum-dark/60 hover:text-eroum-sage transition-colors">About Us</a></li>
              <li><a href="#business" className="text-eroum-dark/60 hover:text-eroum-sage transition-colors">PAO Trading</a></li>
              <li><a href="#business" className="text-eroum-dark/60 hover:text-eroum-sage transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-eroum-dark mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-eroum-dark/60">
                <MapPin size={20} className="shrink-0 text-eroum-sage" />
                <span>Selangor, Malaysia</span>
              </li>
              <li className="flex items-center gap-3 text-eroum-dark/60">
                <Mail size={20} className="shrink-0 text-eroum-sage" />
                <a href="mailto:info@eroum-global.com" className="hover:text-eroum-sage">info@eroum-global.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} eROUM Global Sdn Bhd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-eroum-dark">Privacy Policy</a>
            <a href="#" className="hover:text-eroum-dark">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;