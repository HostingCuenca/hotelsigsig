
// pages/Tourism.tsx


import { 
    MapPin, 
    Thermometer, 
    Mountain, 
    Clock, 
    Calendar,
    ChevronRight,
    Info,
    Flag,
    Award,
    Music,
    Heart,
    Camera,
    Sun,
    Landmark,
    TreePine,
    DropletsIcon,
    UsersRound,
    Mail,
    Phone,
    Car,
    Scissors,
    Palmtree,
    Star
  } from 'lucide-react';
  
  const Tourism = () => {
    return (
      <div>
  

 {/* Hero Section Mejorado con Motion */}
 <section className="relative h-[90vh] flex items-center"> 
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000]/90 via-[#330000]/70 to-transparent z-10" />
          <img 
            src="https://www.turismo.gob.ec/wp-content/uploads/2020/11/KIK5550-3-scaled.jpg"
            alt="Sígsig Patrimonio Cultural"
            className="w-full h-full object-cover animate-kenburns"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 animate-fadeDown">
              <Award className="w-16 h-16 text-[var(--color-gold)] mb-4 mx-auto" />
            </div>
            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-6 animate-fadeDown delay-100">
              Sígsig: Patrimonio Cultural del Ecuador
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fadeDown delay-200">
              Un tesoro de historia, cultura y naturaleza donde cada rincón cuenta una historia 
              milenaria. Descubre el encanto de la tierra del sombrero de paja toquilla.
            </p>
            {/* <button className="metallic-gold text-white px-8 py-4 rounded-full flex items-center text-lg group hover:scale-105 transition-transform mx-auto animate-fadeUp delay-300">
              Explorar Destinos <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button> */}
          </div>
        </div>
      </section>

      {/* Información General - Flotante y Centrada */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-xl py-8">
          <div className="grid md:grid-cols-5 gap-6 px-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Ubicación</h3>
                <p className="text-sm text-gray-600">60 km de Cuenca</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Thermometer className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Temperatura</h3>
                <p className="text-sm text-gray-600">15°C promedio</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mountain className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Altitud</h3>
                <p className="text-sm text-gray-600">2.498 m.s.n.m.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Car className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Acceso</h3>
                <p className="text-sm text-gray-600">Vía Cuenca-Gualaceo</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Mejor época</h3>
                <p className="text-sm text-gray-600">Todo el año</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  
        {/* Datos Generales */}
        {/* <section className="py-12 bg-white relative z-20 -mt-20">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-[var(--color-gold)]" />
                  <div>
                    <h3 className="font-medium mb-1">Ubicación</h3>
                    <p className="text-sm text-gray-600">60 km al sureste de Cuenca</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Thermometer className="w-8 h-8 text-[var(--color-gold)]" />
                  <div>
                    <h3 className="font-medium mb-1">Temperatura</h3>
                    <p className="text-sm text-gray-600">Promedio 15°C</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mountain className="w-8 h-8 text-[var(--color-gold)]" />
                  <div>
                    <h3 className="font-medium mb-1">Altitud</h3>
                    <p className="text-sm text-gray-600">2.498 m.s.n.m.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Flag className="w-8 h-8 text-[var(--color-gold)]" />
                  <div>
                    <h3 className="font-medium mb-1">Extensión</h3>
                    <p className="text-sm text-gray-600">648 km²</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
  

  <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
            Puntos de Interés Turístico
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Descubre los lugares más emblemáticos de Sígsig, cada uno con su propia historia y encanto único.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Playas de Zhingate",
                image: "https://guadalupitablog.wordpress.com/wp-content/uploads/2017/02/sigsig-playa-de-zhingate-2.gif",
                description: "Hermosas playas ribereñas junto al río Santa Bárbara, perfectas para un día de picnic y recreación familiar.",
                location: "Río Santa Bárbara",
                bestTime: "Todo el año",
                duration: "3-4 horas",
                icon: <Palmtree className="w-6 h-6" />
              },
              {
                title: "Laguna de Kingor",
                image: "https://visitazuay.com/wp-content/uploads/2024/12/LAGUNA-DE-KINGOR-1024x682.jpg",
                description: "Espejo de agua natural rodeado de páramo andino, ideal para caminatas, paseo en canoa y fotografía paisajística.",
                location: "Páramo de Sigsig",
                bestTime: "Mayo a Noviembre",
                duration: "Full día",
                icon: <Mountain className="w-6 h-6" />
              },
              {
                title: "Artesanías en Paja Toquilla",
                image: "https://visitazuay.com/wp-content/uploads/2018/07/SIGSIG-SOMBRERERAS--1024x1024.jpg",
                description: "Centro artesanal donde podrás observar y aprender sobre la elaboración del famoso sombrero de paja toquilla.",
                location: "Centro de Sigsig",
                bestTime: "Lunes a Sábado",
                duration: "2-3 horas",
                icon: <Scissors className="w-6 h-6" />
              },
              {
                title: "Centro Histórico",
                image: "https://ame.gob.ec/wp-content/uploads/2017/04/sigsig.jpg",
                description: "Recorrido por las calles coloniales y principales atractivos arquitectónicos de la ciudad.",
                location: "Sigsig",
                bestTime: "Todo el año",
                duration: "2 horas",
                icon: <Landmark className="w-6 h-6" />
              }
            ].map((punto, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src={punto.image}
                    alt={punto.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <div className="text-[var(--color-gold)]">
                      {punto.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
                    {punto.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{punto.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 text-[var(--color-gold)] mr-2" />
                      {punto.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 text-[var(--color-gold)] mr-2" />
                      {punto.bestTime}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 text-[var(--color-gold)] mr-2" />
                      {punto.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


        {/* Historia y Patrimonio */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                  Historia y Patrimonio
                </h2>
                <p className="text-gray-600 mb-6">
                  Sígsig, cuyo nombre proviene de la palabra cañari "Sidsid" que significa "origen", 
                  es un testigo vivo de la historia ecuatoriana. Con evidencias de ocupación humana 
                  que datan del período Paleoindio (10.000 años A.C.), la Cueva Negra de Chobshi 
                  alberga algunos de los hallazgos más importantes de la región.
                </p>
                <p className="text-gray-600 mb-6">
                  En 2002, el centro urbano fue declarado Patrimonio Cultural de la Nación, 
                  reconociendo su invaluable aporte a la identidad ecuatoriana.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Landmark className="w-6 h-6 text-[var(--color-gold)]" />
                    <div>
                      <h4 className="font-medium mb-1">Sitios Arqueológicos</h4>
                      <p className="text-sm text-gray-600">Cueva Negra y Shabalula</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Music className="w-6 h-6 text-[var(--color-gold)]" />
                    <div>
                      <h4 className="font-medium mb-1">Artesanías</h4>
                      <p className="text-sm text-gray-600">Paja toquilla y guitarras</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://visitazuay.com/wp-content/uploads/2018/07/SIGSIG-SOMBRERERAS--1024x1024.jpg"
                  alt="Artesanas de Sígsig"
                  className="rounded-xl shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 -left-4 -top-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Parroquias */}
        <section className="py-20 bg-[var(--color-wine-dark)]/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
              Nuestras Parroquias
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Cada parroquia del cantón Sígsig tiene su propia identidad y atractivos únicos, 
              contribuyendo a la rica diversidad cultural y natural de la región.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Cuchil",
                  image: "https://gpcuchil.gob.ec/azuay/wp-content/uploads/2020/03/122417838.jpg",
                  description: "Pintoresca parroquia que cubre una extensión de 140km², destacada por su belleza natural y tradiciones.",
                  highlights: ["Artesanías tradicionales", "Paisajes montañosos", "Gastronomía típica"]
                },
                {
                  name: "Güel",
                  image: "https://guel.gob.ec/azuay/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-21-at-14.34.30.jpeg",
                  description: "Ubicada al pie del legendario cerro Fasayñán, esta bella parroquia conserva tradiciones ancestrales.",
                  highlights: ["Cerro Fasayñán", "Agricultura tradicional", "Fiestas populares"]
                },
                {
                  name: "San Bartolomé",
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Parroquia_San_Bartolom%C3%A9_%28S%C3%ADgsig%29.jpg/1280px-Parroquia_San_Bartolom%C3%A9_%28S%C3%ADgsig%29.jpg",
                  description: "Reconocida por su excepcional ebanistería y la fabricación de guitarras artesanales.",
                  highlights: ["Guitarras artesanales", "Iglesia histórica", "Artesanías en madera"]
                },
                {
                  name: "Jima",
                  image: "https://live.staticflickr.com/65535/53139973599_b0099d2901_b.jpg",
                  description: "Parroquia rica en tradiciones y cultura, con impresionantes paisajes naturales.",
                  highlights: ["Producción agrícola", "Festividades religiosas", "Turismo rural"]
                },
                {
                  name: "Ludo",
                  image: "https://www.azuay.gob.ec/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-24-at-4.36.53-PM-1.jpeg",
                  description: "Situada al suroeste del centro cantonal, destaca por su riqueza cultural y natural.",
                  highlights: ["Sitios arqueológicos", "Artesanías locales", "Gastronomía tradicional"]
                },
                {
                  name: "San José de Raranga",
                  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQdc-7yEK8hVjWz6xZod7UVrrHx4nmkewv7ldwYMhcURptoy-PN6J1QAXtX3JLmDig0eUG84L0-CtYOQWjrhnv5mvQJm9GS3VmhbXaTfSq0-TccX1D_PJUqGWQg4nZFqr4ljsFhHlOI6M/s1600/centro+his+de+sig.JPG",
                  description: "Caracterizada por su naturaleza única y abundantes lluvias que enriquecen su paisaje.",
                  highlights: ["Tejidos artesanales", "Paisajes verdes", "Tradiciones locales"]
                }
              ].map((parroquia, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    <img 
                      src={parroquia.image}
                      alt={parroquia.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-2xl font-['Playfair_Display'] text-white">
                      {parroquia.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{parroquia.description}</p>
                    <ul className="space-y-2">
                      {parroquia.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Heart className="w-4 h-4 text-[var(--color-gold)] mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Atractivos Naturales */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
              Belleza Natural
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Sígsig es hogar de impresionantes paisajes naturales, desde míticas lagunas 
              hasta majestuosos cerros que invitan a la aventura y contemplación.
            </p>
  
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cerros Emblemáticos",
                  icon: <Mountain className="w-12 h-12" />,
                  description: "Fasayñán, Santa Bárbara y Hualil",
                  features: [
                    "Rutas de senderismo",
                    "Vistas panorámicas",
                    "Flora y fauna única"
                  ]
                },
                {
                  title: "Lagunas Místicas",
                  icon: <DropletsIcon className="w-12 h-12" />,
                  description: "Kingor, Santa Bárbara, Santo Domingo",
                  features: [
                    "Paisajes impresionantes",
                    "Leyendas locales",
                    "Pesca deportiva"
                  ]
                },
                {
                  title: "Playas de Río",
                  icon: <TreePine className="w-12 h-12" />,
                  description: "Playa de Zhingate en el río Santa Bárbara",
                  features: [
                    "Arena fina",
                    "Áreas recreativas",
                    "Deportes acuáticos"
                  ]
                }
              ].map((atractivo, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                  <div className="text-[var(--color-gold)] mb-4 flex justify-center">
                    {atractivo.icon}
                  </div>
                  <h3 className="text-xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
                    {atractivo.title}
                  </h3>
                  <p className="text-[var(--color-gold)] font-medium mb-4">
                    {atractivo.description}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    {atractivo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <Heart className="w-4 h-4 text-[var(--color-gold)] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        
        <section className="py-20 bg-[var(--color-wine-dark)]/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                Instalaciones Deportivas
              </h2>
              <p className="text-gray-600 mb-6">
                Ubicados estratégicamente cerca del Coliseo Deportivo de Sígsig, ofrecemos 
                la mejor opción de alojamiento para deportistas y aficionados que participan 
                en eventos deportivos locales y regionales.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <UsersRound className="w-6 h-6 text-[var(--color-gold)]" />
                  <div>
                    <h4 className="font-medium mb-1">Coliseo Deportivo</h4>
                    <p className="text-sm text-gray-600">A 5 minutos caminando</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-[var(--color-gold)]" />
                  <div>
                    <h4 className="font-medium mb-1">Eventos Deportivos</h4>
                    <p className="text-sm text-gray-600">Todo el año</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://pbs.twimg.com/media/FaC_nWEXkAAB4AM?format=jpg&name=large"
                alt="Coliseo Deportivo Sígsig"
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 -left-4 -top-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendario de Eventos Culturales */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
            Calendario de Eventos Culturales
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Descubre las festividades y eventos que mantienen viva nuestra cultura 
            y tradiciones a lo largo del año.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                month: "Abril",
                event: "Fiestas de Cantonización",
                description: "Celebración con eventos culturales, deportivos y artísticos.",
                date: "16 de Abril"
              },
              {
                month: "Mayo",
                event: "Fiesta de María Auxiliadora",
                description: "Celebraciones religiosas y culturales en honor a la patrona.",
                date: "24 de Mayo"
              },
              {
                month: "Julio",
                event: "Festival del Sombrero",
                description: "Exposición y venta de sombreros de paja toquilla.",
                date: "Todo el mes"
              },
              {
                month: "Agosto",
                event: "Feria Artesanal",
                description: "Muestra de artesanías locales y gastronomía típica.",
                date: "Primera semana"
              },
              {
                month: "Septiembre",
                event: "Festival Gastronómico",
                description: "Degustación de platos típicos y concursos culinarios.",
                date: "15-17 de Septiembre"
              },
              {
                month: "Diciembre",
                event: "Pase del Niño",
                description: "Tradicional celebración navideña con desfiles y música.",
                date: "24 de Diciembre"
              }
            ].map((evento, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--color-gold)]">
                <span className="text-[var(--color-gold)] font-bold text-lg mb-2 block">
                  {evento.month}
                </span>
                <h3 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] text-lg mb-2">
                  {evento.event}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{evento.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {evento.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

{/* <section className="py-20 bg-[var(--color-wine-dark)]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
            Calendario de Eventos Culturales
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Vive nuestras tradiciones y festividades durante todo el año.
          </p>
          <div className="flex overflow-x-auto pb-6 gap-6">
            {[
              {
                month: "Abril",
                event: "Fiestas de Cantonización",
                date: "16 de Abril"
              },
              {
                month: "Mayo",
                event: "Fiesta de María Auxiliadora",
                date: "24 de Mayo"
              },
              {
                month: "Julio",
                event: "Festival del Sombrero",
                date: "Todo el mes"
              },
              {
                month: "Agosto",
                event: "Feria Artesanal",
                date: "Primera semana"
              },
              {
                month: "Septiembre",
                event: "Festival Gastronómico",
                date: "15-17"
              },
              {
                month: "Diciembre",
                event: "Pase del Niño",
                date: "24"
              }
            ].map((evento, index) => (
              <div key={index} className="flex-none w-80 bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--color-gold)] hover:shadow-xl transition-all duration-300">
                <span className="text-[var(--color-gold)] font-bold text-lg mb-2 block">
                  {evento.month}
                </span>
                <h3 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] text-lg mb-4">
                  {evento.event}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2 text-[var(--color-gold)]" />
                  {evento.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


{/* Calendario de Eventos Culturales */}
{/* Calendario de Eventos Culturales */}
{/* Calendario de Eventos Culturales */}
{/* Calendario de Eventos Culturales */}
<section className="py-20 bg-[var(--color-cream)] overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
            Calendario de Eventos Culturales
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Vive nuestras tradiciones y festividades durante todo el año.
          </p>
          
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-cream)] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-cream)] to-transparent z-10"></div>

            {/* Carrusel */}
            <div className="overflow-hidden">
              <div className="flex gap-6 carousel-scroll py-4">
                {[...Array(2)].map((_, iteration) => {
                  const eventos = [
                    {
                      month: "Abril",
                      event: "Fiestas de Cantonización",
                      date: "16 de Abril",
                      description: "Celebración principal con eventos culturales, deportivos y artísticos. Desfiles tradicionales, presentaciones musicales y danzas folclóricas que muestran la riqueza cultural de Sígsig.",
                      image: "https://www.turismo.gob.ec/wp-content/uploads/2020/11/KIK5550-3-scaled.jpg"
                    },
                    {
                      month: "Mayo",
                      event: "Fiesta de María Auxiliadora",
                      date: "24 de Mayo",
                      description: "Celebración religiosa con procesiones, novenas y eventos culturales. Participación activa de la comunidad en una demostración de fe y tradición que une a todo el cantón.",
                      image: "https://visitazuay.com/wp-content/uploads/2018/07/SIGSIG-SOMBRERERAS--1024x1024.jpg"
                    },
                    {
                      month: "Julio",
                      event: "Festival del Sombrero",
                      date: "Todo el mes",
                      description: "Exhibición y venta de sombreros de paja toquilla, Patrimonio Cultural de la Humanidad. Demostraciones en vivo del proceso de tejido y concursos de artesanos locales.",
                      image: "https://ladydeelg.com/wp/wp-content/uploads/2014/08/AR-PN-ANDES-CUENCA-SIGSIG-ARTESANÍAS-SOMBREROS-006.jpg"
                    },
                    {
                      month: "Agosto",
                      event: "Feria Artesanal",
                      date: "Primera semana",
                      description: "Exhibición de artesanías locales incluyendo sombreros, instrumentos musicales y textiles. Talleres demostrativos y venta directa de productos elaborados por artesanos sigseños.",
                      image: "https://ame.gob.ec/wp-content/uploads/2022/03/SOMBRERO_1.jpg"
                    },
                    {
                      month: "Septiembre",
                      event: "Festival Gastronómico",
                      date: "15-17",
                      description: "Muestra de la gastronomía tradicional con degustaciones y concursos. Preparación de platos típicos, dulces tradicionales y bebidas ancestrales que destacan los sabores locales.",
                      image: "https://img.goraymi.com/2018/05/21/3709c2ca55d562a10b0f0eda333a771f_xl.jpg"
                    },
                    {
                      month: "Diciembre",
                      event: "Pase del Niño",
                      date: "24",
                      description: "Tradicional celebración navideña con procesiones y música. Participación de la comunidad en coloridos desfiles que incluyen trajes típicos, bandas de pueblo y representaciones bíblicas.",
                      image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Foto_pase_del_ni%C3%B1o.jpg"
                    }
                  ];

                  return eventos.map((evento, index) => (
                    <div 
                      key={`${iteration}-${index}`}
                      className="flex-none w-[300px] transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <div className="bg-white rounded-xl overflow-hidden group-hover:bg-[var(--color-wine-dark)] group-hover:ring-2 ring-[var(--color-gold)] transition-all duration-300 shadow-lg h-[400px] flex flex-col">
                        <div className="relative h-48 flex-shrink-0">
                          <img 
                            src={evento.image}
                            alt={evento.event}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <span className="text-[var(--color-gold)] font-bold text-lg block">
                              {evento.month}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] text-lg mb-2 group-hover:text-white transition-colors">
                            {evento.event}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 mb-4 group-hover:text-white/70 transition-colors">
                            <Calendar className="w-4 h-4 mr-2 text-[var(--color-gold)]" />
                            {evento.date}
                          </div>
                          <p className="text-gray-600 text-sm line-clamp-3 group-hover:text-white/80 transition-colors flex-grow">
                            {evento.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ));
                })}
              </div>
            </div>

            {/* Indicadores de navegación */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-12 h-1 bg-[var(--color-gold)] rounded-full opacity-50"></div>
              <div className="w-12 h-1 bg-[var(--color-gold)] rounded-full opacity-50"></div>
              <div className="w-12 h-1 bg-[var(--color-gold)] rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Llamada a la acción */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              No te pierdas ninguno de nuestros eventos culturales. 
              ¡Planifica tu visita y vive la experiencia Sígsig!
            </p>
            <button className="metallic-gold text-white px-8 py-3 rounded-full inline-flex items-center hover:scale-105 transition-transform">
              Ver Calendario Completo <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>




      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
              <h3 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
                Oficina de Turismo
              </h3>
              <p className="text-gray-600">Centro de Sígsig</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
              <h3 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
                Teléfono
              </h3>
              <p className="text-gray-600">+593 99 793 0366</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4" />
              <h3 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
                Email
              </h3>
              <p className="text-gray-600">hotelsigsig@gmail.com</p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Final Mejorado */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000]/90 to-[#330000]/90 z-10" />
          <img 
            src="https://www.turismo.gob.ec/wp-content/uploads/2020/11/KIK5550-3-scaled.jpg"
            alt="Sígsig"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h2 className="text-4xl font-['Playfair_Display'] text-white mb-6">
            Vive la Experiencia Sígsig
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Hospédate en Hotel Sígsig y descubre todo lo que nuestra tierra tiene para ofrecer. 
            Ubicación privilegiada, comfort y la mejor atención te esperan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="metallic-gold text-white px-8 py-4 rounded-full flex items-center group hover:scale-105 transition-transform">
              Reservar Ahora <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-4 rounded-full flex items-center hover:bg-[var(--color-gold)] hover:text-white transition-colors">
              Contáctanos <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>



      {/* Información de Contacto */}
   
    </div>
  );
};

export default Tourism;