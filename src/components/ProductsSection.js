import React from 'react';

const ProductsSection = () => {
  const productCategories = [
    {
      title: "Insumos Agrícolas",
      items: [
        "Fertilizantes y abonos orgánicos",
        "Semillas certificadas",
        "Agroquímicos y pesticidas",
        "Bioestimulantes"
      ]
    },
    {
      title: "Repuestos Maquinaria",
      items: [
        "Repuestos para tractores",
        "Filtros y lubricantes",
        "Correas y transmisiones",
        "Sistemas de riego"
      ]
    },
    {
      title: "Equipos Agrícolas",
      items: [
        "Motobombas y generadores",
        "Herramientas manuales",
        "Sistemas de riego por goteo",
        "Equipos de protección personal"
      ]
    }
  ];

  return (
    <section id="productos" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nuestros Productos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-700 p-4">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;