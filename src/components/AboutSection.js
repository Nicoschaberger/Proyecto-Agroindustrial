import React from 'react';

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="border-2 border-gray-300 rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">¿Quiénes Somos?</h2>
          <div className="space-y-10">
            {/* Nuestra Empresa */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">Nuestra Empresa</h3>
              <p className="text-gray-700">
                AgroRaf es una empresa líder en la distribución de insumos y repuestos agroindustriales, 
                con más de 15 años de experiencia apoyando al sector agrícola nacional. Nos especializamos 
                en proveer soluciones técnicas de alta calidad para mejorar la productividad del campo.
              </p>
            </div>
            
            {/* Nuestros Valores */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">Nuestros Valores</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Compromiso con la excelencia y calidad de nuestros productos</li>
                <li>Transparencia y honestidad en todas nuestras relaciones comerciales</li>
                <li>Innovación constante para ofrecer las mejores soluciones</li>
                <li>Respeto por el medio ambiente y desarrollo sostenible</li>
              </ul>
            </div>
            
            {/* Nuestra Visión */}
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-700 mb-4 border-b border-yellow-200 pb-2">Nuestra Visión</h3>
              <p className="text-gray-700">
                Ser reconocidos como el aliado estratégico preferido por los productores agroindustriales, 
                convirtiéndonos en sinónimo de confianza, calidad y servicio excepcional en el sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// DONE