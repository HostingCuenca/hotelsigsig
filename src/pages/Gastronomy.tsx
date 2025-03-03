// // // pages/Gastronomy.tsx
// // import { 
// //     Utensils, 
// //     Clock, 
// //     MapPin, 
// //     Star,
// //     ChevronRight,
// //     Coffee 
// //   } from 'lucide-react';
  
// //   const Gastronomy = () => {
// //     const typicalDishes = [
// //       {
// //         name: "Cuy Asado",
// //         image: "https://external-preview.redd.it/C5madCnWWTMG0EGU2uIpykEyCMIlZg5Ayb_4luBdDiI.jpg?auto=webp&s=34964a8499f05caf75b02d29c387378303088c77",
// //         description: "Plato tradicional ecuatoriano, preparado con técnicas ancestrales y acompañado de papas, mote y ají.",
// //         price: "$15.00",
// //         rating: 4.8,
// //         preparationTime: "45 min"
// //       },
// //       {
// //         name: "Hornado",
// //         image: "https://img.goraymi.com/2020/07/09/232ae9f7f8b88377e92d51f7699cd630_xl.jpg",
// //         description: "Cerdo horneado al estilo Sígsig, servido con llapingachos, mote y ensalada.",
// //         price: "$12.00",
// //         rating: 4.7,
// //         preparationTime: "30 min"
// //       },
// //       {
// //         name: "Locro de Papa",
// //         image: "https://sumesa.com.ec/wp-content/uploads/2021/09/LOCRO-DE-PAPAS.jpg",
// //         description: "Sopa cremosa de papas con queso, aguacate y condimentos locales.",
// //         price: "$8.00",
// //         rating: 4.6,
// //         preparationTime: "25 min"
// //       }
// //     ];
  
// //     const restaurants = [
// //       {
// //         name: "Restaurante El Mirador",
// //         image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjQxMjA2Mg%3D%3D/original/e553a262-1de9-490a-92a4-dad6d56fea4f.jpeg",
// //         specialty: "Comida Típica",
// //         schedule: "10:00 - 20:00",
// //         location: "Centro de Sígsig",
// //         rating: 4.5
// //       },
// //       {
// //         name: "Cafetería Colonial",
// //         image: "https://a0.muscache.com/im/pictures/miso/Hosting-32223356/original/ddf37906-1012-4779-bc1f-b9cbfb3c064a.jpeg",
// //         specialty: "Cafetería y Postres",
// //         schedule: "08:00 - 19:00",
// //         location: "Plaza Central",
// //         rating: 4.3
// //       }
// //     ];
  
// //     return (
// //       <div className="py-20">
// //         <div className="container mx-auto px-4">
// //           {/* Header Section */}
// //           <div className="text-center mb-16">
// //             <h1 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
// //               Gastronomía Tradicional
// //             </h1>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Descubre los sabores auténticos de Sígsig, donde cada plato cuenta una historia 
// //               de tradición y cultura.
// //             </p>
// //           </div>
  
// //           {/* Typical Dishes */}
// //           <div className="grid md:grid-cols-3 gap-8 mb-20">
// //             {typicalDishes.map((dish, index) => (
// //               <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
// //                 <div className="relative h-64">
// //                   <img 
// //                     src={dish.image}
// //                     alt={dish.name}
// //                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //                   />
// //                   <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-white px-4 py-2 rounded-full">
// //                     {dish.price}
// //                   </div>
// //                 </div>
// //                 <div className="p-6">
// //                   <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-3">
// //                     {dish.name}
// //                   </h3>
// //                   <p className="text-gray-600 mb-4">
// //                     {dish.description}
// //                   </p>
// //                   <div className="flex justify-between items-center mb-4">
// //                     <div className="flex items-center">
// //                       <Star className="w-5 h-5 text-[var(--color-gold)]" />
// //                       <span className="ml-2 text-gray-600">{dish.rating}</span>
// //                     </div>
// //                     <div className="flex items-center text-gray-600">
// //                       <Clock className="w-5 h-5 mr-2" />
// //                       {dish.preparationTime}
// //                     </div>
// //                   </div>
// //                   <button className="w-full metallic-gold text-white py-3 rounded-lg flex items-center justify-center">
// //                     Ordenar Ahora <ChevronRight className="ml-2" />
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
  
