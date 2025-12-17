import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import TradingSection from './components/TradingSection';
import ConsultingSection from './components/ConsultingSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-eroum-sage selection:text-white">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <BrandStory />
        </section>
        <section id="business">
          <TradingSection />
          <ConsultingSection />
        </section>
        <section id="features">
          <WhyChooseUs />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;