
// // // App.tsx
// // import { useState, useEffect } from 'react';
// // import { Routes, Route, useLocation } from 'react-router-dom';
// // import { Page } from './types';
// // import Navbar from './components/layout/Navbar';
// // import Footer from './components/layout/Footer';
// // import WhatsAppButton from './components/layout/WhatsAppButton';

// // // Pages
// // import Home from './pages/Home';
// // import Rooms from './pages/Rooms';
// // import Activities from './pages/Activities';
// // import Tourism from './pages/Tourism';
// // import Contact from './pages/Contact';
// // import Gastronomy from './pages/Gastronomy';

// // // Función que convierte ruta URL a Page
// // const getPageFromPath = (path: string): Page => {
// //   switch (path) {
// //     case '/':
// //     case '/inicio':
// //       return 'inicio';
// //     case '/habitaciones':
// //       return 'habitaciones';
// //     case '/actividades':
// //       return 'actividades';
// //     case '/turismo':
// //       return 'turismo';
// //     case '/gastronomia':
// //       return 'gastronomia';
// //     case '/contacto':
// //       return 'contacto';
// //     default:
// //       return 'inicio';
// //   }
// // };

// // const App = () => {
// //   const location = useLocation();
  
// //   // Determinar la página actual basada en la ruta
// //   const [currentPage, setCurrentPage] = useState<Page>(
// //     getPageFromPath(location.pathname)
// //   );
  
// //   // Actualizar currentPage cuando cambia la ruta
// //   useEffect(() => {
// //     setCurrentPage(getPageFromPath(location.pathname));
// //   }, [location.pathname]);
  
// //   // Determinar si estamos en la página de inicio
// //   const isHomePage = currentPage === 'inicio';
  
// //   return (
// //     <div className="font-['Poppins'] min-h-screen flex flex-col">
// //       <Navbar 
// //         currentPage={currentPage}
// //         setCurrentPage={setCurrentPage}
// //         forceColored={!isHomePage}
// //       />
// //       <main className="flex-grow">
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/inicio" element={<Home />} />
// //           <Route path="/habitaciones" element={<Rooms />} />
// //           <Route path="/actividades" element={<Activities />} />
// //           <Route path="/turismo" element={<Tourism />} />
// //           <Route path="/gastronomia" element={<Gastronomy />} />
// //           <Route path="/contacto" element={<Contact />} />
// //           {/* Ruta para manejar páginas no encontradas */}
// //           <Route path="*" element={<Home />} />
// //         </Routes>
// //       </main>
// //       <WhatsAppButton />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;


// // App.tsx
// import { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { Page } from './types';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import WhatsAppButton from './components/layout/WhatsAppButton';
// // Pages
// import Home from './pages/Home';
// import Rooms from './pages/Rooms';
// import Activities from './pages/Activities';
// import Tourism from './pages/Tourism';
// import Contact from './pages/Contact';
// import Gastronomy from './pages/Gastronomy';

// // Componente para desplazar la página hacia arriba cuando cambia la ruta
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
  
//   useEffect(() => {
//     // Comportamiento suave para mejor experiencia de usuario
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }, [pathname]);
  
//   return null;
// };

// // Función que convierte ruta URL a Page
// const getPageFromPath = (path: string): Page => {
//   switch (path) {
//     case '/':
//     case '/inicio':
//       return 'inicio';
//     case '/habitaciones':
//       return 'habitaciones';
//     case '/actividades':
//       return 'actividades';
//     case '/turismo':
//       return 'turismo';
//     case '/gastronomia':
//       return 'gastronomia';
//     case '/contacto':
//       return 'contacto';
//     default:
//       return 'inicio';
//   }
// };

// const App = () => {
//   const location = useLocation();
 
//   // Determinar la página actual basada en la ruta
//   const [currentPage, setCurrentPage] = useState<Page>(
//     getPageFromPath(location.pathname)
//   );
 
//   // Actualizar currentPage cuando cambia la ruta
//   useEffect(() => {
//     setCurrentPage(getPageFromPath(location.pathname));
//   }, [location.pathname]);
 
//   // Determinar si estamos en la página de inicio
//   const isHomePage = currentPage === 'inicio';
 
//   return (
//     <div className="font-['Poppins'] min-h-screen flex flex-col">
//       {/* Componente para manejar el desplazamiento */}
//       <ScrollToTop />
      
//       <Navbar
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         forceColored={!isHomePage}
//       />
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/inicio" element={<Home />} />
//           <Route path="/habitaciones" element={<Rooms />} />
//           <Route path="/actividades" element={<Activities />} />
//           <Route path="/turismo" element={<Tourism />} />
//           <Route path="/gastronomia" element={<Gastronomy />} />
//           <Route path="/contacto" element={<Contact />} />
//           {/* Ruta para manejar páginas no encontradas */}
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </main>
//       <WhatsAppButton />
//       <Footer />
//     </div>
//   );
// };

// export default App;


import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Page } from './types';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Activities from './pages/Activities';
import Tourism from './pages/Tourism';
import Contact from './pages/Contact';
import Gastronomy from './pages/Gastronomy';

// Componente para desplazar la página hacia arriba cuando cambia la ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();
 
  useEffect(() => {
    // Comportamiento suave para mejor experiencia de usuario
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
 
  return null;
};

// Función que convierte ruta URL a Page
const getPageFromPath = (path: string): Page => {
  switch (path) {
    case '/':
    case '/inicio':
      return 'inicio';
    case '/habitaciones':
      return 'habitaciones';
    case '/actividades':
      return 'actividades';
    case '/turismo':
      return 'turismo';
    case '/gastronomia':
      return 'gastronomia';
    case '/contacto':
      return 'contacto';
    default:
      return 'inicio';
  }
};

const App = () => {
  const location = useLocation();
 
  // Determinar la página actual basada en la ruta
  const [currentPage, setCurrentPage] = useState<Page>(
    getPageFromPath(location.pathname)
  );
 
  // Actualizar currentPage cuando cambia la ruta
  useEffect(() => {
    setCurrentPage(getPageFromPath(location.pathname));
  }, [location.pathname]);
 
  // Determinar si estamos en la página de inicio
  const isHomePage = currentPage === 'inicio';
 
  return (
    <div className="font-['Poppins'] min-h-screen flex flex-col">
      {/* Componente para manejar el desplazamiento */}
      <ScrollToTop />
     
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        forceColored={!isHomePage}
      />
      
      {/* Usamos margin-top en lugar de padding-top para que el contenido comience justo después del navbar */}
      <main className={`flex-grow ${!isHomePage ? 'mt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/habitaciones" element={<Rooms />} />
          <Route path="/actividades" element={<Activities />} /> 
          <Route path="/turismo" element={<Tourism />} />
          <Route path="/gastronomia" element={<Gastronomy />} />
          <Route path="/contacto" element={<Contact />} />
          {/* Ruta para manejar páginas no encontradas */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;