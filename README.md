# Recipe Finder Application


## Overview

Recipe Finder is a web application built with Angular that allows users to browse, search, and filter recipes. The application features a responsive design and intuitive user interface for a seamless recipe discovery experience.

## Features

- **Recipe Browsing**: View a collection of recipes with images and descriptions
- **Advanced Filtering**:
  - Search by recipe name or ingredients
  - Filter by preparation time (0, 5, or 10 minutes)
  - Filter by cooking time (0, 5, 10, or 15 minutes)
- **Pagination**: Navigate through multiple pages of recipes
- **Responsive Design**: Optimized for both desktop and mobile devices

## Technical Details

### Architecture

The application follows Angular's component-based architecture:

- **Components**: Modular UI elements (recipes, card-recipes, detail-recipes)
- **Models**: TypeScript interfaces for data structures (recipes, ingredients, instructions)
- **Services**: Data handling and business logic

### Technologies Used

- **Angular**: Frontend framework
- **TypeScript**: Programming language
- **SCSS**: Styling with variables and mixins
- **Responsive Design**: Adapts to different screen sizes

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Navigate to the project directory
```bash
cd appBuscadorRecetas
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
appBuscadorRecetas/
├── src/
│   ├── app/
│   │   ├── Components/
│   │   │   ├── recipes/             # Main recipes listing component
│   │   │   ├── card-recipes/        # Individual recipe card component
│   │   │   └── detail-recipes/      # Detailed recipe view component
│   │   ├── layout/                  # Layout components
│   │   └── app.routes.ts            # Application routing
│   ├── assets/
│   │   ├── images/                  # Image resources
│   │   └── styles/                  # Global styles
│   └── index.html                   # Main HTML file
└── angular.json                     # Angular configuration
```

## Usage

### Browsing Recipes

The home page displays a grid of recipe cards. Each card shows:
- Recipe image
- Title
- Brief description
- Preparation and cooking times

### Filtering Recipes

1. **Text Search**: Use the search box to find recipes by name or ingredients
2. **Prep Time Filter**: Select maximum preparation time from the dropdown
3. **Cook Time Filter**: Select maximum cooking time from the dropdown

Filters can be combined for more specific results.

### Viewing Recipe Details

Click on any recipe card to view detailed information including:
- Full recipe description
- Complete list of ingredients
- Step-by-step cooking instructions

