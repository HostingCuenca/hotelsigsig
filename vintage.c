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
    <div className="md:w-3/5 flex flex-col justify-center md:pr-8 lg:pr-12 py-2 md:py-0 mt-16">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] mb-4 md:mb-6">
        <span className="text-[var(--color-gold)] drop-shadow-lg">Hotel Sigsig</span>
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
      
      {/* Botones CTA - Modificados para versión móvil */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-w-xl mb-6">
        <a 
          href="tel:+593997930366" 
          className="metallic-gold text-white px-6 py-3 rounded-full flex items-center justify-center text-base md:text-lg hover:scale-105 transition-all duration-300 w-full md:w-auto"
          aria-label="Llamar al Hotel Sigsig"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
          </svg>
          Llamar Ahora
        </a>
        <a 
          href="https://wa.me/593997930366" 
          className="bg-[var(--color-wine)] text-white px-6 py-3 rounded-full flex items-center justify-center text-base md:text-lg hover:scale-105 transition-all duration-300 border border-[var(--color-gold)]/20 w-full md:w-auto"
          aria-label="Contactar por WhatsApp al Hotel Sigsig"
        >
          <svg className="w-5 h-5 mr-2 text-[var(--color-gold)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.3-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.267-.465-2.414-1.485-.893-.795-1.494-1.78-1.67-2.079-.173-.3-.018-.465.13-.613.134-.135.301-.345.451-.52.151-.174.2-.298.3-.498.099-.2.05-.371-.025-.52-.075-.15-.672-1.62-.92-2.22-.248-.6-.487-.51-.672-.51-.173 0-.4-.026-.621-.026-.223 0-.545.105-.841.405-.297.3-1.13 1.095-1.13 2.67s1.152 3.098 1.323 3.298c.17.2 2.45 3.746 5.94 5.271 2.99 1.163 3.73.997 4.41.936.68-.06 1.816-.736 2.068-1.442.255-.71.255-1.315.18-1.442-.074-.127-.273-.197-.574-.346z"/>
          </svg>
          Escríbenos
        </a>
        <a 
          href="https://www.google.com.ec/maps/place/Hotel+S%C3%ADgsig/@-3.0454147,-78.7944077,19.46z" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[var(--color-wine-dark)]/60 backdrop-blur-sm text-white border border-[var(--color-gold)]/20 px-6 py-3 rounded-full flex items-center justify-center text-base md:text-lg hover:bg-[var(--color-wine-dark)]/80 transition-all duration-300 w-full md:w-auto"
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
        {/* Imagen 1 - Habitación Deluxe */}
        <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 border-2 border-[var(--color-gold)]/10">
          <div className="relative w-full h-full group">
            <img
              src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637904/hotelsigsig/e87krfzxlv5a29qmwlrl.jpg"
              alt="Habitación Deluxe - Hotel Sigsig"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#350a06] via-[#350a06]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-white text-sm font-medium">Habitación Deluxe</span>
            </div>
          </div>
        </div>
        
        {/* Imagen 2 - Habitación Premium */}
        <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 border-2 border-[var(--color-gold)]/10">
          <div className="relative w-full h-full group">
            <img
              src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/vphbznvakmnt73ygeeje.jpg"
              alt="Habitación Premium - Hotel Sigsig"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#350a06] via-[#350a06]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-white text-sm font-medium">Habitación Premium</span>
            </div>
          </div>
        </div>
        
        {/* Imagen 3 - Centro Histórico */}
        <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 border-2 border-[var(--color-gold)]/10">
          <div className="relative w-full h-full group">
            <img
              src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625092/hotelsigsig/a1ojmq64f7ekgiw5upfo.jpg"
              alt="Centro Histórico de Sígsig"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#350a06] via-[#350a06]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-white text-sm font-medium">Centro Histórico</span>
            </div>
          </div>
        </div>
        
        {/* Imagen 4 - Artesanías */}
        <div className="aspect-square rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500 border-2 border-[var(--color-gold)]/10">
          <div className="relative w-full h-full group">
            <img
              src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/edwxjyudnc2mpfohbvoq.jpg"
              alt="Artesanías Locales de Sígsig"
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
  
  {/* Galería para móviles - Rediseñada */}
  <div className="md:hidden absolute bottom-6 left-0 right-0 px-4">
    <div className="grid grid-cols-2 gap-3">
      <div className="aspect-square rounded-lg overflow-hidden shadow-lg" style={{transform: "translateY(2px) translateX(1px)"}}>
        <img
          src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637904/hotelsigsig/e87krfzxlv5a29qmwlrl.jpg"
          alt="Habitación Deluxe - Hotel Sigsig"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="aspect-square rounded-lg overflow-hidden shadow-lg" style={{transform: "translateY(-2px) translateX(-1px)"}}>
        <img
          src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/vphbznvakmnt73ygeeje.jpg"
          alt="Habitación Premium - Hotel Sigsig"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="aspect-square rounded-lg overflow-hidden shadow-lg" style={{transform: "translateY(-1px) translateX(2px)"}}>
        <img
          src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625092/hotelsigsig/a1ojmq64f7ekgiw5upfo.jpg"
          alt="Centro Histórico de Sígsig"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="aspect-square rounded-lg overflow-hidden shadow-lg" style={{transform: "translateY(1px) translateX(-2px)"}}>
        <img
          src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/edwxjyudnc2mpfohbvoq.jpg"
          alt="Artesanías Locales de Sígsig"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</header>