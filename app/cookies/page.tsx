
'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Cookies() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-blue-500/20">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Política de Cookies
                        </h1>
                        <p className="text-gray-400 text-sm mb-10">
                            Última actualización: Febrero 2026
                        </p>

                        <div className="space-y-8 text-gray-300 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. ¿Qué son las Cookies?</h2>
                                <p>
                                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador,
                                    tablet o móvil) cuando visita un sitio web. Estas cookies permiten al sitio web recordar
                                    sus acciones y preferencias durante un período de tiempo, de forma que no tiene que
                                    volver a introducirlos cada vez que visite el sitio o navegue de una página a otra.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Tipos de Cookies que Utilizamos</h2>

                                <div className="space-y-6">
                                    <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/30">
                                        <h3 className="text-lg font-semibold text-blue-400 mb-2">🔧 Cookies Técnicas (Necesarias)</h3>
                                        <p className="mb-2">
                                            Son esenciales para el funcionamiento del sitio web y no pueden desactivarse.
                                            Se activan en respuesta a acciones realizadas por usted, como configurar preferencias
                                            de privacidad, iniciar sesión o completar formularios.
                                        </p>
                                        <p className="text-sm text-gray-400">Duración: Sesión / 1 año</p>
                                    </div>

                                    <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/30">
                                        <h3 className="text-lg font-semibold text-blue-400 mb-2">📊 Cookies Analíticas</h3>
                                        <p className="mb-2">
                                            Estas cookies nos permiten contar las visitas y fuentes de tráfico para medir y
                                            mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más
                                            y las menos populares, y conocer cómo navegan los usuarios por el sitio.
                                        </p>
                                        <p className="text-sm text-gray-400">Proveedor: Google Analytics | Duración: 2 años</p>
                                    </div>

                                    <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/30">
                                        <h3 className="text-lg font-semibold text-blue-400 mb-2">🎯 Cookies de Marketing</h3>
                                        <p className="mb-2">
                                            Estas cookies pueden ser establecidas por nuestros socios publicitarios a través de
                                            nuestro sitio web. Pueden ser utilizadas por estas empresas para crear un perfil de
                                            sus intereses y mostrarle anuncios relevantes en otros sitios web.
                                        </p>
                                        <p className="text-sm text-gray-400">Duración: Variable según el proveedor</p>
                                    </div>

                                    <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/30">
                                        <h3 className="text-lg font-semibold text-blue-400 mb-2">⚙️ Cookies de Funcionalidad</h3>
                                        <p className="mb-2">
                                            Permiten al sitio web recordar sus preferencias y proporcionar funcionalidades
                                            mejoradas y personalizadas, como el idioma preferido o la región en la que se encuentra.
                                        </p>
                                        <p className="text-sm text-gray-400">Duración: 1 año</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Cookies Específicas que Utilizamos</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-600">
                                                <th className="py-3 px-4 text-white font-semibold">Cookie</th>
                                                <th className="py-3 px-4 text-white font-semibold">Tipo</th>
                                                <th className="py-3 px-4 text-white font-semibold">Finalidad</th>
                                                <th className="py-3 px-4 text-white font-semibold">Duración</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-300">
                                            <tr className="border-b border-slate-700/50">
                                                <td className="py-3 px-4 font-mono text-sm text-blue-300">_ga</td>
                                                <td className="py-3 px-4">Analítica</td>
                                                <td className="py-3 px-4">Distinguir usuarios en Google Analytics</td>
                                                <td className="py-3 px-4">2 años</td>
                                            </tr>
                                            <tr className="border-b border-slate-700/50">
                                                <td className="py-3 px-4 font-mono text-sm text-blue-300">_ga_*</td>
                                                <td className="py-3 px-4">Analítica</td>
                                                <td className="py-3 px-4">Mantener el estado de la sesión</td>
                                                <td className="py-3 px-4">2 años</td>
                                            </tr>
                                            <tr className="border-b border-slate-700/50">
                                                <td className="py-3 px-4 font-mono text-sm text-blue-300">cookie_consent</td>
                                                <td className="py-3 px-4">Necesaria</td>
                                                <td className="py-3 px-4">Almacenar preferencias de consentimiento</td>
                                                <td className="py-3 px-4">1 año</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. ¿Cómo Gestionar las Cookies?</h2>
                                <p className="mb-4">
                                    Puede configurar su navegador para que bloquee o le notifique sobre las cookies.
                                    A continuación, le mostramos cómo hacerlo en los navegadores más comunes:
                                </p>
                                <ul className="space-y-3 ml-4">
                                    <li>
                                        <strong className="text-white">Google Chrome:</strong>{' '}
                                        Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
                                    </li>
                                    <li>
                                        <strong className="text-white">Mozilla Firefox:</strong>{' '}
                                        Opciones → Privacidad y seguridad → Cookies y datos del sitio
                                    </li>
                                    <li>
                                        <strong className="text-white">Safari:</strong>{' '}
                                        Preferencias → Privacidad → Gestionar datos del sitio web
                                    </li>
                                    <li>
                                        <strong className="text-white">Microsoft Edge:</strong>{' '}
                                        Configuración → Cookies y permisos del sitio → Cookies y datos almacenados
                                    </li>
                                </ul>
                                <p className="mt-4 text-yellow-400/80 text-sm">
                                    <i className="ri-alert-line mr-1"></i>
                                    Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del
                                    sitio web y los servicios que podemos ofrecerle.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Cookies de Terceros</h2>
                                <p>
                                    Utilizamos servicios de terceros que pueden instalar cookies en su dispositivo.
                                    Estos servicios incluyen Google Analytics para el análisis del tráfico web.
                                    Estos terceros tienen sus propias políticas de privacidad y cookies, sobre las
                                    cuales no tenemos control directo. Le recomendamos consultar las políticas de
                                    privacidad de estos terceros para obtener más información.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Actualización de esta Política</h2>
                                <p>
                                    Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios
                                    en las cookies que utilizamos o por otras razones operativas, legales o regulatorias.
                                    Le recomendamos visitar esta página regularmente para estar informado sobre el uso
                                    de cookies.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Contacto</h2>
                                <p>
                                    Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                                    <li>Email: <a href="mailto:contacto@flowdexia.com" className="text-blue-400 hover:text-blue-300 transition-colors">contacto@flowdexia.com</a></li>
                                    <li>Teléfono: +351 937 158 208</li>
                                </ul>
                            </section>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-700">
                            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                                <i className="ri-arrow-left-line mr-2"></i>
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