// //           {/* Restaurants Section */}
// //           <div className="mb-20">
// //             <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-12">
// //               Restaurantes Recomendados
// //             </h2>
// //             <div className="grid md:grid-cols-2 gap-8">
// //               {restaurants.map((restaurant, index) => (
// //                 <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex gap-6">
// //                   <img 
// //                     src={restaurant.image}
// //                     alt={restaurant.name}
// //                     className="w-40 h-40 object-cover rounded-lg"
// //                   />
// //                   <div className="flex-grow">
// //                     <h3 className="text-xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
// //                       {restaurant.name}
// //                     </h3>
// //                     <div className="space-y-2 mb-4">
// //                       <div className="flex items-center text-gray-600">
// //                         <Utensils className="w-4 h-4 mr-2" />
// //                         {restaurant.specialty}
// //                       </div>
// //                       <div className="flex items-center text-gray-600">
// //                         <Clock className="w-4 h-4 mr-2" />
// //                         {restaurant.schedule}
// //                       </div>
                    
// //                       <div className="flex items-center text-gray-600">
// //                         <MapPin className="w-4 h-4 mr-2" />
// //                         {restaurant.location}
// //                       </div>
// //                       <div className="flex items-center text-gray-600">
// //                         <Star className="w-4 h-4 mr-2 text-[var(--color-gold)]" />
// //                         <span>{restaurant.rating}</span>
// //                       </div>
// //                     </div>
// //                     <button className="metallic-gold text-white px-4 py-2 rounded-lg flex items-center text-sm">
// //                       Ver Menú <ChevronRight className="ml-2" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Special Events Section */}
// //           <div className="bg-white rounded-xl shadow-lg p-8">
// //             <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-8">
// //               Eventos Gastronómicos
// //             </h2>
// //             <div className="grid md:grid-cols-3 gap-6">
// //               {[
// //                 {
// //                   title: "Festival del Cuy",
// //                   date: "Septiembre 2024",
// //                   description: "Degustación del plato típico más importante de la región."
// //                 },
// //                 {
// //                   title: "Feria Gastronómica",
// //                   date: "Julio 2024",
// //                   description: "Muestra de la diversidad culinaria local."
// //                 },
// //                 {
// //                   title: "Tarde de Café Sigseño",
// //                   date: "Mensual",
// //                   description: "Cata de café de altura y dulces tradicionales."
// //                 }
// //               ].map((event, index) => (
// //                 <div key={index} className="border-l-4 border-[var(--color-gold)] bg-gray-50 p-4 rounded">
// //                   <h3 className="font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
// //                     {event.title}
// //                   </h3>
// //                   <p className="text-[var(--color-gold)] font-medium mb-2">{event.date}</p>
// //                   <p className="text-gray-600 text-sm">{event.description}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* CTA Section */}
// //           <div className="text-center mt-16">
// //             <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-4">
// //               ¿Buscas una experiencia gastronómica única?
// //             </h3>
// //             <p className="text-gray-600 mb-8">
// //               Reserva una mesa en nuestros restaurantes recomendados o consulta por nuestros tours gastronómicos.
// //             </p>
// //             <button className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center">
// //               Hacer Reservación <ChevronRight className="ml-2" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// // };

// // export default Gastronomy;


// // pages/Gastronomy.tsx
// import { 
//     Utensils, 
//     Clock, 
//     MapPin, 
//     Star,
//     ChevronRight,
//     Coffee,
//     Calendar,
//     Users,
//     Heart,
//     Award,
//     PhoneCall,
//     Search
//   } from 'lucide-react';
  
//   const Gastronomy = () => {
//     return (
//       <div>
//         {/* Hero Section */}
//         <section className="relative h-[75vh] flex items-center">
//           <div className="absolute inset-0">
//             <div className="absolute inset-0 bg-gradient-to-r from-[#330000]/90 via-[#330000]/70 to-transparent z-10" />
//             <img 
//               src="https://img.goraymi.com/2018/05/21/3709c2ca55d562a10b0f0eda333a771f_xl.jpg"
//               alt="Gastronomía de Sígsig"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="container mx-auto px-4 relative z-20">
//             <div className="max-w-3xl">
//               <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-6">
//                 Gastronomía Sigseña
//               </h1>
//               <p className="text-xl text-white/90 mb-8">
//                 Descubre los sabores auténticos de nuestra tierra, donde cada plato cuenta 
//                 una historia de tradición y cultura.
//               </p>
//               <a 
//                 href="https://wa.me/593997930366?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20la%20gastronomía%20de%20Sígsig%20y%20hacer%20una%20reserva." 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center group hover:scale-105 transition-transform"
//               >
//                 Reservar Mesa <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </section>
  
