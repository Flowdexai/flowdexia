'use client';

import { useState } from 'react';
import { TextReveal } from './TextReveal';
import { ScrollReveal } from './ScrollReveal';

export default function LeadsForm() {
    // URL de tu formulario n8n - REEMPLAZA ESTA URL
    const N8N_FORM_URL = "https://n8n.flowdexia.cloud/form/09952bca-6e39-4676-9edb-2d230f1944d6";

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        empresa: '',
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Crear FormData (multipart/form-data)
            const formDataToSend = new FormData();
            formDataToSend.append('field-0', formData.nombre);
            formDataToSend.append('field-1', formData.email);
            formDataToSend.append('field-2', formData.empresa);
            formDataToSend.append('field-3', formData.mensaje);

            const response = await fetch(N8N_FORM_URL, {
                method: 'POST',
                body: formDataToSend
                // NO pongas Content-Type, se añade automáticamente con boundary
            });

            if (response.ok) {
                setSubmitStatus('¡Mensaje enviado exitosamente! Recibirás un email de bienvenida en breve.');
                setFormData({
                    nombre: '',
                    email: '',
                    empresa: '',
                    mensaje: ''
                });

                setTimeout(() => setSubmitStatus(''), 5000);
            } else {
                setSubmitStatus('Error al enviar el mensaje. Por favor, intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('Error al enviar el mensaje. Por favor, intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="py-20 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <TextReveal
                        text="Cuéntanos como podemos ayudarte?"
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    />
                    <TextReveal
                        text="Completá el formulario y te contactaremos para asesorarte."
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                        delay={0.3}
                        width="100%"
                    />
                </div>

                <div className="max-w-3xl mx-auto">
                    <ScrollReveal delay={0.4} width="100%">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Contáctanos</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white mb-2">Nombre y Apellido *</label>
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
                                        ¿En qué etapa estás actualmente? *
                                    </label>
                                    <select
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="emprendimiento">Tengo un emprendimiento</option>
                                        <option value="negocio">Tengo un negocio</option>
                                        <option value="empresa">Tengo una empresa / agencia</option>
                                        <option value="aprender">Quiero aprender (todavía no vendo)</option>
                                    </select>
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
                                        placeholder="Cuéntanos sobre tu proyecto y/o necesidades..."
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
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
