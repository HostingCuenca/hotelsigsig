
// pages/Home.tsx
import { 
  BedDouble, 
  Users, 
  ChevronRight,
  Landmark,
  Music,
  Gift,
  Camera,
  Star,
  Heart,
  Wifi,
  Tv,
  Clock,
  ShowerHead,
  Mountain,
  Shield,
  MapPin,
  Phone,
  MessageSquare,
  Home as HomeIcon,
  Award,
  Hotel,
  Utensils
} from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Header/Banner Principal - Mantenido según lo solicitado */}
      <header className="relative h-screen overflow-hidden">
        {/* Overlay de textura cultural andina */}
        <div className="absolute inset-0 z-10 andean-texture opacity-15"></div>
        
        {/* Background con overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#350a06] via-[#350a06]/70 to-[#350a06] z-10" />
          <img
            src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740624685/hotelsigsig/urzzpfdiqmr9uikp3y6n.png"
            alt="Hotel Sigsig - Alojamiento de lujo en Sígsig, Ecuador"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Contenedor principal con mejor distribución */}
        <div className="relative z-20 h-full container mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col md:flex-row md:items-center">
          {/* Contenido a la izquierda - textos ajustados para mejor lectura */}
          <div className="md:w-3/5 flex flex-col justify-center md:pr-8 lg:pr-12 py-8 md:py-0 mt-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] mb-4 md:mb-6">
              <span className="text-[var(--color-gold)] drop-shadow-lg">Hotel Sígsig</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white mb-6 md:mb-8 font-light leading-relaxed">
              Descubra el lujo andino en el corazón cultural de Sígsig, donde la tradición ecuatoriana se une con el confort moderno
            </p>
            
            {/* Datos clave del hotel */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex items-center bg-[var(--color-wine-dark)]/60 backdrop-blur-sm px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-[var(--color-gold)] mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/90 text-sm">Centro histórico, Sígsig</span>
              </div>
              <div className="flex items-center bg-[var(--color-wine-dark)]/60 backdrop-blur-sm px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-[var(--color-gold)] mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="text-white/90 text-sm">A 1 cuadra del terminal terrestre</span>
              </div>
              <div className="flex items-center bg-[var(--color-wine-dark)]/60 backdrop-blur-sm px-3 py-1 rounded-full">
                <svg className="w-4 h-4 text-[var(--color-gold)] mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                <span className="text-white/90 text-sm">+593 99 793 0366</span>
              </div>
            </div>
            
            {/* Botones CTA */}
            <div className="flex flex-wrap gap-3 md:gap-4 w-full max-w-xl mb-6">
              <a 
                href="tel:+593997930366" 
                className="metallic-gold text-white px-6 py-2 rounded-full flex items-center justify-center text-base md:text-lg hover:scale-105 transition-all duration-300"
                aria-label="Llamar al Hotel Sigsig"
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                Llamar Ahora
              </a>
              <a
                href="https://wa.me/593997930366"
                className="bg-[var(--color-wine)] text-white px-6 py-2 rounded-full flex items-center justify-center text-base md:text-lg hover:scale-105 transition-all duration-300 border border-[var(--color-gold)]/20"
                aria-label="Contactar por WhatsApp al Hotel Sigsig"
              >
                <svg className="w-5 h-5 mr-2 text-[var(--color-gold)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.944 1.164-.177.199-.349.223-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escríbenos
              </a>
              <a 
                href="https://www.google.com.ec/maps/place/Hotel+S%C3%ADgsig/@-3.0454147,-78.7944077,19.46z" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[var(--color-wine-dark)]/60 backdrop-blur-sm text-white border border-[var(--color-gold)]/20 px-6 py-3 rounded-full flex items-center justify-center text-base md:text-lg hover:bg-[var(--color-wine-dark)]/80 transition-all duration-300"
                aria-label="Ver ubicación del Hotel Sigsig en Google Maps"
              >
                <svg className="w-5 h-5 mr-2 text-[var(--color-gold)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zm7-4v16m8-12v16"></path>
                </svg>
                Ver en Mapa
              </a>
            </div>
            
            {/* Elemento decorativo */}
            <div className="hidden md:block relative mt-2">
              <div className="w-32 h-0.5 bg-gradient-to-r from-[var(--color-gold)] to-transparent"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--color-gold)] to-transparent mt-1.5"></div>
            </div>
          </div>
          
          {/* Galería de imágenes a la derecha - Con spacing optimizado */}
          <div className="hidden md:block md:w-2/5 self-center">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {/* Imagen 1 - Habitación Matrimonial */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 border-2 border-[var(--color-gold)]">
                <div className="relative w-full h-full group">
                  <img
                    src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/mygo5tqobos3xx6ffhfy.jpg"
                    alt="Habitación Matrimonial - Hotel Sigsig"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#350a06] via-[#350a06]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-sm font-medium">Habitación Matrimonial</span>
                  </div>
                </div>
              </div>
              
              {/* Imagen 2 - Habitación Doble */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 border-2 border-[var(--color-gold)]">
                <div className="relative w-full h-full group">
                  <img
                    src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740704242/hotelsigsig/z106xypglndckyljdkqb.jpg"
                    alt="Habitación Doble - Hotel Sigsig"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#350a06] via-[#350a06]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-sm font-medium">Habitación Doble</span>
                  </div>
                </div>
              </div>
              
              {/* Imagen 3 - Centro Histórico */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 border-2 border-[var(--color-gold)]">
                <div className="relative w-full h-full group">
                  <img
                    src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625092/hotelsigsig/a1ojmq64f7ekgiw5upfo.jpg"
                    alt="Habitación en Hotel Sígsig"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#350a06] via-[#350a06]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-sm font-medium">Centro Histórico</span>
                  </div>
                </div>
              </div>
              
              {/* Imagen 4 - Artesanías */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 border-2 border-[var(--color-gold)]">
                <div className="relative w-full h-full group">
                  <img
                    src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/edwxjyudnc2mpfohbvoq.jpg"
                    alt="Centro de Sígsig"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#350a06] via-[#350a06]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-sm font-medium">Artesanías Locales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Galería para móviles - Versión horizontal */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 overflow-x-auto pb-6">
          <div className="flex gap-3 px-4 min-w-max">
            {[
              {
                src: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/mygo5tqobos3xx6ffhfy.jpg",
                alt: "Habitación Matrimonial - Hotel Sigsig",
                label: "Habitación Matrimonial"
              },
              {
                src: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740704242/hotelsigsig/z106xypglndckyljdkqb.jpg",
                alt: "Habitación Doble - Hotel Sigsig",
                label: "Habitación Doble"
              },
              {
                src: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625092/hotelsigsig/a1ojmq64f7ekgiw5upfo.jpg",
                alt: "Centro Histórico de Sígsig",
                label: "Centro Histórico"
              },
              {
                src: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/edwxjyudnc2mpfohbvoq.jpg",
                alt: "Artesanías Locales de Sígsig",
                label: "Artesanías Locales"
              }
            ].map((image, index) => (
              <div 
                key={index}
                className="h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden shadow-lg border border-[var(--color-gold)]/10"
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#350a06] to-transparent opacity-70 flex items-end justify-center p-1">
                    <span className="text-white text-xs text-center">{image.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-bounce hidden md:flex flex-col items-center">
          <span className="text-white text-sm mb-2">Descubre más</span>
          <svg className="w-6 h-6 text-[var(--color-gold)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </header>

      {/* Nueva sección - Sobre Nosotros */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740705748/hotelsigsig/eozjo9vv6c4e6rzsbcai.jpg" 
                alt="Fachada del Hotel Sigsig" 
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
              <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-block mb-2">
                <div className="w-20 h-0.5 bg-[var(--color-gold)]"></div>
                <div className="w-12 h-0.5 bg-[var(--color-gold)] mt-1"></div>
              </div>
              <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                Bienvenidos al Hotel Sigsig
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ubicado en el corazón del centro histórico de Sígsig, nuestro hotel ofrece una experiencia auténtica 
                ecuatoriana combinada con todas las comodidades modernas que necesita para una estancia placentera.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Con habitaciones cuidadosamente diseñadas, atención personalizada y una ubicación privilegiada a solo 
                una cuadra del terminal terrestre, somos su mejor opción para explorar la riqueza cultural y natural 
                de esta hermosa región.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <HomeIcon className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                      Fundado en 2010
                    </h4>
                    <p className="text-sm text-gray-600">
                      Más de una década de excelencia
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                      Ubicación Central
                    </h4>
                    <p className="text-sm text-gray-600">
                      Acceso a todas las atracciones
                    </p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/593997930366" 
                className="inline-block metallic-gold text-white px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300 flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Reserva Directa
              </a>
            </div>
          </div>
        </div>
      </section> */}


<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740705748/hotelsigsig/eozjo9vv6c4e6rzsbcai.jpg"
          alt="Fachada del Hotel Sigsig"
          className="w-full h-auto rounded-xl shadow-xl object-cover"
        />
        <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
        
        {/* Insignia añadida */}
        <div className="absolute top-4 right-4 bg-[var(--color-wine-dark)] text-white px-4 py-2 rounded-lg shadow-md">
          <span className="text-sm font-medium">Calificación 4.9/5</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="inline-block mb-2">
          <div className="w-20 h-0.5 bg-[var(--color-gold)]"></div>
          <div className="w-12 h-0.5 bg-[var(--color-gold)] mt-1"></div>
        </div>
        <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
          Bienvenidos al Hotel Sígsig
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ubicado a tan solo una cuadra del terminal terrestre de Sígsig, nuestro hotel ofrece una experiencia auténtica
          ecuatoriana combinada con todas las comodidades modernas que necesita para una estancia placentera.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Con habitaciones cuidadosamente diseñadas y atención personalizada, nuestra ubicación privilegiada 
          a solo una cuadra del terminal terrestre de Sígsig le ofrece una accesibilidad incomparable. 
          Llegue sin complicaciones y disfrute de la tranquilidad de estar cerca de todos los servicios de transporte 
          para explorar la riqueza cultural y natural de esta hermosa región.
        </p>
        
        {/* Párrafos adicionales */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Nuestro compromiso con la hospitalidad se refleja en cada detalle, desde el amanecer cuando disfrutará 
          de un desayuno tradicional con productos locales frescos, hasta el atardecer cuando podrá relajarse en 
          nuestra terraza con vistas panorámicas a las montañas que rodean Sígsig.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Hotel Sígsig es más que un lugar para hospedarse; somos parte de la comunidad local y nos enorgullece 
          compartir con nuestros huéspedes las tradiciones, la cultura y la calidez del pueblo sigseño, reconocido 
          por su artesanía en paja toquilla y su rica herencia patrimonial.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="flex items-start space-x-3">
            <HomeIcon className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
            <div>
              <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                Amplia Trayectoria
              </h4>
              <p className="text-sm text-gray-600">
                Más de una década de excelencia
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
            <div>
              <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                Ubicación Estratégica
              </h4>
              <p className="text-sm text-gray-600">
                A una cuadra del terminal, cerca de todo
              </p>
            </div>
          </div>
          
          {/* Elementos adicionales */}
          <div className="flex items-start space-x-3 mt-4">
            <Utensils className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
            <div>
              <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                Gastronomía Local
              </h4>
              <p className="text-sm text-gray-600">
                Sabores auténticos de la región
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 mt-4">
            <Wifi className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
            <div>
              <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                Conectividad Total
              </h4>
              <p className="text-sm text-gray-600">
                WiFi gratuito de alta velocidad
              </p>
            </div>
          </div>
        </div>
        
        {/* Caja de información destacada */}
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[var(--color-gold)] mt-6">
          <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
            Experiencia Sígsig
          </h4>
          <p className="text-sm text-gray-700">
            Consulte por nuestros paquetes que incluyen visitas guiadas al Centro Histórico, talleres artesanales de paja toquilla y excursiones a las cascadas y lagunas cercanas.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="https://wa.me/593997930366"
            className="inline-block metallic-gold text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Reserva Directa
          </a>
          
          {/* Botón adicional */}
          <a
            href="/habitaciones"
            target="_blank"
            className="inline-block bg-white border-2 border-[var(--color-gold)] text-[var(--color-wine-dark)] px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
          >
            <Hotel className="w-5 h-5 mr-2" />
            Explorar Habitaciones
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Mega Sección: Habitaciones, Servicios y Reseñas */}
<section id="habitaciones-servicios" className="py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Encabezado de la sección */}
    <div className="text-center mb-14">
      <div className="w-20 h-0.5 bg-[var(--color-gold)] mx-auto mb-2"></div>
      <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-4">
        Su Experiencia en Hotel Sígsig
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Disfrute de nuestras confortables habitaciones, servicios exclusivos y 
        conozca lo que otros huéspedes opinan sobre su estancia con nosotros
      </p>
    </div>

    {/* Servicios Exclusivos */}
    <div className="mb-16">
      <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-8">
        Servicios Exclusivos
      </h3>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: <BedDouble className="w-10 h-10" />, text: "Habitaciones Confortables" },
          { icon: <Wifi className="w-10 h-10" />, text: "WiFi Gratuito" },
          { icon: <ShowerHead className="w-10 h-10" />, text: "Agua Caliente" },
          { icon: <Clock className="w-10 h-10" />, text: "Recepción 24/7" }
        ].map((service, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md border border-[var(--color-gold)]/10 hover:shadow-lg transition-all duration-300">
            <div className="text-[var(--color-gold)] mb-2">
              {service.icon}
            </div>
            <span className="text-gray-700 text-center font-medium">{service.text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Tipos de Habitaciones */}
    <div className="mb-16">
    <div className="text-center mb-14">
      <div className="w-20 h-0.5 bg-[var(--color-gold)] mx-auto mb-2"></div>
      <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-4">
        Nuestras Habitaciones
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Disfrute de una estancia inolvidable en nuestras habitaciones cuidadosamente diseñadas, 
        combinando el confort moderno con el encanto tradicional de Sígsig.
      </p>
    </div>
      
      {/* Vista en pantallas grandes - Habitaciones en fila */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {[
          {
            title: "Habitación Sencilla",
            capacity: "Hasta 2 personas",
            image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/wlxnmgg1q3durbp0n39u.jpg",
            description: "Ideal para viajeros que buscan comodidad a un precio accesible",
            amenities: ["Cama Individual o Matrimonial", "Baño Privado", "Wifi Gratuito"]
          },
          {
            title: "Habitación Matrimonial",
            capacity: "2 personas",
            image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/mygo5tqobos3xx6ffhfy.jpg",
            description: "Perfecta para parejas, con hermosa vista al centro",
            amenities: ["Cama Matrimonial", "Vista Panorámica", "Mesa de Trabajo"]
          },
          {
            title: "Habitación Doble",
            capacity: "Hasta 3 personas",
            image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/vs7x3bxdyghlulociius.jpg",
            description: "Espaciosa con vista privilegiada para familias o amigos",
            amenities: ["2-3 Camas", "Vista Panorámica", "Amplio Espacio"]
          },
          {
            title: "Habitación Triple",
            capacity: "Hasta 4 personas",
            image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740704243/hotelsigsig/eyqmz2hczww8uglgem4o.jpg",
            description: "Nuestra opción más amplia para grupos o familias",
            amenities: ["Múltiples Camas", "Espaciosa", "Confortable"]
          }
        ].map((room, index) => (
          <div key={index} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[var(--color-gold)]/10 flex flex-col h-full">
            <div className="relative h-48">
              <img 
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-[var(--color-wine-dark)] text-white px-3 py-1 rounded-full text-xs">
                {room.capacity}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="text-lg font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
                {room.title}
              </h4>
              <p className="text-gray-600 text-sm mb-3 flex-grow">{room.description}</p>
              <div className="mt-auto">
                <a 
                  href={`https://wa.me/593997930366?text=Hola,%20me%20interesa%20reservar%20una%20${room.title}%20en%20Hotel%20Sigsig`}
                  className="w-full metallic-gold text-white py-2 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Vista en pantallas medianas - Grid 2x2 */}
      <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
        {[
          {
            title: "Habitación Sencilla",
            capacity: "Hasta 2 personas",
            image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/wlxnmgg1q3durbp0n39u.jpg",
            description: "Ideal para viajeros que buscan comodidad a un precio accesible",
            amenities: ["Cama Individual o Matrimonial", "Baño Privado", "Wifi Gratuito"]
          },
          {
            title: "Habitación Matrimonial",
            capacity: "2 personas",
            image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/mygo5tqobos3xx6ffhfy.jpg",
            description: "Perfecta para parejas, con hermosa vista al centro",
            amenities: ["Cama Matrimonial", "Vista Panorámica", "Mesa de Trabajo"]
          },
          {
            title: "Habitación Doble",
            capacity: "Hasta 3 personas",
            image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/vs7x3bxdyghlulociius.jpg",
            description: "Espaciosa con vista privilegiada para familias o amigos",
            amenities: ["2-3 Camas", "Vista Panorámica", "Amplio Espacio"]
          },
          {
            title: "Habitación Triple",
            capacity: "Hasta 4 personas",
            image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740704243/hotelsigsig/eyqmz2hczww8uglgem4o.jpg",
            description: "Nuestra opción más amplia para grupos o familias",
            amenities: ["Múltiples Camas", "Espaciosa", "Confortable"]
          }
        ].map((room, index) => (
          <div key={index} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[var(--color-gold)]/10">
            <div className="relative h-60">
              <img 
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[var(--color-wine-dark)] text-white px-4 py-2 rounded-full text-sm">
                {room.capacity}
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-3">
                {room.title}
              </h4>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <ul className="space-y-2 mb-6">
                {room.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mr-2" />
                    {amenity}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/593997930366?text=Hola,%20me%20interesa%20reservar%20una%20${room.title}%20en%20Hotel%20Sigsig`}
                className="w-full metallic-gold text-white py-3 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Ahora <ChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Vista en móvil - Carrusel horizontal */}
      <div className="md:hidden overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {[
            {
              title: "Habitación Sencilla",
              capacity: "Hasta 2 personas",
              image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/wlxnmgg1q3durbp0n39u.jpg",
              description: "Ideal para viajeros que buscan comodidad"
            },
            {
              title: "Habitación Matrimonial",
              capacity: "2 personas",
              image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/mygo5tqobos3xx6ffhfy.jpg",
              description: "Perfecta para parejas"
            },
            {
              title: "Habitación Doble",
              capacity: "Hasta 3 personas",
              image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/vs7x3bxdyghlulociius.jpg",
              description: "Para familias o amigos"
            },
            {
              title: "Habitación Triple",
              capacity: "Hasta 4 personas",
              image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740704243/hotelsigsig/eyqmz2hczww8uglgem4o.jpg",
              description: "Nuestra opción más amplia"
            }
          ].map((room, index) => (
            <div key={index} className="w-60 flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden border border-[var(--color-gold)]/10">
              <div className="relative h-40">
                <img 
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-[var(--color-wine-dark)] text-white px-3 py-1 rounded-full text-xs">
                  {room.capacity}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
                  {room.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                <a 
                  href={`https://wa.me/593997930366?text=Hola,%20me%20interesa%20reservar%20una%20${room.title}%20en%20Hotel%20Sigsig`}
                  className="w-full metallic-gold text-white py-2 rounded-lg flex items-center justify-center text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Indicador de deslizar */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            Deslice para ver más habitaciones
            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
      
      {/* CTA para consultar más sobre habitaciones */}
      <div className="text-center mt-8">
        <a 
          href="https://wa.me/593997930366?text=Hola,%20quisiera%20información%20sobre%20las%20habitaciones%20disponibles%20en%20Hotel%20Sigsig" 
          className="inline-flex items-center text-[var(--color-wine-dark)] hover:text-[var(--color-gold)] transition-colors font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M7 16.3c0-2.8 2.2-5 5-5s5 2.2 5 5"></path>
          </svg>
          Consultar disponibilidad y precios
        </a>
      </div>
    </div>







    

    {/* Separador decorativo */}
    <div className="flex items-center justify-center my-12">
      <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent"></div>
      <div className="mx-4">
        <svg className="w-6 h-6 text-[var(--color-gold)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path>
        </svg>
      </div>
      <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent"></div>
    </div>

    {/* Reseñas de huéspedes */}
    <div>
      <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-8">
        Lo que opinan nuestros huéspedes
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* Reseña 1 */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-[var(--color-gold)]/10 relative">
          <div className="text-[var(--color-gold)] absolute -top-3 left-6">
            <svg width="24" height="18" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.13352 0C4.09321 2.5474 0.533203 7.37894 0.533203 13.6421C0.533203 19.3895 3.68953 24 8.7312 24C12.0658 24 14.4 21.6842 14.4 18.5263C14.4 15.5789 12.2779 13.2632 9.1335 13.2632C8.51952 13.2632 8.11824 13.3684 7.5042 13.5789C7.92987 10.5263 10.2641 7.57894 13.1725 5.89474L9.13354 0H9.13352ZM25.6001 0C20.5597 2.5474 17.0001 7.37894 17.0001 13.6421C17.0001 19.3895 20.1564 24 25.1981 24C28.5325 24 30.8667 21.6842 30.8667 18.5263C30.8667 15.5789 28.7446 13.2632 25.6002 13.2632C24.9862 13.2632 24.585 13.3684 23.9709 13.5789C24.3966 10.5263 26.7307 7.57894 29.6392 5.89474L25.6001 0Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex items-center mb-4 pt-2">
            <div className="flex text-[var(--color-gold)]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-sm italic mb-4">
            "Me parece un excelente lugar. La habitación estuvo muy limpia y cómoda. La atención fue muy cordial."
          </p>
          <div className="flex items-center mt-4">
            <div className="h-8 w-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-wine-dark)] font-medium mr-3">
              GE
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[var(--color-wine-dark)]">GalaSEE Estudios</span>
              <span className="text-xs text-gray-500">hace 11 meses</span>
            </div>
          </div>
        </div>

        {/* Reseña 2 */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-[var(--color-gold)]/10 relative">
          <div className="text-[var(--color-gold)] absolute -top-3 left-6">
            <svg width="24" height="18" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.13352 0C4.09321 2.5474 0.533203 7.37894 0.533203 13.6421C0.533203 19.3895 3.68953 24 8.7312 24C12.0658 24 14.4 21.6842 14.4 18.5263C14.4 15.5789 12.2779 13.2632 9.1335 13.2632C8.51952 13.2632 8.11824 13.3684 7.5042 13.5789C7.92987 10.5263 10.2641 7.57894 13.1725 5.89474L9.13354 0H9.13352ZM25.6001 0C20.5597 2.5474 17.0001 7.37894 17.0001 13.6421C17.0001 19.3895 20.1564 24 25.1981 24C28.5325 24 30.8667 21.6842 30.8667 18.5263C30.8667 15.5789 28.7446 13.2632 25.6002 13.2632C24.9862 13.2632 24.585 13.3684 23.9709 13.5789C24.3966 10.5263 26.7307 7.57894 29.6392 5.89474L25.6001 0Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex items-center mb-4 pt-2">
            <div className="flex text-[var(--color-gold)]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-sm italic mb-4">
            "Muy limpio, toallas, sábanas, todo. Ubicación perfecta, a 100 metros del Terminal, sin embargo muy tranquilo. Recomiendo."
          </p>
          <div className="flex items-center mt-4">
            <div className="h-8 w-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-wine-dark)] font-medium mr-3">
              RC
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[var(--color-wine-dark)]">Roberto C.</span>
              <span className="text-xs text-gray-500">hace 2 años</span>
            </div>
          </div>
        </div>

        {/* Reseña 3 */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-[var(--color-gold)]/10 relative">
          <div className="text-[var(--color-gold)] absolute -top-3 left-6">
            <svg width="24" height="18" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.13352 0C4.09321 2.5474 0.533203 7.37894 0.533203 13.6421C0.533203 19.3895 3.68953 24 8.7312 24C12.0658 24 14.4 21.6842 14.4 18.5263C14.4 15.5789 12.2779 13.2632 9.1335 13.2632C8.51952 13.2632 8.11824 13.3684 7.5042 13.5789C7.92987 10.5263 10.2641 7.57894 13.1725 5.89474L9.13354 0H9.13352ZM25.6001 0C20.5597 2.5474 17.0001 7.37894 17.0001 13.6421C17.0001 19.3895 20.1564 24 25.1981 24C28.5325 24 30.8667 21.6842 30.8667 18.5263C30.8667 15.5789 28.7446 13.2632 25.6002 13.2632C24.9862 13.2632 24.585 13.3684 23.9709 13.5789C24.3966 10.5263 26.7307 7.57894 29.6392 5.89474L25.6001 0Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex items-center mb-4 pt-2">
            <div className="flex text-[var(--color-gold)]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-sm italic mb-4">
            "Tanto el servicio como las comodidades del hotel son muy buenas... personal muy atento... totalmente recomendado."
          </p>
          <div className="flex items-center mt-4">
            <div className="h-8 w-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-wine-dark)] font-medium mr-3">
              PM
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[var(--color-wine-dark)]">Patricia M.</span>
              <span className="text-xs text-gray-500">hace 1 año</span>
            </div>
          </div>
        </div>

        {/* Reseña 4 - Adicional */}
{/* Reseña 4 - Adicional */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-[var(--color-gold)]/10 relative">
          <div className="text-[var(--color-gold)] absolute -top-3 left-6">
            <svg width="24" height="18" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.13352 0C4.09321 2.5474 0.533203 7.37894 0.533203 13.6421C0.533203 19.3895 3.68953 24 8.7312 24C12.0658 24 14.4 21.6842 14.4 18.5263C14.4 15.5789 12.2779 13.2632 9.1335 13.2632C8.51952 13.2632 8.11824 13.3684 7.5042 13.5789C7.92987 10.5263 10.2641 7.57894 13.1725 5.89474L9.13354 0H9.13352ZM25.6001 0C20.5597 2.5474 17.0001 7.37894 17.0001 13.6421C17.0001 19.3895 20.1564 24 25.1981 24C28.5325 24 30.8667 21.6842 30.8667 18.5263C30.8667 15.5789 28.7446 13.2632 25.6002 13.2632C24.9862 13.2632 24.585 13.3684 23.9709 13.5789C24.3966 10.5263 26.7307 7.57894 29.6392 5.89474L25.6001 0Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex items-center mb-4 pt-2">
            <div className="flex text-[var(--color-gold)]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-sm italic mb-4">
            "Un hotel bien ubicado, precios justos, habitación amplia y confortable. Lo recomendaría sin duda para quien visite Sígsig."
          </p>
          <div className="flex items-center mt-4">
            <div className="h-8 w-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-wine-dark)] font-medium mr-3">
              MJ
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[var(--color-wine-dark)]">Manuel J.</span>
              <span className="text-xs text-gray-500">hace 1 mes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enlace a Google Maps con logo combinado */}
      <div className="mt-10 text-center">
        <a 
          href="https://www.google.com.ec/maps/place/Hotel+S%C3%ADgsig/@-3.0454147,-78.7944077,19z" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white rounded-full shadow-md px-5 py-3 hover:shadow-lg transition-all duration-300 group"
        >
          <div className="relative mr-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-wine-dark)] flex items-center justify-center overflow-hidden">
              <img 
                src="/hotelsigsiglogo.png" 
                alt="Hotel Sigsig Logo" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white p-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.527 13.228c.232.568.376 1.188.376 1.844 0 2.623-2.145 4.768-4.768 4.768a4.764 4.764 0 01-4.769-4.768 4.764 4.764 0 014.769-4.768c.656 0 1.276.144 1.844.376V6.681h-6.612v13.372h9.16v-6.825z" fill="#34A853"/>
                <path d="M6.455 17.884V10.23H3.914v7.654h2.54z" fill="#FBBC05"/>
                <path d="M13.244 10.23h-6.79v2.541h6.79v-2.54z" fill="#FBBC05"/>
                <path d="M3.914 6.68V9.22h9.33V6.68h-9.33z" fill="#EA4335"/>
                <path d="M3.914 20.061h2.54v-2.54h-2.54v2.54z" fill="#1967D2"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[var(--color-wine-dark)] font-medium group-hover:text-[var(--color-gold)] transition-colors">Ver todas las reseñas en Google</span>
            <span className="text-xs text-gray-500">20+ opiniones de huéspedes satisfechos</span>
          </div>
        </a>
      </div>
    </div>

    {/* Separador decorativo */}
    <div className="flex items-center justify-center my-12">
      <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent"></div>
      <div className="mx-4">
        <svg className="w-6 h-6 text-[var(--color-gold)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path>
        </svg>
      </div>
      <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent"></div>
    </div>

    {/* CTA Final */}
    <div className="bg-white rounded-xl shadow-lg border border-[var(--color-gold)]/20 p-8 text-center max-w-3xl mx-auto">
      <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-4">
        Vive tu experiencia en Hotel Sigsig
      </h3>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
        Disfrute de la mejor ubicación en Sígsig, habitaciones confortables y un servicio personalizado que hará de su estancia una experiencia inolvidable.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a 
          href="https://wa.me/593997930366?text=Hola,%20me%20interesa%20reservar%20en%20Hotel%20Sigsig" 
          className="metallic-gold text-white px-6 py-3 rounded-lg flex items-center hover:scale-105 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.944 1.164-.177.199-.349.223-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Reservar por WhatsApp
        </a>
        <a 
          href="tel:+593997930366" 
          className="bg-white border-2 border-[var(--color-gold)]/40 text-[var(--color-wine-dark)] px-6 py-3 rounded-lg flex items-center hover:bg-[var(--color-gold)]/10 transition-all"
        >
          <svg className="w-5 h-5 mr-2 text-[var(--color-gold)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
          </svg>
          Llamar Ahora
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Eventos Culturales - Mejorado con gradiente para legibilidad */}
      <section className="py-16 bg-[var(--color-wine-dark)]/5">
        <div className="container mx-auto px-4">
          <div className="relative mb-16">
            <div className="pattern-border-top mb-8" />
            <div className="text-center">
              <div className="w-20 h-0.5 bg-[var(--color-gold)] mx-auto mb-2"></div>
              <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-4">
                Eventos en Sígsig
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Descubre la riqueza cultural de nuestro pueblo andino a través de sus festividades, 
                tradiciones y eventos que mantienen viva nuestra herencia ancestral.
              </p>
            </div>
            <div className="pattern-border-bottom mt-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://ladydeelg.com/wp/wp-content/uploads/2014/08/AR-PN-ANDES-CUENCA-SIGSIG-ARTESANÍAS-SOMBREROS-006.jpg",
                title: "Festival del Sombrero de Paja Toquilla",
                date: "Julio",
                description: "Celebración de nuestra artesanía más emblemática.",
                isUpcoming: true
              },
              {
                image: "https://www.turismo.gob.ec/wp-content/uploads/2020/11/KIK5550-3-scaled.jpg",
                title: "Fiestas de Cantonización",
                date: "16 de Abril",
                description: "Celebramos el aniversario de Sígsig con danzas tradicionales.",
                isUpcoming: false
              },
              {
                image: "https://ame.gob.ec/wp-content/uploads/2022/03/SOMBRERO_1.jpg",
                title: "Exposición Artesanal",
                date: "Agosto",
                description: "Muestra de la diversidad artesanal de nuestro cantón.",
                isUpcoming: true
              }
            ].map((evento, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-xl"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={evento.image} 
                    alt={evento.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradiente mejorado para legibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wine-dark)] via-[var(--color-wine-dark)]/70 to-transparent">
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className={`
                    absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-medium
                    ${evento.isUpcoming ? 
                      'bg-[var(--color-gold)] text-white' : 
                      'bg-white/90 text-[var(--color-wine-dark)]'
                    }
                  `}>
                    {evento.isUpcoming ? '📅 Próximamente - ' : '✓ Realizado - '} {evento.date}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-['Playfair_Display'] text-white mb-2">
                      {evento.title}
                    </h3>
                    <p className="text-white/90 mb-4">
                      {evento.description}
                    </p>
                    
                    <button className="metallic-gold text-white px-6 py-2 rounded-full 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 
                      transform translate-y-4 group-hover:translate-y-0
                      flex items-center">
                      Más Información <ChevronRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia y Cultura Mejorada */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block mb-2">
                <div className="w-20 h-0.5 bg-[var(--color-gold)]"></div>
                <div className="w-12 h-0.5 bg-[var(--color-gold)] mt-1"></div>
              </div>
              <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                Nuestra Historia y Cultura
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                En el corazón del cantón Sígsig, declarado Patrimonio Cultural del Ecuador, 
                nuestro hotel se erige como un testimonio de la hospitalidad azuaya.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sígsig es mundialmente reconocido por el arte del tejido de sombreros de paja toquilla, 
                declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2012, una tradición 
                que podrá experimentar de primera mano durante su estancia con nosotros.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Award className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                      Patrimonio UNESCO
                    </h4>
                    <p className="text-sm text-gray-600">
                      Reconocimiento internacional
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Landmark className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                      Historia
                    </h4>
                    <p className="text-sm text-gray-600">
                      Rica herencia cultural
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Gift className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                      Artesanías
                    </h4>
                    <p className="text-sm text-gray-600">
                      Cerca de talleres artesanales
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Music className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-1">
                      Tradiciones
                    </h4>
                    <p className="text-sm text-gray-600">
                      Festividades locales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-6">
                <img 
                  src="https://visitazuay.com/wp-content/uploads/2018/07/SIGSIG-SOMBRERERAS--1024x1024.jpg" 
                  alt="Artesanas de Sígsig" 
                  className="w-full h-80 object-cover rounded-xl shadow-xl"
                />
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="https://ame.gob.ec/wp-content/uploads/2017/04/sigsig.jpg" 
                      alt="Centro Histórico Sígsig" 
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="https://www.agricultura.gob.ec/wp-content/uploads/2019/03/Captura-de-pantalla-2019-03-19-a-las-08.38.07.png" 
                      alt="Paisajes de Sígsig" 
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué visitar Sígsig */}
      <section className="py-16 relative overflow-hidden bg-[var(--color-wine-dark)]/5">
        <div className="absolute inset-0 opacity-5 weave-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <div className="w-20 h-0.5 bg-[var(--color-gold)] mx-auto mb-2"></div>
            <span className="text-[var(--color-gold)] font-medium mb-2 block">Descubre</span>
            <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-4">
              ¿Por qué visitar Sígsig?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sígsig, Patrimonio Cultural del Ecuador, es famoso por su artesanía en paja toquilla 
              y ofrece una experiencia única que combina cultura, naturaleza y tradición.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cueva Negra de Chobshi",
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ae/3e/24/la-cueva-negra-de-chobshi.jpg?w=1200&h=-1&s=1",
                description: "Sitio arqueológico que data de 10.000 años de antigüedad.",
                icon: <Landmark className="w-6 h-6" />
              },
              {
                title: "Laguna de Kingor",
                image: "https://visitazuay.com/wp-content/uploads/2024/12/LAGUNA-DE-KINGOR-1024x682.jpg",
                description: "Espejo de agua natural rodeado de páramo andino.",
                icon: <Mountain className="w-6 h-6" />
              },
              {
                title: "Artesanías en Paja Toquilla",
                image: "https://visitazuay.com/wp-content/uploads/2018/07/SIGSIG-SOMBRERERAS--1024x1024.jpg",
                description: "Patrimonio Cultural Inmaterial de la Humanidad.",
                icon: <Gift className="w-6 h-6" />
              }
            ].map((spot, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[var(--color-gold)]/10">
                <div className="relative h-48">
                  <img 
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <div className="text-[var(--color-gold)]">
                      {spot.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
                    {spot.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {spot.description}
                  </p>
                  <button className="text-[var(--color-gold)] font-medium flex items-center hover:translate-x-2 transition-transform">
                    Explorar <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/593997930366?text=Hola,%20me%20gustaría%20información%20sobre%20atracciones%20en%20Sígsig" 
              className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Planifica tu Visita <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Contacto y Mapa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="w-20 h-0.5 bg-[var(--color-gold)] mx-auto mb-2"></div>
            <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-4">
              Contáctanos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos disponibles 24/7 para atender sus consultas y reservas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[var(--color-gold)]/10">
              <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Dirección</h4>
                    <p className="text-gray-600">Av. María Auxiliadora e Ignacio Arcentales, Sígsig, Ecuador</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Teléfono</h4>
                    <p className="text-gray-600">+593 99 793 0366</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MessageSquare className="text-[var(--color-gold)] w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">WhatsApp</h4>
                    <p className="text-gray-600">+593 99 793 0366</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="tel:+593997930366" 
                  className="metallic-gold text-white px-6 py-3 rounded-full flex items-center hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" /> Llamar
                </a>
                <a 
                  href="https://wa.me/593997930366" 
                  className="bg-[var(--color-wine)] text-white px-6 py-3 rounded-full flex items-center hover:scale-105 transition-all duration-300 border border-[var(--color-gold)]/20"
                >
                  <svg className="w-5 h-5 mr-2 text-[var(--color-gold)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.944 1.164-.177.199-.349.223-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg> WhatsApp
                </a>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] border border-[var(--color-gold)]/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.6057584609506!2d-78.7946835304395!3d-3.0453804431177583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cceab705f4a579%3A0xfa63101cb4e41e78!2sHotel%20S%C3%ADgsig!5e0!3m2!1ses!2sec!4v1699995235515!5m2!1ses!2sec" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Hotel Sigsig en Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      </div>
  );
};


export default Home;
