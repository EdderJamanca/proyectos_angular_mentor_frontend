# Product Preview Card Component


## Features

- **Responsive Design**: Adapts to different screen sizes with specific layouts for mobile and desktop views
- **Modern UI**: Clean and elegant design with carefully selected typography and color scheme
- **Interactive Elements**: Hover states for interactive elements like the "Add to Cart" button

## Technologies Used

- **Angular 17**: Modern web framework for building the application
- **SCSS**: Advanced styling with variables, nesting, and responsive design
- **Responsive Images**: Different image versions for mobile and desktop viewports

## Project Structure

The project follows a standard Angular application structure:

- `src/app/app.component.html`: Main component template with the product card layout
- `src/app/app.component.scss`: Component-specific styles with responsive design rules
- `src/styles.scss`: Global styles and CSS variables for colors and spacing
- `src/assets/img/`: Product images and icons

## Design Details

### Typography

The application uses two main fonts:
- **Fraunces**: Used for product name and price
- **Montserrat**: Used for product description, category, and button text

### Color Palette

- Dark blue/black: `#1C232B`
- Dark grayish blue: `#6C7289`
- Cream: `#F2EAE2`
- White: `#FFFFFF`
- Dark cyan (primary): `#3D8168`
- Very dark cyan (hover state): `#1A4032`

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server:
```
npm start
```

The application will be available at `http://localhost:4200/`.

### Building for Production

To build the application for production:
```
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Credits

This project is based on a design challenge and implemented using Angular framework.
