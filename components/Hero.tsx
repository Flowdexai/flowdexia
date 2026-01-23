
'use client';

import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20futuristic%20office%20with%20automation%20technology%2C%20robotic%20systems%2C%20digital%20interfaces%2C%20blue%20and%20black%20color%20scheme%2C%20professional%20corporate%20environment%2C%20sleek%20design%2C%20high-tech%20atmosphere%2C%20minimalist%20workspace%20with%20automated%20equipment%2C%20sophisticated%20technology%20setup%2C%20clean%20modern%20architecture&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/50 via-black/70 to-slate-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-raleway"
          >
            Automatización
            <span className="block text-blue-400 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Inteligente</span>
          </motion.h1>

          <div className="mb-8 flex justify-center">
            <TextReveal
              text="En FlowdeX ayudamos a negocios y agencias a ahorrar tiempo y vender más usando automatización, IA y páginas web inteligentes."
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              delay={0.2}
              width="100%"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/+351937158208?text=Hola,%20estoy%20interesado%20en%20sus%20servicios%20de%20automatización"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all cursor-pointer whitespace-nowrap inline-block text-center shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Contáctanos
            </a>
            <button
              onClick={() => {
                document.getElementById('servicios')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 text-lg font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300 transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
            >
              Ver Servicios
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce"
      >
        <i className="ri-arrow-down-line text-2xl"></i>
      </motion.div>
    </section>
  );
}
