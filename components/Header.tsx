
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-500/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-32 h-16 flex items-center justify-center">
              <a href="http://localhost:3000/"><img src="/logo.png" className="ri-robot-line text-white text-xl"></img></a>
            </div>
            {/* <a href="http://localhost:3000/"><span className="text-2xl font-bold text-sky-600 font-pacifico">Flow</span><span className="text-2xl font-bold text-white font-pacifico">deX</span></a> */}
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
              Inicio
            </Link>
            <Link href="#servicios" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
              Nosotros
            </Link>
            <Link href="#testimonios" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
              Contacto
            </Link>
          </nav>

          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-white border border-blue-500 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer whitespace-nowrap">
              Cotizar
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              Contactar
            </button>
          </div> */}

          <div className="hidden md:flex items-center space-x-4">
            <a href="#!" role="button">
              <span className="[&>svg]:h-9 [&>svg]:w-9 [&>svg]:fill-[#c13584]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>

            <a href="#!" role="button">
              <span className="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:fill-[#60a5fa]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" /></svg>
              </span>
            </a>

            <a href="#!" role="button">
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </a>
          </div>

          <button
            className="md:hidden text-white w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-500/30">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="#inicio" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                Inicio
              </Link>
              <Link href="#servicios" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                Servicios
              </Link>
              <Link href="#nosotros" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                Nosotros
              </Link>
              <Link href="#testimonios" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                Testimonios
              </Link>
              <Link href="#contacto" className="text-white hover:text-blue-400 transition-colors cursor-pointer">
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
