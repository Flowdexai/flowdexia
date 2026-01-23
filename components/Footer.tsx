
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
<<<<<<< HEAD
              <div className="w-16 h-16 flex items-center justify-center rounded-lg">
                <img src="/logo.png" className="ri-robot-line text-white text-xl"></img>
              </div>
=======
              <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-lg">
                <i className="ri-robot-line text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-white font-pacifico">FlowdeX</span>
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285
            </div>
            <p className="text-gray-400 mb-6">
              Transformando negocios a través de la automatización inteligente. 
              Soluciones personalizadas para empresas de todos los tamaños.
            </p>
            <div className="flex space-x-4">
<<<<<<< HEAD
              <Link href="https://wa.me/+351937158208" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-whatsapp-fill text-white"></i>
              </Link>
              <Link href="https://www.facebook.com/flowdexia" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </Link>
              <Link href="https://www.instagram.com/flowdexia" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-white"></i>
              </Link>
              <Link href="mailto:contacto@flowdexia.com" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-mail-fill text-white"></i>
=======
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-white"></i>
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Automatización de Procesos</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Integración de Sistemas</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Inteligencia Artificial</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Soluciones Cloud</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Seguridad Avanzada</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Sobre Nosotros</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Nuestro Equipo</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Casos de Éxito</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Carreras</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contacto</h3>
<<<<<<< HEAD
            <div className="space-y-3">              
              <div className="flex items-center text-gray-400">
                <i className="ri-phone-line mr-2"></i>
                <span>+351 937 158 208</span>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-mail-line mr-2"></i>
                <span>contacto@flowdexia.com</span>
=======
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <i className="ri-map-pin-line mr-2"></i>
                <span>Av. Tecnológica 1234, CDMX</span>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-phone-line mr-2"></i>
                <span>+52 55 1234 5678</span>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-mail-line mr-2"></i>
                <span>contacto@flowdex.com</span>
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-time-line mr-2"></i>
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 FlowdeX. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm cursor-pointer">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm cursor-pointer">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm cursor-pointer">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
