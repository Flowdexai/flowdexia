
'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TerminosDeServicio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-blue-500/20">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Términos de Servicio
                        </h1>
                        <p className="text-gray-400 text-sm mb-10">
                            Última actualización: Febrero 2026
                        </p>

                        <div className="space-y-8 text-gray-300 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
                                <p>
                                    Al acceder y utilizar el sitio web de <strong className="text-white">FlowdeXia</strong> y/o
                                    contratar nuestros servicios, usted acepta estos Términos de Servicio en su totalidad.
                                    Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestro sitio
                                    web ni contrate nuestros servicios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Descripción de los Servicios</h2>
                                <p className="mb-3">
                                    FlowdeXia ofrece servicios de automatización empresarial e inteligencia artificial, que incluyen
                                    pero no se limitan a:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Automatización de procesos de negocio.</li>
                                    <li>Integración de sistemas y plataformas.</li>
                                    <li>Desarrollo de soluciones de inteligencia artificial.</li>
                                    <li>Implementación de chatbots y asistentes virtuales.</li>
                                    <li>Consultoría en transformación digital.</li>
                                    <li>Soluciones cloud y seguridad avanzada.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Condiciones de Contratación</h2>
                                <p className="mb-3">
                                    La contratación de nuestros servicios se formalizará mediante un acuerdo específico que
                                    detallará:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>El alcance y descripción detallada de los servicios a prestar.</li>
                                    <li>Los plazos de ejecución y entrega.</li>
                                    <li>Las tarifas y condiciones de pago.</li>
                                    <li>Las responsabilidades de cada parte.</li>
                                    <li>Las condiciones de cancelación y reembolso.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Obligaciones del Cliente</h2>
                                <p className="mb-3">El cliente se compromete a:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Proporcionar información veraz, completa y actualizada necesaria para la prestación de los servicios.</li>
                                    <li>Facilitar el acceso a los sistemas y plataformas necesarios para la ejecución de los trabajos.</li>
                                    <li>Realizar los pagos en los plazos acordados.</li>
                                    <li>Comunicar cualquier cambio en los requisitos de forma oportuna.</li>
                                    <li>No utilizar los servicios para fines ilegales o no autorizados.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Propiedad Intelectual</h2>
                                <p className="mb-3">
                                    Todo el contenido del sitio web de FlowdeXia, incluyendo textos, gráficos, logotipos,
                                    imágenes, software y código fuente, está protegido por derechos de propiedad intelectual.
                                </p>
                                <p>
                                    Los desarrollos personalizados realizados para el cliente serán de su propiedad una vez
                                    completado el pago total. FlowdeXia se reserva el derecho de utilizar las metodologías,
                                    técnicas y conocimientos generales adquiridos durante la prestación de los servicios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Confidencialidad</h2>
                                <p>
                                    Ambas partes se comprometen a mantener la confidencialidad de toda la información
                                    sensible compartida durante la relación comercial. Esta obligación de confidencialidad
                                    permanecerá vigente incluso después de la finalización de la relación contractual.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Limitación de Responsabilidad</h2>
                                <p className="mb-3">
                                    FlowdeXia no será responsable de:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios.</li>
                                    <li>Interrupciones en el servicio causadas por factores externos fuera de nuestro control.</li>
                                    <li>Pérdidas de datos no atribuibles a nuestra negligencia.</li>
                                    <li>El uso indebido de las soluciones entregadas por parte del cliente.</li>
                                </ul>
                                <p className="mt-3">
                                    Nuestra responsabilidad total estará limitada al importe total pagado por el cliente
                                    por los servicios contratados.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Cancelación y Reembolsos</h2>
                                <p className="mb-3">
                                    Las condiciones de cancelación son las siguientes:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>El cliente puede cancelar el servicio con un preaviso de 15 días naturales.</li>
                                    <li>Se facturará el trabajo realizado hasta la fecha de cancelación.</li>
                                    <li>Los pagos anticipados no reembolsables serán especificados en el acuerdo de servicio.</li>
                                    <li>FlowdeXia se reserva el derecho de cancelar un servicio en caso de incumplimiento por parte del cliente.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Modificaciones de los Términos</h2>
                                <p>
                                    FlowdeXia se reserva el derecho de modificar estos Términos de Servicio en cualquier
                                    momento. Los cambios entrarán en vigor desde su publicación en el sitio web. Es
                                    responsabilidad del usuario revisar periódicamente estos términos para estar informado
                                    de cualquier actualización.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Ley Aplicable y Jurisdicción</h2>
                                <p>
                                    Estos Términos de Servicio se regirán e interpretarán de acuerdo con la legislación
                                    vigente. Para cualquier controversia derivada de estos términos, las partes se someterán
                                    a los juzgados y tribunales competentes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">11. Contacto</h2>
                                <p>
                                    Para cualquier consulta sobre estos Términos de Servicio, puede contactarnos en:
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
