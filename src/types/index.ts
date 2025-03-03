export type Page = 'inicio' | 'habitaciones' | 'actividades' | 'turismo' | 'gastronomia' | 'contacto';

export interface Room {
  title: string;
  price: string;
  image: string;
  description: string;
  amenities: {
    icon: React.ReactNode;
    text: string;
  }[];
}
