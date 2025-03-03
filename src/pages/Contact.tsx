

// pages/Contact.tsx
import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Apple as WhatsApp,
  ChevronRight,
  Clock,
  Calendar,
  MessageCircle,
  Star,
  BedDouble,
  Coffee,
  Navigation
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
  
    motivo: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `¡Hola! Me gustaría contactarlos:\n
Nombre: ${formData.nombre}

Motivo: ${formData.motivo}
Mensaje: ${formData.mensaje}`;

    window.open(`https://wa.me/593997930366?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      {/* <section className="relative h-[75vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-wine-dark)]/90 via-[var(--color-wine-dark)]/70 to-transparent z-10" />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/San_Sebasti%C3%A1n_festivities_in_Sigsig%2C_Ecuador.jpg/800px-San_Sebasti%C3%A1n_festivities_in_Sigsig%2C_Ecuador.jpg"
            alt="Festividades San Sebastián Sígsig"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Estamos aquí para hacer de tu estancia una experiencia inolvidable. 
              Contáctanos para cualquier consulta o reservación.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="https://wa.me/593997930366?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20el%20Hotel%20Sígsig."
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center hover:scale-105 transition-transform"
              >
                Escribir por WhatsApp <ChevronRight className="ml-2" />
              </a>
              <a 
                href="tel:+593997930366"
                className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-4 rounded-full inline-flex items-center hover:bg-[var(--color-gold)] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" /> Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section> */}

{/* Hero Section */}
<section className="relative h-[75vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000]/90 to-transparent z-10" />
          <img 
            src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740973885/hotelsigsig/y0wsidnow8agvc2xsbrv.png"
            alt="Festividades San Sebastián Sígsig"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Estamos aquí para hacer de tu estancia una experiencia inolvidable. 
              Contáctanos para cualquier consulta o reservación.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/593997930366?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20el%20Hotel%20Sígsig."
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center hover:scale-105 transition-transform"
              >
                Escribir por WhatsApp <ChevronRight className="ml-2" />
              </a>
              <a 
                href="tel:+593997930366"
                className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-4 rounded-full inline-flex items-center hover:bg-[var(--color-gold)] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" /> Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Información Flotante */}
      <section className="relative z-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-[var(--color-gold)]" />
                <div>
                  <h3 className="font-medium">Ubicación</h3>
                  <p className="text-sm text-gray-600">A 1 cuadra del Terminal</p>
                  <p className="text-xs text-gray-500">Ignacio Arcentales y María Auxiliadora</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-[var(--color-gold)]" />
                <div>
                  <h3 className="font-medium">Atención 24/7</h3>
                  <p className="text-sm text-gray-600">Todos los días</p>
                  <p className="text-xs text-gray-500">Recepción siempre disponible</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-[var(--color-gold)]" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-sm text-gray-600">+593 99 793 0366</p>
                  <p className="text-xs text-gray-500">WhatsApp disponible</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-[var(--color-gold)]" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-gray-600">hotelsigsig@gmail.com</p>
                  <p className="text-xs text-gray-500">Respuesta en 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Info Cards */}
      {/* <section className="py-8 bg-white relative z-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Ubicación",
                description: "A 1 cuadra del Terminal Terrestre Sígsig",
                subtext: "Ignacio Arcentales y María Auxiliadora",
                action: () => window.open("https://goo.gl/maps/yourMapLink", "_blank")
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Atención 24/7",
                description: "Recepción las 24 horas",
                subtext: "Todos los días del año",
                action: () => window.open("https://wa.me/593997930366?text=Hola,%20quisiera%20consultar%20sobre%20sus%20horarios%20de%20atención.", "_blank")
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Teléfono",
                description: "+593 99 793 0366",
                subtext: "WhatsApp disponible",
                action: () => window.location.href = "tel:+593997930366"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                description: "hotelsigsig@gmail.com",
                subtext: "Respuesta en 24h",
                action: () => window.open("https://wa.me/593997930366?text=Hola,%20vi%20su%20correo%20y%20quisiera%20consultar%20sobre%20el%20hotel.", "_blank")
              }
            ].map((item, index) => (
              <div 
                key={index}
                onClick={item.action}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1"
              >
                <div className="text-[var(--color-gold)] mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium">
                  {item.description}
                </p>
                <p className="text-gray-500 text-sm">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Formulario y Mapa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                Escríbenos
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nombre Completo</label>
                  <input 
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                    placeholder="Ingrese su nombre"
                    required
                  />
                </div>
                {/* <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div> */}
                {/* <div>
                  <label className="block text-gray-700 mb-2">Teléfono</label>
                  <input 
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                    placeholder="+593 99 999 9999"
                    required
                  />
                </div> */}
                <div>
                  <label className="block text-gray-700 mb-2">Motivo de Contacto</label>
                  <select 
                    value={formData.motivo}
                    onChange={(e) => setFormData({...formData, motivo: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Reservación">Reservación</option>
                    <option value="Información">Información</option>
                    <option value="Eventos">Eventos</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-gold)] transition-colors h-32"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="metallic-gold text-white px-8 py-3 rounded-full w-full flex items-center justify-center hover:scale-105 transition-transform"
                >
                  Enviar Mensaje <ChevronRight className="ml-2" />
                </button>
              </form>
            </div>

            {/* Mapa e Indicaciones */}
            <div>
              <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                ¿Cómo Llegar?
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3789146856365!2d-78.8019444!3d-3.0486111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ccb8cf401dc675%3A0x8b2e6908c0c0b0a0!2sSigsig!5e0!3m2!1sen!2sec!4v1234567890"
                  width="100%" 
                  height="300" 
                  style={{border: 0}}
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Navigation className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--color-wine-dark)] mb-1">
                      Desde el Terminal Terrestre Sígsig
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Estamos a solo 1 cuadra. Camina hacia la calle Ignacio Arcentales 
                      y encontrarás nuestro hotel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Navigation className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-[var(--color-wine-dark)] mb-1">
                      Desde Cuenca
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Toma la vía Cuenca-Gualaceo-Sígsig (60km). Al llegar al Terminal 
                      Terrestre de Sígsig, estamos a una cuadra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-[var(--color-wine-dark)]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
            Lo que dicen nuestros huéspedes
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Experiencias reales de viajeros que han disfrutado de nuestra hospitalidad.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                origin: "Quito, Ecuador",
                comment: "Excelente ubicación y atención. El personal es muy amable y las habitaciones son muy cómodas. ¡Volveremos!",
                rating: 5,
                image: "https://randomuser.me/api/portraits/women/1.jpg"
              },
              {
                name: "John Smith",
                origin: "New York, USA",
                comment: "A hidden gem in Ecuador. The cultural experience was amazing and the hotel staff made us feel at home.",
                rating: 5,
                image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740974032/hotelsigsig/vqy78u4vs3wanjplxoqr.jpg"
              },
              {
                name: "Carlos Ramírez",
                origin: "Guayaquil, Ecuador",
                comment: "La mejor opción en Sígsig. Cerca de todo y con una vista espectacular. Recomendado al 100%.",
               
                
                rating: 5,
                image: "https://randomuser.me/api/portraits/men/2.jpg"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] text-lg">
                      {review.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{review.origin}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[var(--color-gold)]" />
                  ))}
                </div>
                <p className="text-gray-600 italic">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
            Síguenos en Redes Sociales
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Mantente al día con nuestras últimas novedades, eventos y promociones.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.facebook.com/HotelSigsig/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-wine-dark)] p-6 rounded-xl text-white hover:bg-[var(--color-gold)] transition-colors group w-48 text-center"
            >
              <Facebook className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <span className="block">Facebook</span>
              <span className="text-sm opacity-80">@HotelSigsig</span>
            </a>
            <a
              href="https://www.instagram.com/hotel_sigsig/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-wine-dark)] p-6 rounded-xl text-white hover:bg-[var(--color-gold)] transition-colors group w-48 text-center"
            >
              <Instagram className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <span className="block">Instagram</span>
              <span className="text-sm opacity-80">@hotel_sigsig</span>
            </a>
            <a
              href="https://wa.me/593997930366"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-wine-dark)] p-6 rounded-xl text-white hover:bg-[var(--color-gold)] transition-colors group w-48 text-center"
            >
              <WhatsApp className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <span className="block">WhatsApp</span>
              <span className="text-sm opacity-80">+593 99 793 0366</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#8c2f26] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-['Playfair_Display'] mb-6">
            ¿Listo para vivir nuevas experiencias en Sígsig?
          </h2>
          <p className="mb-8 text-white/80 max-w-2xl mx-auto">
            No dudes en contactarnos para cualquier consulta. Estamos aquí para hacer 
            de tu visita una experiencia inolvidable.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://wa.me/593997930366?text=Hola,%20me%20gustaría%20tener%20más%20información%20sobre%20el%20Hotel%20Sígsig."
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center hover:scale-105 transition-transform"
            >
              Contactar por WhatsApp <ChevronRight className="ml-2" />
            </a>
            <a 
              href="tel:+593997930366"
              className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-4 rounded-full inline-flex items-center hover:bg-[var(--color-gold)] hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" /> Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;