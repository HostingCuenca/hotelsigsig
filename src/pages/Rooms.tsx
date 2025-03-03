
// pages/Rooms.tsx
import { useState, useEffect, useRef } from 'react';
import { 
  BedDouble, 
  Coffee, 
  Mountain, 
  Users, 
  Wifi, 
  Tv, 
  Clock, 
  ShowerHead,
  MapPin,
  CalendarDays,
  ChevronRight,
  ChevronLeft,
  Star,
  CheckCircle,
  Bus,
  Info,
  Camera,
  MessageSquare,
  X,
  ChevronsLeft,
  ChevronsRight,
  ParkingCircle,
  Smartphone,
  Phone
} from 'lucide-react';

const Rooms = () => {
  // Estados para el formulario de reserva
  const [selectedRoom, setSelectedRoom] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');
  const [isFormValid, setIsFormValid] = useState(true);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  
  // Referencias para scroll
  const reservationFormRef = useRef<HTMLDivElement>(null);
  const roomsSectionRef = useRef<HTMLDivElement>(null);
  
  // Estado para galería modal
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Estado para mostrar detalles de políticas
  const [showPolicies, setShowPolicies] = useState(false);

  // Información de las habitaciones
  const roomsInfo = [
    {
      id: 'sencilla',
      title: "Habitación Sencilla",
      capacity: "1-2 personas",
      images: [
        "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740625090/hotelsigsig/wlxnmgg1q3durbp0n39u.jpg",
        "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/gmzkpk9iasrqd8ssst09.jpg"
      ],
      description: "Ideal para viajeros que buscan comodidad a un precio accesible. Esta habitación ofrece un ambiente tranquilo y todas las comodidades esenciales para una estancia placentera.",
      features: [
        "Cama Individual o Matrimonial",
        "Baño Privado con Ducha",
        "TV con Cable",
        "WiFi de Alta Velocidad"
      ]
    },
    {
      id: 'matrimonial',
      title: "Habitación Matrimonial",
      capacity: "2 personas",
      images: [
        "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/mygo5tqobos3xx6ffhfy.jpg",
        "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637904/hotelsigsig/e87krfzxlv5a29qmwlrl.jpg"
      ],
      description: "Perfecta para parejas que buscan comodidad y privacidad. Disfrute de una cama matrimonial confortable y una hermosa vista al centro histórico de Sígsig.",
      features: [
        "Cama Matrimonial Queen",
        "Vista al Centro Histórico",
        "Baño Completo",
        "TV Smart"
      ]
    },
    {
      id: 'doble',
      title: "Habitación Doble",
      capacity: "2-3 personas",
      images: [
        "https://res.cloudinary.com/dzfakhjlh/image/upload/v1739637901/hotelsigsig/vs7x3bxdyghlulociius.jpg",
        
        "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740704242/hotelsigsig/qaud8imwbq9ukcithpcr.jpg"
      ],
      description: "Espaciosa habitación con dos camas individuales, ideal para amigos o familiares que viajan juntos. Disfrute de mayor espacio y comodidades premium.",
      features: [
        "2 Camas Individuales",
     
        "Baño Completo con Amenities",
        "Vistas a la Ciudad"
      ]
    },
    {
      id: 'triple',
      title: "Habitación Triple",
      capacity: "3-4 personas",
      images: [
        "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740704243/hotelsigsig/eyqmz2hczww8uglgem4o.jpg",
        "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740704243/hotelsigsig/slgpnj4e3rkmujo194id.jpg",
        
      ],
      description: "Nuestra opción más amplia, ideal para familias o grupos. Con capacidad para varias personas, ofrece el máximo confort y espacio para todos los huéspedes.",
      features: [
        "Configuración Flexible de Camas",
        "Baño Amplio con Ducha",
        "TV Smart",
        "Vistas Panorámicas"
      ]
    }
  ];

  // Comodidades comunes a todas las habitaciones
  const commonAmenities = [
    { icon: <Wifi className="w-6 h-6" />, text: "WiFi Gratuito de Alta Velocidad" },
    { icon: <Tv className="w-6 h-6" />, text: "Smart TV con Cable" },
    { icon: <ShowerHead className="w-6 h-6" />, text: "Agua Caliente 24/7" },
    { icon: <ParkingCircle className="w-6 h-6" />, text: "Estacionamiento Gratuito" },
    { icon: <Smartphone className="w-6 h-6" />, text: "Recepción 24 Horas" }
  ];

  // Función para abrir la galería de imágenes
  const openGallery = (roomId: string) => {
    const room = roomsInfo.find(r => r.id === roomId);
    if (room) {
      setGalleryImages(room.images);
      setCurrentImageIndex(0);
      setShowGallery(true);
      // Bloquear el scroll del body
      document.body.style.overflow = 'hidden';
    }
  };

  // Cerrar galería
  const closeGallery = () => {
    setShowGallery(false);
    document.body.style.overflow = 'auto';
  };

  // Navegar entre imágenes de la galería
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  // Manejar la navegación con teclado en la galería
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showGallery) return;
      
      if (e.key === 'ArrowLeft') {
        navigateGallery('prev');
      } else if (e.key === 'ArrowRight') {
        navigateGallery('next');
      } else if (e.key === 'Escape') {
        closeGallery();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showGallery, galleryImages]);

  // Función para scrollear al formulario de reserva
  const scrollToReservationForm = () => {
    reservationFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Función para validar el formulario
  const validateForm = () => {
    const errors = [];
    
    if (!selectedRoom) {
      errors.push('Por favor selecciona una habitación');
    }
    
    if (!checkIn) {
      errors.push('Por favor selecciona una fecha de llegada');
    }
    
    if (!checkOut) {
      errors.push('Por favor selecciona una fecha de salida');
    }
    
    if (checkIn && checkOut && new Date(checkIn) >= new Date(checkOut)) {
      errors.push('La fecha de salida debe ser posterior a la fecha de llegada');
    }
    
    setFormErrors(errors);
    return errors.length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = () => {
    if (validateForm()) {
      const room = roomsInfo.find(r => r.id === selectedRoom);
      const message = `Hola, me interesa reservar una habitación:
      - Tipo: ${room?.title}
      - Check-in: ${checkIn}
      - Check-out: ${checkOut}
      - Huéspedes: ${guests}`;
      
      window.open(`https://wa.me/593997930366?text=${encodeURIComponent(message)}`);
    } else {
      scrollToReservationForm();
    }
  };

  // Efecto para validar el formulario cuando cambian los campos
  useEffect(() => {
    if (checkIn && checkOut && selectedRoom) {
      setIsFormValid(validateForm());
    }
  }, [checkIn, checkOut, selectedRoom]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000]/90 via-[#330000]/70 to-transparent z-10" />
          <img 
            src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740704242/hotelsigsig/z106xypglndckyljdkqb.jpg" 
            alt="Habitaciones Hotel Sigsig"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="mb-4">
              <div className="w-20 h-0.5 bg-[var(--color-gold)]"></div>
              <div className="w-12 h-0.5 bg-[var(--color-gold)] mt-1"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] text-white mb-6">
              Nuestras Habitaciones
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Disfrute de una estancia inolvidable en nuestras habitaciones cuidadosamente diseñadas, 
              combinando el confort moderno con el encanto tradicional de Sígsig.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => roomsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })} 
                className="metallic-gold text-white px-8 py-4 rounded-full flex items-center text-lg"
              >
                Ver Habitaciones <ChevronRight className="ml-2" />
              </button>
              <button 
                onClick={scrollToReservationForm}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full flex items-center text-lg hover:bg-white/10 transition-colors"
              >
                Reservar Ahora <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Amenidades Generales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
            Todas nuestras habitaciones incluyen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Disfrute de estas comodidades en cualquiera de nuestras habitaciones, 
            diseñadas para garantizarle una estancia confortable y placentera.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {commonAmenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[var(--color-gold)] mb-4">
                  {amenity.icon}
                </div>
                <span className="text-gray-700 text-center font-medium">{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habitaciones Detalladas */}
      <section ref={roomsSectionRef} className="py-16 bg-[var(--color-wine-dark)]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="w-20 h-0.5 bg-[var(--color-gold)] mx-auto mb-2"></div>
            <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-4">
              Elija su Habitación Ideal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada una de nuestras habitaciones está diseñada pensando en su comodidad, 
              con una mezcla perfecta de estilo tradicional y amenidades modernas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {roomsInfo.map((room, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <div className="relative h-96 overflow-hidden bg-gray-100">
                    <img 
                      src={room.images[0]}
                      alt={room.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    
                {/* Indicador de capacidad */}
                <div className="absolute top-4 left-4">
                      <div className="bg-[var(--color-wine-dark)]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {room.capacity}
                      </div>
                    </div>
                    
                    {/* Botón de galería */}
                    <button 
                      onClick={() => openGallery(room.id)}
                      className="absolute bottom-4 right-4 bg-white/90 text-[var(--color-wine-dark)] p-2 rounded-full hover:bg-white transition-colors"
                      aria-label="Ver galería de fotos"
                    >
                      <Camera className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-3">
                    {room.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                      <Star className="w-5 h-5 text-[var(--color-gold)] mr-2" />
                      Características
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => {
                        setSelectedRoom(room.id);
                        scrollToReservationForm();
                      }}
                      className="flex-1 metallic-gold text-white py-3 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      Reservar Ahora <ChevronRight className="ml-2" />
                    </button>
                    
                    <a 
                      href={`https://wa.me/593997930366?text=Hola,%20me%20interesa%20información%20sobre%20la%20${room.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:w-auto metallic-wine text-white py-3 px-4 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Consultar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema de Reserva */}
      <section ref={reservationFormRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-8 border border-[var(--color-gold)]/10">
              <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-4">
                Reserve su Estadía
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Estaremos encantados de recibirle en nuestro hotel. Complete el siguiente formulario 
                y nos pondremos en contacto con usted para confirmar la disponibilidad de su habitación. 
                Nuestro personal le atenderá de manera personalizada para asegurarle una estancia perfecta en Sígsig.
              </p>
              
              {/* Formulario */}
              <div className="space-y-6">
                {/* Errores de validación */}
                {formErrors.length > 0 && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
                    <h4 className="font-medium flex items-center mb-2">
                      <Info className="w-5 h-5 mr-2" /> Por favor corrige los siguientes errores:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {formErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Selección de habitación */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Habitación</label>
                    <select 
                      value={selectedRoom}
                      onChange={(e) => setSelectedRoom(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20"
                    >
                      <option value="">Seleccionar habitación...</option>
                      {roomsInfo.map((room, index) => (
                        <option key={index} value={room.id}>
                          {room.title}
                        </option>
                      ))}
                    </select>
                    {selectedRoom && (
                      <div className="mt-2 text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        Habitación seleccionada: {roomsInfo.find(r => r.id === selectedRoom)?.title}
                      </div>
                    )}
                  </div>
                  
                  {/* Número de huéspedes */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Huéspedes</label>
                    <select 
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20"
                    >
                      {[1,2,3,4].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'huésped' : 'huéspedes'}</option>
                      ))}
                    </select>
                    <div className="mt-2 text-sm text-gray-600">
                      Seleccione el número total de personas que se hospedarán.
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Fecha de llegada */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Fecha de llegada</label>
                    <div className="relative">
                      <input 
                        type="date"
                        value={checkIn}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 pr-10"
                      />
                      <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      Check-in a partir de las 14:00 hrs.
                    </div>
                  </div>
                  
                  {/* Fecha de salida */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Fecha de salida</label>
                    <div className="relative">
                      <input 
                        type="date"
                        value={checkOut}
                        min={checkIn || new Date().toISOString().split('T')[0]}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20 pr-10"
                      />
                      <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      Check-out hasta las 12:00 hrs.
                    </div>
                  </div>
                </div>
                
                {/* Información sobre políticas */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[var(--color-gold)]">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowPolicies(!showPolicies)}>
                    <h4 className="font-medium text-gray-800 flex items-center">
                      <Info className="w-5 h-5 text-[var(--color-gold)] mr-2" />
                      Información importante
                    </h4>
                    <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${showPolicies ? 'rotate-90' : ''}`} />
                  </div>
                  
                  {showPolicies && (
                    <div className="mt-4 text-sm text-gray-600 space-y-2">
                      <p>• Los precios son por noche.</p>
                      <p>• Para confirmar su reserva, comuníquese con nosotros.</p>
                      <p>• Cancelación gratuita hasta 3 días antes de la llegada.</p>
                      <p>• Habitaciones ideal para grupos</p>
                      <p>• No se permiten mascotas.</p>
                    </div>
                  )}
                </div>
                
                {/* Botón de envío */}
                <button 
                  onClick={handleSubmit}
                  className="w-full metallic-gold text-white py-4 rounded-lg flex items-center justify-center text-lg hover:scale-105 transition-transform"
                >
                  Consultar Disponibilidad <ChevronRight className="ml-2" />
                </button>
                
                <div className="text-center text-gray-500 text-sm">
                  Al hacer clic en "Consultar Disponibilidad", será redirigido a WhatsApp para continuar con su reserva.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-[var(--color-wine-dark)]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-12">
            ¿Por qué elegir Hotel Sigsig?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Ubicación Privilegiada",
                description: "A solo 1 cuadra del Terminal Terrestre y cerca del centro histórico, con fácil acceso a todos los atractivos."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Calidad Garantizada",
                description: "Habitaciones cuidadosamente mantenidas y servicio personalizado para garantizar su comodidad."
              },
              {
                icon: <Bus className="w-8 h-8" />,
                title: "Fácil Acceso",
                description: "Transporte público y taxis disponibles las 24 horas para sus traslados desde y hacia cualquier destino."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Atención Personalizada",
                description: "Nuestro personal está comprometido en hacer de su estancia una experiencia inolvidable."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
                <div className="text-[var(--color-gold)] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios / Reseñas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="w-20 h-0.5 bg-[var(--color-gold)] mx-auto mb-2"></div>
            <span className="text-[var(--color-gold)] font-medium mb-2 block">Testimonios</span>
            <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-4">
              Lo Que Dicen Nuestros Huéspedes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sígsig, Patrimonio Cultural del Ecuador, es famoso por su artesanía en paja toquilla 
              y ofrece una experiencia única que combina cultura, naturaleza y tradición.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                text: "Me parece un excelente lugar. La habitación estuvo muy limpia y cómoda. La atención fue muy cordial.",
                author: "GalaSEE Estudios",
                date: "hace 11 meses"
              },
              {
                text: "Muy limpio, toallas, sábanas, todo. Ubicación perfecta, a 100 metros del Terminal, sin embargo muy tranquilo. Recomiendo.",
                author: "Roberto C.",
                date: "hace 2 años"
              },
              {
                text: "Tanto el servicio como las comodidades del hotel son muy buenas... personal muy atento... totalmente recomendado.",
                author: "Patricia M.",
                date: "hace 1 año"
              },
              {
                text: "Un hotel bien ubicado, precios justos, habitación amplia y confortable. Lo recomendaría sin duda para quien visite Sígsig.",
                author: "Manuel J.",
                date: "hace 1 mes"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-[var(--color-gold)]/10 relative">
                <div className="text-[var(--color-gold)] absolute -top-3 left-6">
                  <svg width="24" height="18" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.13352 0C4.09321 2.5474 0.533203 7.37894 0.533203 13.6421C0.533203 19.3895 3.68953 24 8.7312 24C12.0658 24 14.4 21.6842 14.4 18.5263C14.4 15.5789 12.2779 13.2632 9.1335 13.2632C8.51952 13.2632 8.11824 13.3684 7.5042 13.5789C7.92987 10.5263 10.2641 7.57894 13.1725 5.89474L9.13354 0H9.13352ZM25.6001 0C20.5597 2.5474 17.0001 7.37894 17.0001 13.6421C17.0001 19.3895 20.1564 24 25.1981 24C28.5325 24 30.8667 21.6842 30.8667 18.5263C30.8667 15.5789 28.7446 13.2632 25.6002 13.2632C24.9862 13.2632 24.585 13.3684 23.9709 13.5789C24.3966 10.5263 26.7307 7.57894 29.6392 5.89474L25.6001 0Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="flex items-center mb-4 pt-2">
                  <div className="flex text-[var(--color-gold)]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm italic mb-4">
                  "{review.text}"
                </p>
                
                <div className="flex items-center mt-4">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-wine-dark)] font-medium mr-3">
                    {review.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[var(--color-wine-dark)]">{review.author}</span>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enlace a Google Maps */}
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
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 bg-[var(--color-wine-dark)]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-12">
            Preguntas Frecuentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Cuáles son los horarios de check-in y check-out?",
                answer: "El check-in es a partir de las 14:00 horas y el check-out es hasta las 12:00 del mediodía. Si necesita un horario diferente, por favor contáctenos y haremos lo posible por adaptarnos a sus necesidades."
              },
              {
                question: "¿Tienen estacionamiento?",
                answer: "Sí, contamos con estacionamiento gratuito para nuestros huéspedes, sujeto a disponibilidad."
              },
              {
                question: "¿Aceptan mascotas?",
                answer: "Lo sentimos, actualmente no aceptamos mascotas en nuestras instalaciones."
              },
              {
                question: "¿Cuál es la política de cancelación?",
                answer: "Ofrecemos cancelación gratuita hasta 3 días antes de la fecha de llegada. Cancelaciones posteriores o no presentación pueden generar un cargo del 50% de la primera noche."
              },
              {
                question: "¿Ofrecen habitaciones para familias?",
                answer: "Sí, nuestras habitaciones dobles y triples son ideales para familias. También son ideales para grupos."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-medium text-[var(--color-wine-dark)] mb-3">{item.question}</h4>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[var(--color-gold)]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
            Reserve su estadía hoy mismo
          </h2>
          <p className="mb-8 text-gray-700 max-w-2xl mx-auto">
            Disfrute de la mejor hospitalidad en Sígsig. Nuestro hotel le ofrece el ambiente perfecto para 
            disfrutar de esta hermosa región con la comodidad que usted merece. Contáctenos para tarifas especiales 
            en estadías prolongadas y grupos. ¡Esperamos darle la bienvenida pronto!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/593997930366?text=Hola,%20me%20interesa%20reservar%20una%20habitación%20en%20Hotel%20Sigsig"
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-gold text-white px-8 py-4 rounded-full flex items-center hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Reservar por WhatsApp
            </a>
            <a
              href="tel:+593997930366"
              className="border-2 border-[var(--color-wine-dark)] text-[var(--color-wine-dark)] px-8 py-4 rounded-full flex items-center hover:bg-[var(--color-wine-dark)] hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Galería Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-5xl px-4">
            {/* Botón cerrar */}
            <button 
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-20"
              aria-label="Cerrar galería"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Imagen principal */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={galleryImages[currentImageIndex]} 
                alt={`Imagen ${currentImageIndex + 1} de la habitación`}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
            </div>
            
            {/* Navegación */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2">
              <button 
                onClick={() => navigateGallery('prev')}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={() => navigateGallery('next')}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
            
            {/* Indicador */}
            <div className="text-center text-white mt-4">
              Imagen {currentImageIndex + 1} de {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;