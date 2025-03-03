


// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { Page } from '../../types';

// interface NavbarProps {
//   currentPage: Page;
//   setCurrentPage: (page: Page) => void;
//   forceColored?: boolean;
// }

// const Navbar = ({ currentPage, setCurrentPage, forceColored = false }: NavbarProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Función que convierte Page a ruta URL
//   const getRouteFromPage = (page: Page): string => {
//     if (page === 'inicio') return '/';
//     return `/${page}`;
//   };

//   // Función que maneja la navegación y actualiza el estado
//   const handleNavigation = (page: Page) => {
//     setCurrentPage(page);
//     navigate(getRouteFromPage(page));
//     if (isMenuOpen) {
//       setIsMenuOpen(false);
//     }
//   };

//   const navPages: Page[] = ['inicio', 'habitaciones', 'actividades', 'turismo', 'gastronomia', 'contacto'];
//   const shouldShowBackground = isScrolled || forceColored;

//   return (
//     <nav 
//       className={`fixed w-full z-50 transition-all duration-500
//         ${shouldShowBackground ? 
//           'py-3 nav-scrolled' : 
//           'py-6 bg-transparent'
//         }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center md:grid md:grid-cols-3">
//           {/* Left Navigation */}
//           <div className="hidden md:flex items-center justify-start space-x-2">
//             {navPages.slice(0, 3).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => handleNavigation(page)}
//                 className={`relative px-6 py-3 text-white hover:text-[#efb810] transition-all duration-300 
//                   group capitalize text-base font-light tracking-wide
//                   ${currentPage === page ? 'nav-item-active' : ''}
//                   ${shouldShowBackground ? 'text-base' : 'text-lg'}
//                 `}
//               >
//                 <span className="relative z-10">{page}</span>
//                 <div className="absolute inset-0 bg-gradient-to-b from-[#efb810]/20 to-[#d4a012]/20 
//                   scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-t-lg">
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent 
//                   via-[#efb810] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Centered Logo */}
//           <div className="flex justify-center items-center transition-all duration-500">
//             <button 
//               onClick={() => handleNavigation('inicio')}
//               className="focus:outline-none"
//             >
//               <img 
//                 src="/hotelsigsiglogo.png" 
//                 alt="Hotel Sigsig" 
//                 className={`transition-all duration-500 
//                   ${shouldShowBackground ? 'h-20' : 'h-28'}
//                 `}
//               />
//             </button>
//           </div>

//           {/* Right Navigation */}
//           <div className="hidden md:flex items-center justify-end space-x-2">
//             {navPages.slice(3).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => handleNavigation(page)}
//                 className={`relative px-6 py-3 text-white hover:text-[#efb810] transition-all duration-300 
//                   group capitalize text-base font-light tracking-wide
//                   ${currentPage === page ? 'nav-item-active' : ''}
//                   ${shouldShowBackground ? 'text-base' : 'text-lg'}
//                 `}
//               >
//                 <span className="relative z-10">{page}</span>
//                 <div className="absolute inset-0 bg-gradient-to-b from-[#efb810]/20 to-[#d4a012]/20 
//                   scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-t-lg">
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent 
//                   via-[#efb810] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-white hover:text-[#efb810] transition-colors absolute right-4"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-[#330000] border-t-2 border-[#efb810]/30">
//             <div className="container mx-auto py-4">
//               {navPages.map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => handleNavigation(page)}
//                   className={`block w-full text-left py-4 px-6 text-white hover:bg-[#660000] 
//                     transition-colors capitalize text-lg
//                     ${currentPage === page ? 'text-[#efb810] bg-[#660000]' : ''}
//                   `}
//                 >
//                   {page}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Page } from '../../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  forceColored?: boolean;
}

const Navbar = ({ currentPage, setCurrentPage, forceColored = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función que convierte Page a ruta URL
  const getRouteFromPage = (page: Page): string => {
    if (page === 'inicio') return '/';
    return `/${page}`;
  };

  // Función que maneja la navegación y actualiza el estado
  const handleNavigation = (page: Page) => {
    // Solo navegar si no estamos ya en esa página
    if (currentPage !== page) {
      setCurrentPage(page);
      navigate(getRouteFromPage(page));
      
      // Cerrar el menú móvil si está abierto
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    } else {
      // Si estamos en la misma página, solo hacer scroll al inicio con animación suave
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Y cerrar el menú móvil si está abierto
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const navPages: Page[] = ['inicio', 'habitaciones', 'actividades', 'turismo', 'gastronomia', 'contacto'];
  const shouldShowBackground = isScrolled || forceColored;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500
        ${shouldShowBackground ? 
          'py-3 nav-scrolled' : 
          'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center md:grid md:grid-cols-3">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center justify-start space-x-2">
            {navPages.slice(0, 3).map((page) => (
              <button
                key={page}
                onClick={() => handleNavigation(page)}
                className={`relative px-6 py-3 text-white hover:text-[#efb810] transition-all duration-300 
                  group capitalize text-base font-light tracking-wide
                  ${currentPage === page ? 'nav-item-active' : ''}
                  ${shouldShowBackground ? 'text-base' : 'text-lg'}
                `}
              >
                <span className="relative z-10">{page}</span>
                <div className="absolute inset-0 bg-gradient-to-b from-[#efb810]/20 to-[#d4a012]/20 
                  scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-t-lg">
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent 
                  via-[#efb810] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                </div>
              </button>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex justify-center items-center transition-all duration-500">
            <button 
              onClick={() => handleNavigation('inicio')}
              className="focus:outline-none"
            >
              <img 
                src="/hotelsigsiglogo.png" 
                alt="Hotel Sigsig" 
                className={`transition-all duration-500 
                  ${shouldShowBackground ? 'h-20' : 'h-28'}
                `}
              />
            </button>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center justify-end space-x-2">
            {navPages.slice(3).map((page) => (
              <button
                key={page}
                onClick={() => handleNavigation(page)}
                className={`relative px-6 py-3 text-white hover:text-[#efb810] transition-all duration-300 
                  group capitalize text-base font-light tracking-wide
                  ${currentPage === page ? 'nav-item-active' : ''}
                  ${shouldShowBackground ? 'text-base' : 'text-lg'}
                `}
              >
                <span className="relative z-10">{page}</span>
                <div className="absolute inset-0 bg-gradient-to-b from-[#efb810]/20 to-[#d4a012]/20 
                  scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-t-lg">
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent 
                  via-[#efb810] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#efb810] transition-colors absolute right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#330000] border-t-2 border-[#efb810]/30">
            <div className="container mx-auto py-4">
              {navPages.map((page) => (
                <button
                  key={page}
                  onClick={() => handleNavigation(page)}
                  className={`block w-full text-left py-4 px-6 text-white hover:bg-[#660000] 
                    transition-colors capitalize text-lg
                    ${currentPage === page ? 'text-[#efb810] bg-[#660000]' : ''}
                  `}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;