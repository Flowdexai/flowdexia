
'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';

import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Hero />
      <Services />
      <About />

      <Contact />
      <Footer />
    </div>
  );
}
