
'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PoliticaDePrivacidad() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-blue-500/20">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Política de Privacidad
                        </h1>
                        <p className="text-gray-400 text-sm mb-10">
                            Última actualización: Febrero 2026
                        </p>

                        <div className="space-y-8 text-gray-300 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Responsable del Tratamiento</h2>
                                <p>
                                    El responsable del tratamiento de sus datos personales es <strong className="text-white">FlowdeXia</strong>,
                                    con correo electrónico de contacto{' '}
                                    <a href="mailto:contacto@flowdexia.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        contacto@flowdexia.com
                                    </a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Datos que Recopilamos</h2>
                                <p className="mb-3">Podemos recopilar los siguientes tipos de datos personales:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Datos de identificación:</strong> nombre, apellidos, dirección de correo electrónico.</li>
                                    <li><strong className="text-white">Datos de empresa:</strong> nombre de la empresa, cargo o rol.</li>
                                    <li><strong className="text-white">Datos de contacto:</strong> número de teléfono, dirección de correo electrónico.</li>
                                    <li><strong className="text-white">Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia.</li>
                                    <li><strong className="text-white">Datos de cookies:</strong> información recopilada a través de cookies y tecnologías similares.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Finalidad del Tratamiento</h2>
                                <p className="mb-3">Los datos personales que recopilamos se utilizan para las siguientes finalidades:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Gestionar la relación comercial y prestar los servicios contratados.</li>
                                    <li>Enviar comunicaciones comerciales y newsletters, con su consentimiento previo.</li>
                                    <li>Responder a consultas y solicitudes realizadas a través de nuestros formularios de contacto.</li>
                                    <li>Mejorar la experiencia de usuario en nuestro sitio web.</li>
                                    <li>Cumplir con las obligaciones legales aplicables.</li>
                                    <li>Analizar el uso del sitio web para mejorar nuestros servicios.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Base Jurídica del Tratamiento</h2>
                                <p className="mb-3">El tratamiento de sus datos se basa en:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Consentimiento:</strong> cuando nos facilita sus datos a través de formularios de contacto o al aceptar cookies.</li>
                                    <li><strong className="text-white">Ejecución de contrato:</strong> cuando el tratamiento es necesario para la prestación de nuestros servicios.</li>
                                    <li><strong className="text-white">Interés legítimo:</strong> para mejorar nuestros servicios y la experiencia de usuario.</li>
                                    <li><strong className="text-white">Obligación legal:</strong> cuando el tratamiento es necesario para cumplir con obligaciones legales.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Conservación de los Datos</h2>
                                <p>
                                    Los datos personales serán conservados durante el tiempo necesario para cumplir con la finalidad para
                                    la que fueron recogidos, y durante los plazos legalmente establecidos. Una vez finalizada la relación
                                    comercial, los datos serán bloqueados y conservados únicamente a disposición de las autoridades
                                    competentes durante los plazos de prescripción legales.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Cesión de Datos a Terceros</h2>
                                <p>
                                    No cederemos sus datos personales a terceros, salvo obligación legal o para la prestación de los
                                    servicios contratados. En caso de que sea necesario ceder datos a terceros proveedores de servicios
                                    (como servicios de hosting, analítica web o herramientas de automatización), nos aseguraremos de
                                    que estos cumplan con las garantías adecuadas de protección de datos.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Derechos del Usuario</h2>
                                <p className="mb-3">Como titular de los datos, usted tiene derecho a:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-white">Acceso:</strong> conocer qué datos personales tenemos sobre usted.</li>
                                    <li><strong className="text-white">Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
                                    <li><strong className="text-white">Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                                    <li><strong className="text-white">Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
                                    <li><strong className="text-white">Limitación:</strong> solicitar la limitación del tratamiento en determinados supuestos.</li>
                                    <li><strong className="text-white">Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
                                </ul>
                                <p className="mt-4">
                                    Para ejercer cualquiera de estos derechos, puede contactarnos en{' '}
                                    <a href="mailto:contacto@flowdexia.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        contacto@flowdexia.com
                                    </a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Seguridad de los Datos</h2>
                                <p>
                                    Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos
                                    personales contra el acceso no autorizado, la alteración, la divulgación o la destrucción.
                                    Entre estas medidas se incluyen el cifrado de datos, el control de acceso y la monitorización
                                    de nuestros sistemas.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Modificaciones</h2>
                                <p>
                                    Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento.
                                    Cualquier cambio será publicado en esta página con la fecha de última actualización.
                                    Le recomendamos revisar periódicamente esta política para estar informado sobre cómo
                                    protegemos sus datos.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
                                <p>
                                    Si tiene alguna pregunta o inquietud sobre nuestra Política de Privacidad o sobre el
                                    tratamiento de sus datos personales, puede contactarnos a través de:
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
