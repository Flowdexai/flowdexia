
'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Carlos Mendoza',
      position: 'CEO, TechCorp Solutions',
      company: 'Empresa Mediana',
      content: 'Flowdex transformó completamente nuestros procesos. Hemos reducido un 40% nuestros costos operativos y aumentado la productividad significativamente.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20middle-aged%20businessman%20in%20modern%20office%2C%20confident%20CEO%20executive%2C%20corporate%20portrait%2C%20business%20suit%2C%20professional%20headshot%2C%20clean%20background%2C%20leadership%20presence%2C%20corporate%20photography%20style&width=100&height=100&seq=testimonial1&orientation=squarish'
    },
    {
      name: 'Ana Rodriguez',
      position: 'Directora de Operaciones',
      company: 'Retail Plus',
      content: 'La automatización de nuestro inventario ha sido increíble. Ahora podemos gestionar múltiples tiendas de manera eficiente y sin errores.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20director%20in%20modern%20office%2C%20confident%20female%20executive%2C%20corporate%20portrait%2C%20business%20attire%2C%20professional%20headshot%2C%20clean%20background%2C%20leadership%20presence%2C%20corporate%20photography%20style&width=100&height=100&seq=testimonial2&orientation=squarish'
    },
    {
      name: 'Miguel Torres',
      position: 'Gerente de TI',
      company: 'Manufactura Avanzada',
      content: 'El soporte técnico es excepcional. Siempre están disponibles y resuelven cualquier inconveniente de manera rápida y profesional.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20IT%20manager%20in%20modern%20office%2C%20confident%20male%20technology%20specialist%2C%20corporate%20portrait%2C%20business%20casual%20attire%2C%20professional%20headshot%2C%20clean%20background%2C%20technical%20expertise%2C%20corporate%20photography%20style&width=100&height=100&seq=testimonial3&orientation=squarish'
    },
    {
      name: 'Laura Vásquez',
      position: 'Fundadora',
      company: 'StartUp Innovate',
      content: 'Como startup, necesitábamos soluciones escalables. FlowdeX nos proporcionó exactamente lo que necesitábamos para crecer de manera sostenible.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20young%20female%20entrepreneur%20founder%20in%20modern%20office%2C%20confident%20startup%20leader%2C%20corporate%20portrait%2C%20business%20attire%2C%20professional%20headshot%2C%20clean%20background%2C%20innovation%20and%20leadership%2C%20corporate%20photography%20style&width=100&height=100&seq=testimonial4&orientation=squarish'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empresas de todos los tamaños confían en nosotros para sus necesidades de automatización.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <div className="flex items-center mb-6">
              <img 
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h3>
                <p className="text-blue-400">{testimonials[activeTestimonial].position}</p>
                <p className="text-gray-400 text-sm">{testimonials[activeTestimonial].company}</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-300 italic mb-6">
              "{testimonials[activeTestimonial].content}"
            </blockquote>
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  index === activeTestimonial 
                    ? 'bg-blue-500/20 border-blue-500' 
                    : 'bg-slate-800/30 border-slate-700 hover:border-blue-500/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
