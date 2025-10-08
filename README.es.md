# Componente de Tarjeta de Vista Previa de Producto


## Características

- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla con diseños específicos para vistas móviles y de escritorio
- **Interfaz Moderna**: Diseño limpio y elegante con tipografía y esquema de colores cuidadosamente seleccionados
- **Elementos Interactivos**: Estados de hover para elementos interactivos como el botón "Añadir al Carrito"

## Tecnologías Utilizadas

- **Angular 17**: Framework web moderno para construir la aplicación
- **SCSS**: Estilos avanzados con variables, anidamiento y diseño responsivo
- **Imágenes Responsivas**: Diferentes versiones de imágenes para dispositivos móviles y de escritorio

## Estructura del Proyecto

El proyecto sigue una estructura estándar de aplicación Angular:

- `src/app/app.component.html`: Plantilla del componente principal con el diseño de la tarjeta de producto
- `src/app/app.component.scss`: Estilos específicos del componente con reglas de diseño responsivo
- `src/styles.scss`: Estilos globales y variables CSS para colores y espaciado
- `src/assets/img/`: Imágenes del producto e iconos

## Detalles de Diseño

### Tipografía

La aplicación utiliza dos fuentes principales:
- **Fraunces**: Utilizada para el nombre del producto y el precio
- **Montserrat**: Utilizada para la descripción del producto, categoría y texto del botón

### Paleta de Colores

- Azul oscuro/negro: `#1C232B`
- Azul grisáceo oscuro: `#6C7289`
- Crema: `#F2EAE2`
- Blanco: `#FFFFFF`
- Cian oscuro (primario): `#3D8168`
- Cian muy oscuro (estado hover): `#1A4032`

## Primeros Pasos

### Prerrequisitos

- Node.js y npm instalados en tu máquina

### Instalación

1. Clona el repositorio
2. Navega al directorio del proyecto
3. Instala las dependencias:
   ```
   npm install
   ```

### Ejecutando la Aplicación

Para iniciar el servidor de desarrollo:
```
npm start
```

La aplicación estará disponible en `http://localhost:4200/`.

### Compilando para Producción

Para compilar la aplicación para producción:
```
npm run build
```

Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Créditos

Este proyecto está basado en un desafío de diseño e implementado utilizando el framework Angular.
