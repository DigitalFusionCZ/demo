'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Set page title
    document.title = "VŠE PRO STAVBY.CZ";

    // Generate and set favicon
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#2563eb" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconUrl;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 tracking-wide">
            VŠE PRO STAVBY.CZ
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Služby</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">O nás</a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Galerie</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Kontakt</a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg pb-4">
            <nav className="flex flex-col items-center space-y-3">
              <a href="#services" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 font-medium py-2">Služby</a>
              <a href="#about" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 font-medium py-2">O nás</a>
              <a href="#gallery" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 font-medium py-2">Galerie</a>
              <a href="#contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 font-medium py-2">Kontakt</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-20 md:py-32 overflow-hidden">
        <Image
          src="/images/gallery-tanvald-project-wide.jpg"
          alt="Moderní budova"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 opacity-40"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            VŠE PRO STAVBY.CZ
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Váš spolehlivý partner pro komplexní stavební řešení
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 hover:bg-blue-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Získat nabídku
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Naše Služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v10m-6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">Zemní práce a inženýrské sítě</h3>
              <p className="text-gray-600 text-center">Realizujeme veškeré zemní práce, výkopy, základy a přípravu pro inženýrské sítě.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10l2 2m0 0h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2zm0 0V5a2 2 0 012-2h2m4 0h2m-6 0h.01M16 19h.01M6 12h1M10 12h1M14 12h1M18 12h1"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">Výstavba rodinných domů</h3>
              <p className="text-gray-600 text-center">Zajišťujeme kompletní výstavbu rodinných domů na klíč dle Vašich představ.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M6 10h.01M10 10h.01M14 10h.01M18 10h.01M12 4v7m-4 0h8m-11 3h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">Rekonstrukce a přístavby</h3>
              <p className="text-gray-600 text-center">Provádíme rekonstrukce stávajících objektů a realizujeme přístavby.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m-4-2h8m-4-10v.01M12 12v.01"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">Opěrné zdi a ploty</h3>
              <p className="text-gray-600 text-center">Specializujeme se na výstavbu opěrných zdí a různých typů oplocení.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">Demolice a ostatní práce</h3>
              <p className="text-gray-600 text-center">Zajišťujeme demolice objektů a další specifické stavební práce.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">Zateplování fasád</h3>
              <p className="text-gray-600 text-center">Aplikujeme efektivní zateplovací systémy pro snížení energetické náročnosti budov.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Derived from original site's 'O nás' and 'Naše práce' combined for brevity */}
      <section id="about" className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">O Nás a Naše Hodnoty</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto">
            Jsme VŠE PRO STAVBY.CZ, firma zabývající se kompletními stavebními pracemi.
            Zaměřujeme se na kvalitu, spolehlivost a individuální přístup ke každému klientovi.
            Naším cílem je přetvářet Vaše vize v realitu.
          </p>
          <p className="text-md md:text-lg opacity-90 max-w-3xl mx-auto">
            S dlouholetými zkušenostmi v oboru realizujeme projekty od základů až po finální úpravy 
            s důrazem na preciznost a spokojenost zákazníka.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Naše Práce v Obrazech</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/gallery-tanvald-project-wide.jpg"
                alt="Projekt Tanvald - široký záběr"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <p className="text-white text-lg font-semibold">Projekt Tanvald</p>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/content-residential-house-exterior.jpg"
                alt="Rodinný dům - exteriér"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <p className="text-white text-lg font-semibold">Exteriér rodinného domu</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            Další projekty na vyžádání.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Kontaktujte Nás</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Email</h3>
              <p className="text-lg">info@vseprostavby.cz</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Telefon</h3>
              <p className="text-lg">+420 777 000 000</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Adresa</h3>
              <p className="text-lg">Příjezdová 123, 468 41 Tanvald</p>
            </div>
          </div>
          <p className="text-lg mt-12 mb-4">
            Máte zájem o spolupráci nebo otázku? Napište nám nebo zavolejte.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} VŠE PRO STAVBY.CZ. Všechna práva vyhrazena.
          <p className="mt-2">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300 transition-colors duration-300">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
}