import React from 'react';

const AgroFooter = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="border-2 border-white rounded-full p-1 inline-block">
              <img 
                src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0k0yH6D7fYZlcpNaeLVjJvm95wniIQo8GFd7H" 
                alt="AgroRaf Logo" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <p className="text-green-100 mt-4">
              Soluciones integrales para el campo y la agroindustria
            </p>
          </div>
          
          {/* Resto del footer permanece igual */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Av. Agroindustrial 1234, Zona Industrial
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 234 567 890
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                agrorafml@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <ul className="space-y-2">
              <li>Lunes a Viernes: 8:00 - 18:00</li>
              <li>Sábados: 9:00 - 13:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-200">
          <p>© {new Date().getFullYear()} AgroRaf. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default AgroFooter;

// DONE