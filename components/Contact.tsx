
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    tipoEmpresa: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          telefono: '',
          tipoEmpresa: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      setSubmitStatus('Error de conexión. Por favor, intenta más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos listos para transformar tu negocio. Obtén una consulta gratuita 
            y descubre cómo la automatización puede impulsar tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Dirección</h4>
                  <p className="text-gray-300">Av. Tecnológica 1234, Torre Empresarial<br />Ciudad de México, México</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                  <p className="text-gray-300">+52 55 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-300">contacto@flowdex.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Horario</h4>
                  <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00<br />Soporte 24/7 disponible</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Solicita una Consulta</h3>
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Empresa *</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Tipo de Empresa *</label>
                <div className="relative">
                  <select
                    name="tipoEmpresa"
                    value={formData.tipoEmpresa}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none appearance-none pr-8"
                  >
                    <option value="">Selecciona el tipo de empresa</option>
                    <option value="pequena">Pequeña Empresa (1-50 empleados)</option>
                    <option value="mediana">Mediana Empresa (51-250 empleados)</option>
                    <option value="grande">Gran Empresa (250+ empleados)</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Cuéntanos sobre tu proyecto y necesidades de automatización..."
                />
                <p className="text-gray-400 text-sm mt-1">{formData.mensaje.length}/500 caracteres</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.includes('exitosamente') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