//         {/* Quick Stats/Info - Floating */}
//         <section className="relative z-20 -mt-16 container mx-auto px-4">
//           <div className="bg-white rounded-xl shadow-xl p-8">
//             <div className="grid md:grid-cols-4 gap-8">
//               <div className="flex items-center space-x-4">
//                 <Award className="w-8 h-8 text-[var(--color-gold)]" />
//                 <div>
//                   <h3 className="font-medium">Reconocimientos</h3>
//                   <p className="text-sm text-gray-600">Platos premiados</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Utensils className="w-8 h-8 text-[var(--color-gold)]" />
//                 <div>
//                   <h3 className="font-medium">Restaurantes</h3>
//                   <p className="text-sm text-gray-600">Cocina local</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Calendar className="w-8 h-8 text-[var(--color-gold)]" />
//                 <div>
//                   <h3 className="font-medium">Festival</h3>
//                   <p className="text-sm text-gray-600">Septiembre</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Users className="w-8 h-8 text-[var(--color-gold)]" />
//                 <div>
//                   <h3 className="font-medium">Experiencias</h3>
//                   <p className="text-sm text-gray-600">Tours culinarios</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
  
//         {/* Platos Típicos */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4">
//             <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
//               Platos Típicos
//             </h2>
//             <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
//               Descubre los sabores que hacen única a nuestra gastronomía, preparados con 
//               ingredientes locales y recetas tradicionales.
//             </p>
  
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   name: "Cuy Asado",
//                   image: "https://external-preview.redd.it/C5madCnWWTMG0EGU2uIpykEyCMIlZg5Ayb_4luBdDiI.jpg?auto=webp&s=34964a8499f05caf75b02d29c387378303088c77",
//                   description: "Plato tradicional ecuatoriano, preparado al carbón y servido con papas, mote y ají.",
//                   price: "$15.00",
//                   time: "45 min",
//                   spiciness: "Medio"
//                 },
//                 {
//                   name: "Hornado",
//                   image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740969879/hotelsigsig/vozjr8ekbmjks3xfdkrp.jpg",
//                   description: "Cerdo horneado tradicional, acompañado de mote, llapingachos y ensalada criolla.",
//                   price: "$12.00",
//                   time: "30 min",
//                   spiciness: "Suave"
//                 },
//                 {
//                   name: "Locro de Papa",
//                   image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740969947/hotelsigsig/locro%20de%20papa%20sigsig.webp",
//                   description: "Sopa cremosa de papas con queso, aguacate y condimentos locales.",
//                   price: "$8.00",
//                   time: "25 min",
//                   spiciness: "Suave"
//                 }
//               ].map((plato, index) => (
//                 <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
//                   <div className="relative h-64">
//                     <img 
//                       src={plato.image}
//                       alt={plato.name}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-white px-4 py-2 rounded-full">
//                       {plato.price}
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-3">
//                       {plato.name}
//                     </h3>
//                     <p className="text-gray-600 mb-4">{plato.description}</p>
//                     <div className="flex justify-between items-center mb-4">
//                       <div className="flex items-center text-gray-600">
//                         <Clock className="w-5 h-5 text-[var(--color-gold)] mr-2" />
//                         <span>{plato.time}</span>
//                       </div>
//                       <span className="text-gray-600">
//                         Picante: {plato.spiciness}
//                       </span>
//                     </div>
//                     <a 
//                       href={`https://wa.me/593997930366?text=Hola,%20me%20gustaría%20reservar%20una%20mesa%20para%20degustar%20el%20${plato.name}`}
//                       target="_blank"
//                       rel="noopener noreferrer" 
//                       className="block w-full metallic-gold text-white py-3 rounded-lg text-center font-medium hover:scale-105 transition-transform"
//                     >
//                       Reservar Ahora
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
  
//         {/* Restaurantes Recomendados */}
//         <section className="py-20 bg-[var(--color-wine-dark)]/5">
//           <div className="container mx-auto px-4">
//             <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
//               Restaurantes Recomendados
//             </h2>
//             <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
//               Los mejores lugares para disfrutar de la auténtica gastronomía sigseña.
//             </p>
  
