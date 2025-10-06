# Aplicación Buscador de Recetas

Una aplicación moderna en Angular para buscar y filtrar recetas basada en diversos criterios.

## Descripción General

Buscador de Recetas es una aplicación web construida con Angular que permite a los usuarios navegar, buscar y filtrar recetas. La aplicación cuenta con un diseño responsivo y una interfaz de usuario intuitiva para una experiencia fluida de descubrimiento de recetas.

## Características

- **Navegación de Recetas**: Visualiza una colección de recetas con imágenes y descripciones
- **Filtrado Avanzado**:
  - Búsqueda por nombre de receta o ingredientes
  - Filtro por tiempo de preparación (0, 5 o 10 minutos)
  - Filtro por tiempo de cocción (0, 5, 10 o 15 minutos)
- **Paginación**: Navega a través de múltiples páginas de recetas
- **Diseño Responsivo**: Optimizado tanto para dispositivos de escritorio como móviles

## Detalles Técnicos

### Arquitectura

La aplicación sigue la arquitectura basada en componentes de Angular:

- **Componentes**: Elementos modulares de UI (recipes, card-recipes, detail-recipes)
- **Modelos**: Interfaces TypeScript para estructuras de datos (recipes, ingredients, instructions)
- **Servicios**: Manejo de datos y lógica de negocio

### Tecnologías Utilizadas

- **Angular**: Framework de frontend
- **TypeScript**: Lenguaje de programación
- **SCSS**: Estilos con variables y mixins
- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla

## Primeros Pasos

### Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

### Instalación

1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
```

2. Navegar al directorio del proyecto
```bash
cd appBuscadorRecetas
```

3. Instalar dependencias
```bash
npm install
```

4. Iniciar el servidor de desarrollo
```bash
ng serve
```

5. Abrir el navegador y navegar a `http://localhost:4200`

## Estructura del Proyecto

```
appBuscadorRecetas/
├── src/
│   ├── app/
│   │   ├── Components/
│   │   │   ├── recipes/             # Componente principal de listado de recetas
│   │   │   ├── card-recipes/        # Componente de tarjeta individual de receta
│   │   │   └── detail-recipes/      # Componente de vista detallada de receta
│   │   ├── layout/                  # Componentes de diseño
│   │   └── app.routes.ts            # Enrutamiento de la aplicación
│   ├── assets/
│   │   ├── images/                  # Recursos de imágenes
│   │   └── styles/                  # Estilos globales
│   └── index.html                   # Archivo HTML principal
└── angular.json                     # Configuración de Angular
```

## Uso

### Navegación de Recetas

La página principal muestra una cuadrícula de tarjetas de recetas. Cada tarjeta muestra:
- Imagen de la receta
- Título
- Breve descripción
- Tiempos de preparación y cocción

### Filtrado de Recetas

1. **Búsqueda de Texto**: Utiliza la caja de búsqueda para encontrar recetas por nombre o ingredientes
2. **Filtro de Tiempo de Preparación**: Selecciona el tiempo máximo de preparación desde el desplegable
3. **Filtro de Tiempo de Cocción**: Selecciona el tiempo máximo de cocción desde el desplegable

Los filtros pueden combinarse para resultados más específicos.

### Visualización de Detalles de Receta

Haz clic en cualquier tarjeta de receta para ver información detallada que incluye:
- Descripción completa de la receta
- Lista completa de ingredientes
- Instrucciones paso a paso para cocinar

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

## Agradecimientos

- Imágenes y datos de recetas obtenidos de varios sitios web culinarios
- Iconos de bibliotecas de código abierto
