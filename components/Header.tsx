
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
              <a href="https://flowdexia.com/"><img src="/logo.png" className="ri-robot-line text-white text-xl"></img></a>
            </div>
            {/* <a href="http://localhost:3000/"><span className="text-2xl font-bold text-sky-600 font-pacifico">Flow</span><span className="text-2xl font-bold text-white font-pacifico">deX</span></a> */}
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Nosotros
            </button>

            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              Contacto
            </button>
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
            <a href="https://wa.me/+351937158208" role="button">
              <span className="[&>svg]:h-12 [&>svg]:w-12 [&>svg]:fill-[#25D366]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" /></svg>
              </span>
            </a>
            <a href="https://www.instagram.com/flowdexia" role="button">
              <span className="[&>svg]:h-9 [&>svg]:w-9 [&>svg]:fill-[#c13584]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>

            <a href="mailto:contacto@flowdexia.com" role="button">
              <span className="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:fill-[#60a5fa]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" /></svg>
              </span>
            </a>

            <a href="https://www.facebook.com/flowdexia" role="button">
              <span className="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:fill-[#60a5fa]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" /></svg>
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