//             <div className="grid md:grid-cols-2 gap-8">
//               {[
//                 {
//                   name: "Restaurante El Mirador",
//                   image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/97/08/c7/el-mirador.jpg",
//                   specialty: "Comida Típica",
//                   schedule: "10:00 - 20:00",
//                   location: "Centro de Sígsig",
//                   rating: 4.5,
//                   phone: "+593997930366"
//                 },
//                 {
//                   name: "Cafetería Colonial",
//                   image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/cafe-colonial.jpg",
//                   specialty: "Cafetería y Postres",
//                   schedule: "08:00 - 19:00",
//                   location: "Plaza Central",
//                   rating: 4.3,
//                   phone: "+593997930366"
//                 }
//               ].map((restaurant, index) => (
//                 <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex gap-6">
//                   <img 
//                     src={restaurant.image}
//                     alt={restaurant.name}
//                     className="w-40 h-40 object-cover rounded-lg"
//                   />
//                   <div className="flex-grow">
//                     <h3 className="text-xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-2">
//                       {restaurant.name}
//                     </h3>
//                     <div className="space-y-2 mb-4">
//                       <div className="flex items-center text-gray-600">
//                         <Utensils className="w-4 h-4 mr-2" />
//                         {restaurant.specialty}
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <Clock className="w-4 h-4 mr-2" />
//                         {restaurant.schedule}
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <MapPin className="w-4 h-4 mr-2" />
//                         {restaurant.location}
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <Star className="w-4 h-4 mr-2 text-[var(--color-gold)]" />
//                         <span>{restaurant.rating}</span>
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       <a 
//                         href={`tel:${restaurant.phone}`}
//                         className="px-4 py-2 rounded-lg border-2 border-[var(--color-wine-dark)] text-[var(--color-wine-dark)] hover:bg-[var(--color-wine-dark)] hover:text-white transition-colors flex items-center"
//                       >
//                         <PhoneCall className="w-4 h-4 mr-2" /> Llamar
//                       </a>
//                       <a 
//                         href={`https://wa.me/${restaurant.phone.replace('+', '')}?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20${restaurant.name}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-4 py-2 rounded-lg metallic-gold text-white flex items-center hover:scale-105 transition-transform"
//                       >
//                         Reservar <ChevronRight className="ml-2" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
  
