export type Producto = {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
};

export const productos: Producto[] = [
  {
    id: '1',
    nombre: 'Membresía Mensual',
    descripcion: 'Acceso ilimitado a todas las instalaciones y clases durante un mes.',
    imagen: '/assets/membresia-mensual.jpg',
    precio: 50,
  }
];
