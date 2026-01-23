
'use client';

import { TextReveal } from './TextReveal';
import { ScrollReveal } from './ScrollReveal';

export default function About() {
  const stats = [
    { number: '100+', label: 'Proyectos Completados' },
    { number: '50+', label: 'Clientes Satisfechos' },
    { number: '2+', label: 'Años de Experiencia' },
    { number: '24/7', label: 'Soporte Técnico' }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <TextReveal
              text="Sobre Nosotros"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            />
            <TextReveal
              text="Somos una empresa especializada en automatización empresarial con más de 2 años de experiencia transformando negocios a través de tecnología avanzada e innovación constante."
              className="text-xl text-gray-300 mb-8"
              delay={0.2}
              width="100%"
            />
            <div className="space-y-6">
              <ScrollReveal delay={0.3}>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-lg mt-1">
                    <i className="ri-rocket-line text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Innovación Constante</h3>
                    <p className="text-gray-300">
                      Utilizamos las últimas tecnologías para crear soluciones que anticipan las necesidades futuras.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-lg mt-1">
                    <i className="ri-team-line text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Equipo Experto</h3>
                    <p className="text-gray-300">
                      Nuestro equipo de especialistas cuenta con certificaciones internacionales en automatización.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-lg mt-1">
                    <i className="ri-award-line text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Resultados Comprobados</h3>
                    <p className="text-gray-300">
                      Hemos ayudado a más de 50 empresas a optimizar sus procesos y reducir costos operativos.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20diverse%20team%20of%20technology%20specialists%20working%20on%20automation%20systems%2C%20modern%20office%20environment%2C%20collaborative%20workspace%2C%20engineers%20and%20developers%20with%20laptops%20and%20monitors%2C%20blue%20and%20black%20color%20scheme%2C%20corporate%20professional%20atmosphere%2C%20teamwork%20and%20innovation&width=600&height=400&seq=about1&orientation=landscape"
                alt="Equipo de trabajo"
                className="rounded-xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white font-semibold">Disponible 24/7</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={0.6 + (index * 0.1)}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