//         {/* Festival Gastronómico */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
//                   Festival Gastronómico
//                 </h2>
//                 <p className="text-gray-600 mb-6">
//                   Cada septiembre, Sígsig celebra su Festival Gastronómico, donde podrás 
//                   degustar los mejores platos de la región, participar en talleres de cocina 
//                   y disfrutar de presentaciones culturales.
//                 </p>
//                 <div className="grid grid-cols-2 gap-6 mb-8">
//                   <div className="flex items-start space-x-3">
//                     <Calendar className="w-6 h-6 text-[var(--color-gold)]" />
//                     <div>
//                       <h4 className="font-medium mb-1">Fecha</h4>
//                       <p className="text-sm text-gray-600">15-17 Septiembre</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <MapPin className="w-6 h-6 text-[var(--color-gold)]" />
//                     <div>
//                       <h4 className="font-medium mb-1">Ubicación</h4>
//                       <p className="text-sm text-gray-600">Plaza Central</p>
//                     </div>
//                   </div>
//                 </div>
//                 <button 
//                 onClick={() => setCurrentPage('actividades')}
//                 className="metallic-gold text-white px-8 py-3 rounded-full inline-flex items-center hover:scale-105 transition-transform"
//               >
//                 Ver Más Eventos <ChevronRight className="ml-2" />
//               </button>
//             </div>
//             <div className="relative">
//               <img 
//                 src="https://img.goraymi.com/2018/05/21/3709c2ca55d562a10b0f0eda333a771f_xl.jpg"
//                 alt="Festival Gastronómico"
//                 className="rounded-xl shadow-xl w-full h-[500px] object-cover"
//               />
//               <div className="absolute -bottom-4 -right-4 -left-4 -top-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tour Gastronómico */}
//       <section className="py-20 bg-[var(--color-wine-dark)] text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-['Playfair_Display'] mb-6">
//             Tour Gastronómico Sígsig
//           </h2>
//           <p className="mb-8 text-white/80 max-w-2xl mx-auto">
//             ¿Te gustaría vivir una experiencia culinaria completa? Reserva nuestro tour 
//             gastronómico y descubre los secretos de la cocina sigseña, visitando mercados 
//             locales, aprendiendo recetas tradicionales y degustando los mejores platos.
//           </p>
//           <div className="flex justify-center gap-4 flex-wrap">
//             <a 
//               href="https://wa.me/593997930366?text=Hola,%20me%20interesa%20el%20tour%20gastronómico%20de%20Sígsig.%20¿Podrían%20darme%20más%20información?" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center hover:scale-105 transition-transform"
//             >
//               Reservar Tour <ChevronRight className="ml-2" />
//             </a>
//             <a 
//               href="tel:+593997930366"
//               className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-4 rounded-full inline-flex items-center hover:bg-[var(--color-gold)] hover:text-white transition-colors"
//             >
//               <PhoneCall className="w-5 h-5 mr-2" /> Llamar para Información
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Hotel Sígsig CTA */}
//       <section className="py-20 bg-[var(--color-cream)]">
//         <div className="container mx-auto px-4">
//           <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
//                   Hospédate en Hotel Sígsig
//                 </h2>
//                 <p className="text-gray-600 mb-6">
//                   Disfruta de la mejor gastronomía local y hospédate con nosotros. 
//                   Ubicados estratégicamente en el corazón de Sígsig, cerca de los 
//                   mejores restaurantes y atracciones turísticas.
//                 </p>
//                 <div className="space-y-4 mb-8">
//                   <div className="flex items-center">
//                     <Star className="w-5 h-5 text-[var(--color-gold)] mr-2" />
//                     <span>Desayuno tradicional incluido</span>
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin className="w-5 h-5 text-[var(--color-gold)] mr-2" />
//                     <span>Ubicación céntrica</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Heart className="w-5 h-5 text-[var(--color-gold)] mr-2" />
//                     <span>Recomendaciones gastronómicas personalizadas</span>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <button 
//                     onClick={() => setCurrentPage('habitaciones')}
//                     className="metallic-gold text-white px-6 py-3 rounded-full inline-flex items-center hover:scale-105 transition-transform"
//                   >
//                     Ver Habitaciones <ChevronRight className="ml-2" />
//                   </button>
//                   <a 
//                     href="https://wa.me/593997930366?text=Hola,%20me%20gustaría%20reservar%20una%20habitación%20y%20conocer%20más%20sobre%20sus%20paquetes%20gastronómicos." 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-6 py-3 rounded-full inline-flex items-center hover:bg-[var(--color-gold)] hover:text-white transition-colors"
//                   >
//                     Reservar Ahora
//                   </a>
//                 </div>
//               </div>
//               <div className="relative">
//                 <img 
//                   src="https://www.turismo.gob.ec/wp-content/uploads/2020/11/KIK5550-3-scaled.jpg"
//                   alt="Hotel Sígsig"
//                   className="rounded-xl shadow-lg w-full h-[400px] object-cover"
//                 />
//                 <div className="absolute -inset-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gastronomy;

// pages/Gastronomy.tsx
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Star,
  ChevronRight,
  Coffee,
  Calendar,
  Users,
  Heart,
  Award,
  PhoneCall,
  Search,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';

