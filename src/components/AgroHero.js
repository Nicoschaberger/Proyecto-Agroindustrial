import React from 'react';

const AgroHero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="z-10 text-center px-4">
        <div className="border-4 border-black rounded-full p-2 inline-block mb-8 bg-white">
          <img 
            src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0k0yH6D7fYZlcpNaeLVjJvm95wniIQo8GFd7H" 
            alt="AgroRaf Logo" 
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
        <p className="text-xl md:text-2xl text-green-700 max-w-2xl mx-auto">
          Soluciones integrales para el campo y la agroindustria
        </p>
      </div>
    </section>
  );
};

export default AgroHero;