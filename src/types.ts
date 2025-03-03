// types.ts
export type Page = 'inicio' | 'habitaciones' | 'actividades' | 'turismo' | 'gastronomia' | 'contacto';

// Mapeo de rutas URL a tipos Page
export const routeToPage: Record<string, Page> = {
  '/': 'inicio',
  '/inicio': 'inicio',
  '/habitaciones': 'habitaciones',
  '/actividades': 'actividades',
  '/turismo': 'turismo',
  '/gastronomia': 'gastronomia',
  '/contacto': 'contacto'
};

// Mapeo de tipos Page a rutas URL
export const pageToRoute: Record<Page, string> = {
  'inicio': '/',
  'habitaciones': '/habitaciones',
  'actividades': '/actividades',
  'turismo': '/turismo',
  'gastronomia': '/gastronomia',
  'contacto': '/contacto'
};