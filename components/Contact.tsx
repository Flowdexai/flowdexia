'use client';

import { useState } from 'react';

export default function LeadsForm() {
  // URL de tu formulario n8n - REEMPLAZA ESTA URL
  const N8N_FORM_URL = "https://tu-instancia-n8n.app.n8n.cloud/form/tu-form-id";
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(N8N_FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('¡Mensaje enviado exitosamente! Recibirás un email con la propuesta de agenda en breve.');
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          mensaje: ''
        });
        
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setSubmitStatus('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agenda tu Consulta Gratuita
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Completa el formulario y te contactaremos con una propuesta personalizada 
            para agendar una llamada y discutir cómo podemos ayudarte.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Solicita tu Consulta</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Tu nombre completo"
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
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">
                  Empresa <span className="text-gray-400">(opcional)</span>
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Cuéntanos sobre tu proyecto y necesidades..."
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