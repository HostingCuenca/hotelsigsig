// // pages/Activities.tsx
// import { 
//     Camera, 
//     Mountain, 
//     Fish, 
//     Coffee,
//     ChevronRight,
//     Calendar 
//   } from 'lucide-react';
  
//   const Activities = () => {
//     const activities = [
//       {
//         title: "Cueva Negra de Chobshi",
//         image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ae/3e/24/la-cueva-negra-de-chobshi.jpg?w=1200&h=-1&s=1",
//         description: "Explora este fascinante sitio arqueológico que data de hace 10.000 años. Descubre la historia de nuestros ancestros y maravíllate con las formaciones rocosas naturales.",
//         duration: "3-4 horas",
//         difficulty: "Moderada",
//         category: "Arqueología"
//       },
//       {
//         title: "Pesca en el Río Santa Bárbara",
//         image: "https://noveoutdoors.com/wp-content/uploads/2022/05/10-La-Trucha-Marron-y-arcoiris-Pesca-con-mosca-Nove-Outdoors-930x620px-COD-NO202042-Editar-2.jpg",
//         description: "Disfruta de una mañana de pesca deportiva en las cristalinas aguas del río Santa Bárbara. Ideal para principiantes y expertos.",
//         duration: "4 horas",
//         difficulty: "Fácil",
//         category: "Deportes"
//       },
//       {
//         title: "Taller de Tejido de Paja Toquilla",
//         image: "https://visitazuay.com/wp-content/uploads/2018/07/SIGSIG-SOMBRERERAS--1024x1024.jpg",
//         description: "Aprende el arte ancestral del tejido de sombreros de paja toquilla, Patrimonio Cultural Inmaterial de la Humanidad.",
//         duration: "2 horas",
//         difficulty: "Fácil",
//         category: "Cultural"
//       },
//       {
//         title: "Senderismo en Fasayñán",
//         image: "https://www.agricultura.gob.ec/wp-content/uploads/2019/03/Captura-de-pantalla-2019-03-19-a-las-08.38.07.png",
//         description: "Recorre los senderos del mítico cerro Fasayñán y descubre la flora y fauna única de la región.",
//         duration: "6-7 horas",
//         difficulty: "Difícil",
//         category: "Aventura"
//       }
//     ];
  
//     return (
//       <div className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           {/* Header Section */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
//               Actividades y Experiencias
//             </h1>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Descubre la riqueza cultural y natural de Sígsig a través de nuestras experiencias 
//               cuidadosamente seleccionadas. Cada actividad está diseñada para brindarte una 
//               perspectiva única de nuestra región.
//             </p>
//           </div>
  
//           {/* Activities Grid */}
//           <div className="grid md:grid-cols-2 gap-8">
//             {activities.map((activity, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
//                 <div className="relative h-64">
//                   <img 
//                     src={activity.image}
//                     alt={activity.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                     <span className="inline-block px-3 py-1 bg-[var(--color-gold)] rounded-full text-sm font-medium mb-2">
//                       {activity.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-3">
//                     {activity.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     {activity.description}
//                   </p>
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center text-gray-600">
//                       <Calendar className="w-4 h-4 mr-2 text-[var(--color-gold)]" />
//                       <span className="text-sm">{activity.duration}</span>
//                     </div>
//                     <span className={`px-3 py-1 rounded-full text-sm ${
//                       activity.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
//                       activity.difficulty === 'Moderada' ? 'bg-yellow-100 text-yellow-800' :
//                       'bg-red-100 text-red-800'
//                     }`}>
//                       {activity.difficulty}
//                     </span>
//                   </div>
//                   <button className="w-full metallic-gold text-white py-3 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
//                     Reservar Experiencia <ChevronRight className="ml-2" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
  
//           {/* Call to Action */}
//           <div className="mt-16 text-center">
//             <p className="text-gray-600 mb-8">
//               ¿Buscas una experiencia personalizada? Contáctanos para crear un itinerario a tu medida.
//             </p>
//             <button className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center hover:scale-105 transition-transform">
//               Contactar Ahora <ChevronRight className="ml-2" />
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Activities;


