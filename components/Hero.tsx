
'use client';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20futuristic%20office%20with%20automation%20technology%2C%20robotic%20systems%2C%20digital%20interfaces%2C%20blue%20and%20black%20color%20scheme%2C%20professional%20corporate%20environment%2C%20sleek%20design%2C%20high-tech%20atmosphere%2C%20minimalist%20workspace%20with%20automated%20equipment%2C%20sophisticated%20technology%20setup%2C%20clean%20modern%20architecture&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Automatización
            <span className="block text-blue-400">Inteligente</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transformamos tu negocio con soluciones de automatización avanzadas.
            Desde pequeñas empresas hasta grandes corporaciones, optimizamos procesos y maximizamos la eficiencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/351TU_NUMERO?text=Hola,%20estoy%20interesado%20en%20sus%20servicios%20de%20automatización"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer whitespace-nowrap inline-block text-center"
            >
              Comenzar Ahora
            </a>
            <button
              onClick={() => {
                document.getElementById('servicios')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 text-lg font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