const Gastronomy = () => {
  // Estado para manejar la navegación
  const [currentPage, setCurrentPage] = useState('gastronomia');
  
  // Número de WhatsApp unificado para todas las CTAs
  const whatsappNumber = "593997930366";
  
  // Función para crear enlaces de WhatsApp con mensajes predefinidos
  const createWhatsAppLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#330000]/90 via-[#330000]/70 to-transparent z-10" />
          <img 
            src="https://sanjosedesigchos.com/wp-content/uploads/2022/05/cuy-plato-tipico-de-san-jose-de-sigchos-hosteria-ecuador-1024x683.jpg"
            alt="Gastronomía de Sígsig"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-6">
              Gastronomía Sigseña
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Descubre los sabores auténticos de nuestra tierra, donde cada plato cuenta 
              una historia de tradición y cultura.
            </p>
            <a 
              href={createWhatsAppLink("Hola, me gustaría conocer más sobre la gastronomía de Sígsig y hacer una reserva.")}
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center group hover:scale-105 transition-transform"
            >
              Reservar Mesa <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats/Info - Floating */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Reconocimientos</h3>
                <p className="text-sm text-gray-600">Platos premiados</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Utensils className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Variedad</h3>
                <p className="text-sm text-gray-600">Gastronomía local</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Festival</h3>
                <p className="text-sm text-gray-600">Septiembre</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-[var(--color-gold)]" />
              <div>
                <h3 className="font-medium">Experiencias</h3>
                <p className="text-sm text-gray-600">Para todos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección de Trucha - Destacado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[var(--color-cream)] rounded-xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                  Nuestra Especialidad: Trucha Sigseña
                </h2>
                <p className="text-gray-600 mb-6">
                  La trucha de Sígsig es reconocida por su frescura y sabor único, capturada en los 
                  cristalinos ríos de nuestras montañas y preparada según recetas tradicionales que 
                  se han transmitido por generaciones.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-[var(--color-gold)] mr-2" />
                    <span>Pescada fresca diariamente</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-5 h-5 text-[var(--color-gold)] mr-2" />
                    <span>Preparada al ajillo, a la plancha o frita</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[var(--color-gold)] mr-2" />
                    <span>Lista en menos de 30 minutos</span>
                  </div>
                </div>
                <a 
                  href={createWhatsAppLink("Hola, me gustaría reservar para probar la trucha de Sígsig")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center group hover:scale-105 transition-transform"
                >
                  Reservar Degustación <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dzfakhjlh/image/upload/v1740970433/hotelsigsig/trucha%20sigsig.avif"
                  alt="Trucha de Sígsig"
                  className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute -inset-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platos Típicos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
            Platos Típicos
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Descubre los sabores que hacen única a nuestra gastronomía, preparados con 
            ingredientes locales y recetas tradicionales.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Cuy Asado",
                image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740973143/hotelsigsig/cuy%20asado%20sigsig.png",
                description: "Plato tradicional ecuatoriano, preparado al carbón y servido con papas, mote y ají.",
                price: "$15.00",
                time: "45 min",
                spiciness: "Medio"
              },
              {
                name: "Hornado",
                image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740969879/hotelsigsig/vozjr8ekbmjks3xfdkrp.jpg",
                description: "Cerdo horneado tradicional, acompañado de mote, llapingachos y ensalada criolla.",
                price: "$4.00",
                time: "30 min",
                spiciness: "Suave"
              },
              {
                name: "Locro de Papa",
                image: "https://res.cloudinary.com/dzfakhjlh/image/upload/v1740969947/hotelsigsig/locro%20de%20papa%20sigsig.webp",
                description: "Sopa cremosa de papas con queso, aguacate y condimentos locales.",
                price: "$4.00",
                time: "25 min",
                spiciness: "Suave"
              }
            ].map((plato, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src={plato.image}
                    alt={plato.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-white px-4 py-2 rounded-full">
                    {plato.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-3">
                    {plato.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plato.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 text-[var(--color-gold)] mr-2" />
                      <span>{plato.time}</span>
                    </div>
                    <span className="text-gray-600">
                      Picante: {plato.spiciness}
                    </span>
                  </div>
                  <a 
                    href={createWhatsAppLink(`Hola, me gustaría reservar una mesa para degustar el ${plato.name}`)}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="block w-full metallic-gold text-white py-3 rounded-lg text-center font-medium hover:scale-105 transition-transform"
                  >
                    Reservar Ahora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variedad Gastronómica - Reemplaza Restaurantes Recomendados */}
      <section className="py-20 bg-[var(--color-wine-dark)]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] text-center mb-6">
            Variedad Gastronómica
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Sígsig ofrece una amplia variedad de lugares para disfrutar de la gastronomía local, 
            desde restaurantes tradicionales hasta cafeterías y bares.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                type: "Restaurantes de Trucha",
                icon: <Utensils className="w-12 h-12 text-[var(--color-gold)] mb-4" />,
                description: "Especialistas en la preparación de trucha fresca de nuestros ríos."
              },
              {
                type: "Asaderos Tradicionales",
                icon: <Coffee className="w-12 h-12 text-[var(--color-gold)] mb-4" />,
                description: "Cuy, hornado y otras carnes preparadas al estilo tradicional."
              },
              {
                type: "Cafeterías",
                icon: <Coffee className="w-12 h-12 text-[var(--color-gold)] mb-4" />,
                description: "Café local acompañado de dulces y postres típicos."
              },
              {
                type: "Bares y Licores",
                icon: <Award className="w-12 h-12 text-[var(--color-gold)] mb-4" />,
                description: "Bebidas típicas y cocteles preparados con productos locales."
              }
            ].map((lugar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                {lugar.icon}
                <h3 className="text-xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-3">
                  {lugar.type}
                </h3>
                <p className="text-gray-600 mb-6">{lugar.description}</p>
                <a 
                  href="https://www.google.com/maps/search/restaurantes+sigsig/@-3.0065787,-79.0706315,11z/data=!3m1!4b1?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--color-wine-dark)] font-medium hover:text-[var(--color-gold)] transition-colors"
                >
                  Buscar en Google Maps <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/maps/search/restaurantes+sigsig/@-3.0065787,-79.0706315,11z/data=!3m1!4b1?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center group hover:scale-105 transition-transform"
            >
              Buscar Restaurantes <Search className="ml-2 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Festival Gastronómico */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                Festival Gastronómico
              </h2>
              <p className="text-gray-600 mb-6">
                Cada septiembre, Sígsig celebra su Festival Gastronómico, donde podrás 
                degustar los mejores platos de la región, participar en talleres de cocina 
                y disfrutar de presentaciones culturales.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-[var(--color-gold)]" />
                  <div>
                    <h4 className="font-medium mb-1">Fecha</h4>
                    <p className="text-sm text-gray-600">15-17 Septiembre</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-[var(--color-gold)]" />
                  <div>
                    <h4 className="font-medium mb-1">Ubicación</h4>
                    <p className="text-sm text-gray-600">Plaza Central</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('actividades')}
                className="metallic-gold text-white px-8 py-3 rounded-full inline-flex items-center hover:scale-105 transition-transform"
              >
                Ver Más Eventos <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://img.goraymi.com/2018/05/21/3709c2ca55d562a10b0f0eda333a771f_xl.jpg"
                alt="Festival Gastronómico"
                className="rounded-xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 -left-4 -top-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Gastronómico */}
      <section className="py-20 bg-[var(--color-wine-dark)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-['Playfair_Display'] mb-6">
            Experiencia Gastronómica Sígsig
          </h2>
          <p className="mb-8 text-white/80 max-w-2xl mx-auto">
            ¿Te gustaría conocer y degustar los sabores auténticos de Sígsig? 
            Hospédate con nosotros y descubre la riqueza gastronómica de nuestro cantón y
            de nuestra cultura, Para todo tipo de gustos.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href={createWhatsAppLink("Hola, me interesa conocer más sobre las experiencias gastronómicas en Sígsig. ¿Podrían darme más información?")}
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center hover:scale-105 transition-transform"
            >
              Reservar Experiencia <ChevronRight className="ml-2" />
            </a>
            <a 
              href="tel:+593997930366"
              className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-4 rounded-full inline-flex items-center hover:bg-[var(--color-gold)] hover:text-white transition-colors"
            >
              <PhoneCall className="w-5 h-5 mr-2" /> Llamar para Información
            </a>
          </div>
        </div>
      </section>

      {/* Hotel Sígsig CTA */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-['Playfair_Display'] text-[var(--color-wine-dark)] mb-6">
                  Hospédate en Hotel Sígsig
                </h2>
                <p className="text-gray-600 mb-6">
                  Disfruta de la mejor gastronomía local y hospédate con nosotros. 
                  Ubicados estratégicamente en el corazón de Sígsig, cerca de los 
                  mejores restaurantes y atracciones turísticas.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-[var(--color-gold)] mr-2" />
                    <span>Desayuno tradicional incluido</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-[var(--color-gold)] mr-2" />
                    <span>Ubicación céntrica</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-[var(--color-gold)] mr-2" />
                    <span>Recomendaciones gastronómicas personalizadas</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setCurrentPage('habitaciones')}
                    className="metallic-gold text-white px-6 py-3 rounded-full inline-flex items-center hover:scale-105 transition-transform"
                  >
                    Ver Habitaciones <ChevronRight className="ml-2" />
                  </button>
                  <a 
                    href={createWhatsAppLink("Hola, me gustaría reservar una habitación y conocer más sobre sus paquetes gastronómicos.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-6 py-3 rounded-full inline-flex items-center hover:bg-[var(--color-gold)] hover:text-white transition-colors"
                  >
                    Reservar Ahora
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://www.turismo.gob.ec/wp-content/uploads/2020/11/KIK5550-3-scaled.jpg"
                  alt="Hotel Sígsig"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
                <div className="absolute -inset-4 border-2 border-[var(--color-gold)]/20 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gastronomy;