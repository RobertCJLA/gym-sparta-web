// src/data/imagenes.ts
import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

export const imagenes = [
  {
    src: images["../assets/imagen-2.jpeg"].default,
    alt: "Clase grupal de entrenamiento funcional",
    title: "Energía en equipo",
    text: "Clases que te empujan a rendir al máximo con motivación constante.",
  },
  {
    src: images["../assets/imagen-3.jpeg"].default,
    alt: "Entrenamiento personal con barra olímpica",
    title: "Resultados visibles",
    text: "Rutinas personalizadas para acelerar tu progreso desde el día uno.",
  },
  {
    src: images["../assets/imagen-4.jpeg"].default,
    alt: "Área de cardio con máquinas modernas",
    title: "Cardio de alto rendimiento",
    text: "Máquinas de última generación para quemar calorías y mejorar tu resistencia.",
  },
  {
    src: images["../assets/imagen-5.jpeg"].default,
    alt: "Zona de estiramiento con colchonetas y accesorios",
    title: "Flexibilidad y recuperación",
    text: "Espacios dedicados para estirar, recuperarte y mantener tu cuerpo en equilibrio.",
  },
  {
    src: images["../assets/imagen-6.jpeg"].default,
    alt: "Instructor guiando una sesión de HIIT en sala amplia",
    title: "Intensidad controlada",
    text: "Sesiones de alta intensidad para quemar grasa y mejorar tu capacidad cardiovascular.",
  },
  {
    src: images["../assets/imagen-7.jpeg"].default,
    alt: "Pareja entrenando con pesas rusas juntos",
    title: "Entrenamiento funcional",
    text: "Movimientos dinámicos que fortalecen el cuerpo de forma natural.",
  },
  {
    src: images["../assets/imagen-8.jpeg"].default,
    alt: "Área de boxeo con sacos y guantes",
    title: "Potencia y técnica",
    text: "Boxeo y entrenamiento de combate para mejorar reflejos y fuerza.",
  },
  {
    src: images["../assets/imagen-9.jpeg"].default,
    alt: "Vista general del gimnasio con miembros entrenando",
    title: "Ambiente motivador",
    text: "Un espacio activo y lleno de energía para mantenerte inspirado.",
  },
  {
    src: images["../assets/imagen-10.jpeg"].default,
    alt: "Accesorios de entrenamiento y bebidas deportivas",
    title: "Soporte completo",
    text: "Todo lo que necesitas para entrenar con comodidad y buen rendimiento.",
  },
  {
    src: images["../assets/imagen-11.jpeg"].default,
    alt: "Sesión de yoga en grupo en el estudio del gimnasio",
    title: "Balance mental",
    text: "Clases que ayudan a encontrar calma, concentración y alineación corporal.",
  },
  {
    src: images["../assets/imagen-12.jpeg"].default,
    alt: "Corredores en la pista interior del gimnasio",
    title: "Velocidad y resistencia",
    text: "Entrenamientos de carrera para elevar tu nivel atlético.",
  },
  {
    src: images["../assets/imagen-13.jpeg"].default,
    alt: "Entrenador ayudando a un atleta a levantar peso",
    title: "Asesoría profesional",
    text: "Guía experta para ejecutar ejercicios con técnica perfecta y seguridad.",
  },
  {
    src: images["../assets/imagen-14.jpeg"].default,
    alt: "Zona de relajación con sauna y áreas de descanso",
    title: "Recuperación premium",
    text: "Espacios diseñados para relajar músculos y recargar energía después del entrenamiento.",
  },
  {
    src: images["../assets/imagen-15.jpeg"].default,
    alt: "Persona midiendo su progreso con una tablet",
    title: "Seguimiento inteligente",
    text: "Herramientas digitales para monitorear tus avances y mantenerte enfocado.",
  },
  {
    src: images["../assets/imagen-16.jpeg"].default,
    alt: "Grupo realizando estiramientos al aire libre",
    title: "Entrenamiento al exterior",
    text: "Sesiones complementarias en espacios abiertos para variar tu rutina.",
  },
  {
    src: images["../assets/imagen-17.jpeg"].default,
    alt: "Atleta celebrando su logro tras completar un desafío",
    title: "Metas alcanzadas",
    text: "Logra cada objetivo con disciplina, esfuerzo y el respaldo de nuestro gimnasio.",
  },
];