import React, { useState, useEffect } from 'react';

// Header Component
export const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <div className="relative">
                  {/* Robot head */}
                  <div className="w-8 h-6 bg-gray-100 rounded-full border-2 border-gray-800"></div>
                  {/* Robot eyes */}
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  {/* Robot antenna */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-gray-800"></div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-blue-600">YUDA</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Servicios
              </button>
              {isServicesOpen && (
                <div
                  className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Armado</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Montaje</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mudanza</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Limpieza</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Ayuda Externa</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Reparaciones</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Pintura</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Populares</a>
                  </div>
                </div>
              )}
            </div>
            <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Iniciar Sesión
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Ser Asistente
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Servicios</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Iniciar Sesión</a>
              <a href="#" className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md">Ser Asistente</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    { name: 'Armado', icon: '🔧' },
    { name: 'Montaje', icon: '📺' },
    { name: 'Mudanza', icon: '📦' },
    { name: 'Limpieza', icon: '🧽' },
    { name: 'Ayuda Externa', icon: '🌿' },
    { name: 'Reparaciones', icon: '🔨' },
    { name: 'Pintura', icon: '🎨' },
    { name: 'Populares', icon: '🔥' }
  ];

  const featuredServices = [
    'Armado de Muebles en General',
    'Montaje de TV',
    'Armado de Cuna',
    'Armado de Escritorio',
    'Armado de Librero',
    'Armado de Cama'
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Reserva ayuda confiable
            <br />
            para tareas del hogar
          </h1>
          
          <div className="max-w-md mx-auto mt-8">
            <div className="flex rounded-md shadow-sm">
              <input
                type="text"
                className="flex-1 min-w-0 block w-full px-3 py-3 rounded-l-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Necesito a YUDA para..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="inline-flex items-center px-4 py-3 border border-l-0 border-blue-600 bg-blue-600 text-white text-sm font-medium rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-12 max-w-4xl mx-auto">
            {serviceCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-2xl mb-2">{category.icon}</div>
                <span className="text-xs text-gray-700 text-center">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Featured Services */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-4xl mx-auto">
            {featuredServices.map((service, index) => (
              <button key={index} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors">
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Assembly Feature Section
export const AssemblyFeature = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Armado</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Armar o desarmar muebles desempacando, construyendo y limpiando.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Tendencias actuales: Sofás curvos, escritorios de computadora y materiales sostenibles.
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <div className="font-semibold text-gray-900">Armado de Muebles:</div>
                <div>3.4 millones+</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Tareas de mudanza:</div>
                <div>1.5 millones+</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Objetos montados:</div>
                <div>1 millón+</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Reparaciones del hogar:</div>
                <div>700,000+</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Hogares limpiados:</div>
                <div>800,000+</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg" 
              alt="Profesional armando muebles"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Popular Projects Component
export const PopularProjects = () => {
  const projects = [
    {
      title: 'Armado de Muebles',
      price: '$35',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg'
    },
    {
      title: 'Montar Arte o Repisas',
      price: '$39',
      image: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg'
    },
    {
      title: 'Montar TV',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHx0diUyMG1vdW50aW5nfGVufDB8fHx8MTc0ODcwODEyN3ww&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Ayuda con Mudanza',
      price: '$67',
      image: 'https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg'
    },
    {
      title: 'Limpieza de Casa y Apartamento',
      price: '$36',
      image: 'https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg'
    },
    {
      title: 'Reparaciones Menores de Plomería',
      price: '$79',
      image: 'https://images.pexels.com/photos/8486923/pexels-photo-8486923.jpeg'
    },
    {
      title: 'Ayuda Eléctrica',
      price: '$89',
      image: 'https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg'
    },
    {
      title: 'Carga Pesada',
      price: '$67',
      image: 'https://images.pexels.com/photos/5705477/pexels-photo-5705477.jpeg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proyectos Populares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">Proyectos desde <span className="font-semibold">{project.price}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Modal Component
export const NewsletterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Suscripción al boletín:', email);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          type="button"
        >
          ✕
        </button>
        
        <div className="flex">
          <div className="w-1/3 bg-blue-600 rounded-l-lg">
            <img 
              src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg" 
              alt="Trabajador profesional"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          
          <div className="w-2/3 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">NUNCA TE PIERDAS UNA OFERTA</h3>
            <p className="text-gray-600 text-sm mb-6">
              Desde armado de muebles hasta reparaciones del hogar, te ayudamos con proyectos grandes y pequeños. Nos lo agradecerás después.
            </p>
            
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Suscribirse ahora
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              Al suscribirme, acepto recibir correos de YUDA sobre productos, servicios, promociones y eventos que pueden interesarme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Customer Reviews Component
export const CustomerReviews = () => {
  const reviews = [
    {
      name: 'Elizabeth P.',
      rating: 5,
      review: 'Vittal armó la configuración de habitación NORDLI de YUDA y debo decir que fue la experiencia más fluida. Todo se armó en pocas horas.',
      service: 'Armado de Muebles'
    },
    {
      name: 'Tiffany B.',
      rating: 5,
      review: 'David hizo un trabajo increíble montando repisas y limpió después de terminar. Se tomó su tiempo y dejó todo correctamente.',
      service: 'Armado de Muebles'
    },
    {
      name: 'Amanda L.',
      rating: 5,
      review: 'Contraté a Joe para tapar 2 agujeros en mi pared y uno en mi techo. Joe fue muy profesional e hizo un trabajo fantástico.',
      service: 'Reparaciones del hogar'
    },
    {
      name: 'Sabrina K.',
      rating: 5,
      review: 'Aleksander fue fantástico! Vino con todo el equipo para hacer el trabajo. Todo quedó montado de manera segura y eficiente.',
      service: 'Ayuda eléctrica'
    },
    {
      name: 'Jana T.',
      rating: 5,
      review: 'José arregló mi línea de drenaje de aire acondicionado que estaba obstruyendo la ducha de mi baño principal! Fue minucioso y eficiente.',
      service: 'Plomería'
    },
    {
      name: 'Elsa R.',
      rating: 5,
      review: 'Michael hizo un gran trabajo ayudándonos a instalar puertas de ducha con bisagras de vidrio para gabinetes de cocina.',
      service: 'Montaje General'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Mira lo que dicen nuestros clientes felices sobre YUDA
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="font-semibold text-gray-900">{review.name}</span>
                <div className="flex ml-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">{review.review}</p>
              <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {review.service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Trust Indicators Component
export const TrustIndicators = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-lg font-semibold text-gray-900 mr-2">Excelente</span>
            <div className="flex text-green-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">43,509 reseñas en</span>
            <span className="text-sm font-semibold text-gray-900 ml-1">Trustpilot</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-green-500 mb-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Garantía de Felicidad</h3>
            <p className="text-gray-600 text-sm">Si no estás satisfecho, trabajaremos para solucionarlo.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-green-500 mb-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Asistentes Verificados</h3>
            <p className="text-gray-600 text-sm">Todos los asistentes pasan verificación de antecedentes antes de unirse a la plataforma.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-green-500 mb-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Soporte Dedicado</h3>
            <p className="text-gray-600 text-sm">Servicio amigable cuando lo necesites - todos los días de la semana.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Component
export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Elige tu Asistente por precio, habilidades y reseñas.',
      icon: '🔍'
    },
    {
      number: 2,
      title: 'Programa un Asistente desde hoy mismo.',
      icon: '📅'
    },
    {
      number: 3,
      title: 'Conversa, paga, da propina y califica todo en un lugar.',
      icon: '💬'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg" 
              alt="Profesional trabajando"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo funciona</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    {step.number}
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Get Help Today Component
export const GetHelpToday = () => {
  const services = [
    'Montaje General', 'Montaje de TV', 'Armado de Muebles', 'Armado de Muebles',
    'Ayuda con Mudanza', 'Limpieza Menor', 'Trabajo Manual', 'Retiro de Muebles', 'Cuidado del Césped',
    'Colgar Cuadros', 'Mudanza de Muebles en Casa', 'Montaje de Repisas', 'Instalación de Luces', 'Plomería'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Obtén ayuda Hoy</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {services.map((service, index) => (
            <button 
              key={index}
              className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              {service}
            </button>
          ))}
        </div>
        
        <div className="text-center">
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Ver Todos los Servicios →
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">YUDA</h3>
            <p className="text-gray-400 text-sm">
              Obtén ayuda con tareas cotidianas de Asistentes confiables en tu área.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Descubre</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Ser Asistente</a></li>
              <li><a href="#" className="hover:text-white">Precios</a></li>
              <li><a href="#" className="hover:text-white">Empresas</a></li>
              <li><a href="#" className="hover:text-white">Acerca de</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-white">Contáctanos</a></li>
              <li><a href="#" className="hover:text-white">Confianza y Seguridad</a></li>
              <li><a href="#" className="hover:text-white">Términos de Servicio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 YUDA Inc. Todos los derechos reservados. | Política de Privacidad | Términos de Servicio
          </p>
        </div>
      </div>
    </footer>
  );
};