import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, Mountain, Palmtree, Fish, 
  Award, Users, ChevronRight, X, Calendar,
  Phone, Mail, MessageCircle
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

const ActivitiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'todas', name: 'Todas' },
    { id: 'cultura', name: 'Cultura' },
    { id: 'naturaleza', name: 'Naturaleza' },
    { id: 'aventura', name: 'Aventura' },
  ];

  const activities = [
    {
      id: 1,
      title: "Artesanía en Paja Toquilla",
      category: "cultura",
      image: "https://visitazuay.com/wp-content/uploads/2018/07/SIGSIG-SOMBRERERAS--1024x1024.jpg",
      description: "Descubre el arte del tejido de sombreros, Patrimonio Cultural de la Humanidad",
      icon: <Award />,
      featured: true
    },
    {
      id: 2,
      title: "Cueva Negra de Chobshi",
      category: "cultura",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ae/3e/24/la-cueva-negra-de-chobshi.jpg",
      description: "Explora este sitio arqueológico milenario",
      icon: <Landmark />
    },
    {
      id: 3,
      title: "Laguna de Kingor",
      category: "naturaleza",
      image: "https://visitazuay.com/wp-content/uploads/2024/12/LAGUNA-DE-KINGOR-1024x682.jpg",
      description: "Disfruta de impresionantes paisajes andinos",
      icon: <Mountain />
    },
    {
      id: 4,
      title: "Playa de Zhingate",
      category: "naturaleza",
      image: "https://guadalupitablog.wordpress.com/wp-content/uploads/2017/02/sigsig-playa-de-zhingate-2.gif",
      description: "Relájate junto al río Santa Bárbara",
      icon: <Palmtree />
    },
    {
      id: 5,
      title: "Pesca Deportiva",
      category: "aventura",
      image: "https://noveoutdoors.com/wp-content/uploads/2022/05/10-La-Trucha-Marron-y-arcoiris-Pesca-con-mosca-Nove-Outdoors-930x620px-COD-NO202042-Editar-2.jpg",
      description: "Practica la pesca en ríos cristalinos",
      icon: <Fish />
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#350a06]/5">
      {/* Fondo con patrón de paja toquilla mejorado */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M30 0v60M0 30h60M15 15h30M15 45h30" stroke="%23efb810" stroke-width="1"/%3E%3C/svg%3E')`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado con animación */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#efb810] font-medium mb-2 block">Explora</span>
          <h2 className="text-5xl font-['Playfair_Display'] text-[#350a06] mb-6">
            Sígsig, Tierra de Artesanos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un destino que combina patrimonio cultural, naturaleza exuberante y 
            aventuras inolvidables en el corazón del Azuay.
          </p>
        </motion.div>

        {/* Filtros de categorías */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === cat.id 
                  ? 'metallic-gold text-white' 
                  : 'bg-white text-[#350a06] hover:bg-[#350a06]/5'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Grid de actividades con animaciones */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {activities
              .filter(act => selectedCategory === 'todas' || act.category === selectedCategory)
              .map((activity) => (
                <motion.div
                  key={activity.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300
                    ${activity.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <div className="relative">
                    <img 
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#350a06]/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                      <div className="text-[#efb810]">
                        {activity.icon}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-['Playfair_Display'] mb-2">
                        {activity.title}
                      </h3>
                      <p className="opacity-90 mb-4">
                        {activity.description}
                      </p>
                      <button className="metallic-gold text-white px-6 py-2 rounded-full 
                        opacity-0 group-hover:opacity-100 transition-all duration-300 
                        transform translate-y-4 group-hover:translate-y-0
                        flex items-center">
                        Descubrir <ChevronRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Final Mejorado */}
        <motion.div 
          className="mt-20 text-center bg-[#8c2f26] rounded-2xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h30v30H0z" fill="none"/%3E%3Cpath d="M15 0v30M0 15h30" stroke="%23efb810" stroke-width="1"/%3E%3C/svg%3E')`,
              backgroundSize: '15px 15px'
            }}
          />
          
          <h3 className="text-3xl font-['Playfair_Display'] text-white mb-4">
            ¿Listo para vivir la experiencia Sígsig?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Reserva tu estadía en Hotel Sígsig y déjanos ser parte de tu aventura en este 
            mágico rincón del Ecuador.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  className="metallic-gold text-white px-8 py-4 rounded-full inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Planifica tu Visita <Calendar className="ml-2 w-5 h-5" />
                </motion.button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-['Playfair_Display'] text-[#350a06]">
                    Planifica tu Estadía
                  </DialogTitle>
                  <DialogDescription>
                    Completa el formulario y nos pondremos en contacto contigo para ayudarte 
                    a planificar tu visita perfecta a Sígsig.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre completo</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Fechas tentativas</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="DD/MM/YYYY - DD/MM/YYYY"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensaje</label>
                    <textarea
                      className="w-full p-2 border rounded-md h-24"
                      placeholder="Cuéntanos más sobre tu visita..."
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="metallic-gold text-white px-6 py-2 rounded-full">
                    Enviar consulta
                  </button>
                </div>
              </DialogContent>
            </Dialog>

            <motion.a
              href="https://wa.me/593997930366?text=Hola,%20me%20interesa%20hospedarme%20en%20Hotel%20Sígsig"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#350a06] px-8 py-4 rounded-full inline-flex items-center hover:bg-[#efb810] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserva Directa <MessageCircle className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;