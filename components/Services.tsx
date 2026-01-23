
'use client';

<<<<<<< HEAD
import { TextReveal } from './TextReveal';
import { ScrollReveal } from './ScrollReveal';

=======
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285
export default function Services() {
  const services = [
    {
      icon: 'ri-robot-line',
      title: 'Automatización de Procesos',
      description: 'Optimizamos workflows y procesos empresariales mediante sistemas automatizados inteligentes.',
      features: ['Reducción de costos', 'Mayor eficiencia', 'Menos errores humanos']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Integración de Sistemas',
      description: 'Conectamos todas tus plataformas y herramientas para crear un ecosistema unificado.',
      features: ['APIs personalizadas', 'Sincronización en tiempo real', 'Compatibilidad total']
    },
    {
      icon: 'ri-brain-line',
      title: 'Inteligencia Artificial',
      description: 'Implementamos IA para análisis predictivo, toma de decisiones y automatización avanzada.',
      features: ['Machine Learning', 'Análisis predictivo', 'Automatización inteligente']
    },
    {
      icon: 'ri-cloud-line',
<<<<<<< HEAD
      title: 'Páginas web funcionales',
      description: 'Creamos webs claras y bien pensadas, que transmiten confianza a los clientes.',
      features: ['Webs claras y estratégicas', 'Diseño orientado a conversión', 'Confianza desde el primer clic']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Marketing digital con sistemas',
      description: 'No se trata solo de publicar, sino de tener procesos que conviertan visitas en contactos.',
      features: ['Procesos que convierten', 'Captación automatizada', 'Marketing escalable y medible']
=======
      title: 'Soluciones Cloud',
      description: 'Migramos y optimizamos tu infraestructura hacia la nube para mayor escalabilidad.',
      features: ['Escalabilidad automática', 'Seguridad avanzada', 'Acceso remoto']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Seguridad Avanzada',
      description: 'Protegemos tus sistemas automatizados con las más altas medidas de seguridad.',
      features: ['Encriptación de datos', 'Monitoreo 24/7', 'Respaldo automático']
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Análisis y Reporting',
      description: 'Dashboards en tiempo real y reportes automatizados para mejor toma de decisiones.',
      features: ['Dashboards interactivos', 'Reportes automáticos', 'KPIs personalizados']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
<<<<<<< HEAD
        <div className="text-center mb-16 flex flex-col items-center">
          <TextReveal
            text="Nuestros Servicios"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <TextReveal
            text="Ofrecemos soluciones completas de automatización diseñadas para transformar tu negocio y llevarlo al siguiente nivel tecnológico."
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            delay={0.3}
            width="100%"
          />
=======
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de automatización diseñadas para transformar 
            tu negocio y llevarlo al siguiente nivel tecnológico.
          </p>
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
<<<<<<< HEAD
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-lg mb-6">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-blue-400">
                      <i className="ri-check-line mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
=======
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-lg mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-blue-400">
                    <i className="ri-check-line mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285
          ))}
        </div>
      </div>
    </section>
  );
}