// pages/Activities.tsx
import { 
    Camera, 
    Mountain, 
    Fish, 
    Coffee,
    ChevronRight,
    Calendar,
    Clock,
    Users,
    MapPin,
    Star,
    Heart,
    Sun,
    Cloud,
    Umbrella,
    MessageCircle,
    Award
  } from 'lucide-react';
  
  const Activities = () => {
    return (
      <div>
        {/* Hero Section */}
        <section className="relative h-[75vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#330000]/90 via-[#330000]/70 to-transparent z-10" />
            <img 
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ae/3e/24/la-cueva-negra-de-chobshi.jpg"
              alt="Cueva Negra de Chobshi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] text-white mb-6">
                Descubre la Magia de Sígsig
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Sumérgete en experiencias únicas que combinan naturaleza, cultura y tradición 
                en uno de los rincones más hermosos del Ecuador.
              </p>
              <button className="metallic-gold text-white px-8 py-4 rounded-full flex items-center text-lg">
                Explorar Actividades <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </section>
  
        {/* Información del Clima */}
        <section className="py-8 bg-white shadow-md relative z-20 -mt-16 container mx-auto rounded-xl">
          <div className="grid md:grid-cols-4 gap-6 px-6">
            <div className="flex items-center space-x-4">
              <Sun className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Clima Ideal</h3>
                <p className="text-sm text-gray-600">15-22°C todo el año</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Cloud className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Mejor Temporada</h3>
                <p className="text-sm text-gray-600">Junio a Septiembre</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Umbrella className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Temporada Lluviosa</h3>
                <p className="text-sm text-gray-600">Enero a Abril</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MessageCircle className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Guías Locales</h3>
                <p className="text-sm text-gray-600">Disponibles 24/7</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Actividades Principales */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-16">
              Experiencias Únicas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ruta Arqueológica",
                  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ae/3e/24/la-cueva-negra-de-chobshi.jpg",
                  description: "Explora la Cueva Negra de Chobshi y el Castillo de Duma, vestigios de nuestros ancestros.",
                  duration: "4 horas",
                  difficulty: "Moderada",
                  price: "$25",
                  includes: ["Guía local", "Transporte", "Refrigerio", "Equipo de seguridad"]
                },
                {
                  title: "Arte en Paja Toquilla",
                  image: "https://visitazuay.com/wp-content/uploads/2018/07/SIGSIG-SOMBRERERAS--1024x1024.jpg",
                  description: "Aprende el arte del tejido de sombreros de paja toquilla con artesanas locales.",
                  duration: "3 horas",
                  difficulty: "Fácil",
                  price: "$20",
                  includes: ["Materiales", "Clase práctica", "Certificado", "Refrigerio"]
                },
                {
                  title: "Aventura en Kingor",
                  image: "https://visitazuay.com/wp-content/uploads/2024/12/LAGUNA-DE-KINGOR-1024x682.jpg",
                  description: "Trekking a la hermosa Laguna de Kingor, paseo en canoa, rodeada de páramo andino.",
                  duration: "6 horas",
                  difficulty: "Alta",
                  price: "$35",
                  includes: ["Guía especializado", "Transporte 4x4", "Almuerzo", "Equipo"]
                }
              ].map((activity, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64">
                    <img 
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-white px-4 py-2 rounded-full">
                      {activity.price}/persona
                    </div> */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-[var(--color-gold)]" />
                        <span>{activity.duration}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        activity.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
                        activity.difficulty === 'Moderada' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {activity.difficulty}
                      </span>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Incluye:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {activity.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Star className="w-3 h-3 text-[var(--color-gold)] mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <button className="w-full metallic-gold text-white py-3 rounded-lg flex items-center justify-center">
                      Reservar Actividad <ChevronRight className="ml-2" />
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Actividades por Temporada */}
        <section className="py-20 bg-[var(--color-wine-dark)]/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
              Actividades por Temporada
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Cada temporada en Sígsig ofrece experiencias únicas. Planifica tu visita según 
              tus intereses y la época del año.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  season: "Primavera",
                  months: "Marzo - Mayo",
                  activities: [
                    "Festival de la Chola Sigseña",
                    "Observación de flores",
                    "Rutas de senderismo",
                    "Fotografía paisajística"
                  ],
                  image: "https://ame.gob.ec/wp-content/uploads/2017/04/sigsig.jpg"
                },
                {
                  season: "Verano",
                  months: "Junio - Agosto",
                  activities: [
                    "Festival del Sombrero",
                    "Pesca deportiva",
                    "Camping",
                    "Ciclismo de montaña"
                  ],
                  image: "https://noveoutdoors.com/wp-content/uploads/2022/05/10-La-Trucha-Marron-y-arcoiris-Pesca-con-mosca-Nove-Outdoors-930x620px-COD-NO202042-Editar-2.jpg"
                },
                {
                  season: "Otoño",
                  months: "Septiembre - Noviembre",
                  activities: [
                    "Festival Gastronómico",
                    "Talleres artesanales",
                    "Trekking",
                    "Visitas culturales"
                  ],
                  image: "https://external-preview.redd.it/C5madCnWWTMG0EGU2uIpykEyCMIlZg5Ayb_4luBdDiI.jpg?auto=webp&s=34964a8499f05caf75b02d29c387378303088c77"
                },
                {
                  season: "Invierno",
                  months: "Diciembre - Febrero",
                  activities: [
                    "Festividades navideñas",
                    "Gastronomía típica",
                    "Tours históricos",
                    "Compras artesanales"
                  ],
                  image: "https://visitazuay.com/wp-content/uploads/2018/07/SIGSIG-SOMBRERERAS--1024x1024.jpg"
                }
              ].map((season, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="relative h-48">
                    <img 
                      src={season.image}
                      alt={season.season}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-['Playfair_Display'] text-white">
                        {season.season}
                      </h3>
                      <p className="text-white/80 text-sm">{season.months}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {season.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Star className="w-4 h-4 text-[var(--color-gold)] mr-2" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Testimonios */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-16">
              Experiencias de Visitantes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "María González",
                  location: "Cuenca, Ecuador",
                  comment: "La visita a la Cueva Negra fue increíble. El guía fue muy conocedor y la experiencia superó mis expectativas.",
                  rating: 5
                },
                {
                  name: "John Smith",
                  location: "Estados Unidos",
                  comment: "Aprender a tejer sombreros de paja toquilla fue una experiencia única. Las artesanas son verdaderas maestras.",
                  rating: 5
                },
                {
                  name: "Carlos Ramírez",
                  location: "Quito, Ecuador",
                  comment: "El trekking a la Laguna de Kingor fue espectacular. Los paisajes son impresionantes y el guía muy profesional.",
                  rating: 4
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[var(--color-gold)]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-medium text-[var(--color-wine-dark)]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                
                
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Información Importante */}
        <section className="py-20 bg-[var(--color-wine-dark)]/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Recomendaciones */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                  Recomendaciones
                </h3>
                <ul className="space-y-4">
                  {[
                    "Traer ropa abrigada y cómoda para las actividades al aire libre",
                    "Usar protector solar y gorra, incluso en días nublados",
                    "Llevar cámara fotográfica para capturar los momentos",
                    "Hidratarse constantemente debido a la altura",
                    "Reservar las actividades con anticipación",
                    "Seguir las instrucciones de los guías locales"
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-5 h-5 text-[var(--color-gold)] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ¿Qué Llevar? */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                  ¿Qué Llevar?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Trekking",
                      items: [
                        "Zapatos de montaña",
                        "Ropa impermeable",
                        "Mochila pequeña",
                        "Botella de agua"
                      ]
                    },
                    {
                      title: "Talleres Artesanales",
                      items: [
                        "Ropa cómoda",
                        "Cámara fotográfica",
                        "Bloc de notas",
                        "Dinero en efectivo"
                      ]
                    }
                  ].map((category, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-[var(--color-wine-dark)] mb-3">
                        {category.title}
                      </h4>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm">
                            <Star className="w-3 h-3 text-[var(--color-gold)] mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-[#8c2f26] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-['Playfair_Display'] mb-6">
              ¿Listo para la aventura?
            </h2>
            <p className="mb-8 text-white/80 max-w-2xl mx-auto">
              Reserva tus actividades con anticipación y obtén descuentos especiales. 
              Contáctanos para crear un itinerario personalizado.
            </p>
            <div className="flex justify-center gap-4">
              <button className="metallic-gold text-white px-8 py-4 rounded-full flex items-center hover:scale-105 transition-transform">
                Reservar por WhatsApp <ChevronRight className="ml-2" />
              </button>
              <button className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-4 rounded-full flex items-center hover:bg-[var(--color-gold)] hover:text-white transition-colors">
                Descargar Guía PDF <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Modal de Reserva (opcional) */}
        {/* Puedes agregar un modal para el formulario de reserva */}
      </div>
    );
};

export default Activities;