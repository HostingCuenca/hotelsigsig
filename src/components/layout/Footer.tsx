// components/layout/Footer.tsx
import { 
    Phone, 
    Mail, 
    MapPin, 
    Facebook, 
    Instagram, 
    Apple as WhatsApp,
    ChevronRight,
    Heart 
  } from 'lucide-react';
  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    const socialLinks = [
      { Icon: Facebook, href: '#', label: 'Facebook' },
      { Icon: Instagram, href: '#', label: 'Instagram' },
      { Icon: WhatsApp, href: 'https://wa.me/593997930366', label: 'WhatsApp' }
    ];
  
    const exploreLinks = [
      'Cueva Negra de Chobshi',
      'Playa de Zhingate',
      'Castillo de Duma',
      'Centro Histórico',
      'Talleres Artesanales'
    ];
  
    const contactInfo = [
      { Icon: MapPin, text: 'Ignacio Arcentales y María Auxiliadora' },
      { Icon: Phone, text: '+593 99 793 0366' },
      { Icon: Mail, text: 'hotelsigsig@gmail.com' }
    ];
  
    return (
      <footer className="bg-[var(--color-wine-dark)] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-['Playfair_Display'] logo-text mb-6">Hotel Sigsig</h3>
              <p className="text-sm opacity-80 mb-6">
                Toda tu comodidad está aquí, en el corazón cultural del Azuay
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a 
                    key={label}
                    href={href}
                    className="hover:text-[var(--color-gold)] transition-colors"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
  
            {/* Explore Section */}
            <div>
              <h4 className="text-[var(--color-gold)] mb-4">Explora Sígsig</h4>
              <ul className="space-y-2 text-sm">
                {exploreLinks.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h4 className="text-[var(--color-gold)] mb-4">Contacto</h4>
              <ul className="space-y-3 text-sm">
                {contactInfo.map(({ Icon, text }) => (
                  <li key={text} className="flex items-center">
                    <Icon className="w-4 h-4 mr-2" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h4 className="text-[var(--color-gold)] mb-4">Newsletter</h4>
              <p className="text-sm mb-4">Recibe nuestras ofertas y novedades</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="bg-white/10 px-4 py-2 rounded-l-md w-full focus:outline-none focus:bg-white/20 transition-colors"
                />
                <button 
                  className="metallic-gold px-4 rounded-r-md"
                  aria-label="Suscribirse"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
            <p className="opacity-80">
              &copy; {currentYear} Hotel Sigsig. Todos los derechos reservados.
            </p>
            <p className="mt-2 flex items-center justify-center text-sm opacity-80">
              Hecho con <Heart className="w-4 h-4 mx-1 text-[var(--color-gold)]" /> por{' '}
              <a 
                href="https://torisoftt.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-[var(--color-gold)] hover:underline"
              >
                Torisoftt
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;