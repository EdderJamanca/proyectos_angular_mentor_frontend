import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {DataSource} from "../recipes/DataSource";
import {Router, RouterLink, NavigationEnd} from "@angular/router";
import {Subject} from "rxjs";
import {filter, takeUntil} from 'rxjs/operators'
import {NgFor, NgIf} from "@angular/common";
import {recipes} from "../recipes/Recipes";
import {CardRecipesComponent} from "../card-recipes/card-recipes.component";
@Component({
  selector: 'app-detail-recipes',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    NgIf,
    CardRecipesComponent
  ],
  templateUrl: './detail-recipes.component.html',
  styleUrl: './detail-recipes.component.scss'
})
export default class DetailRecipesComponent implements OnInit,OnDestroy {
  private destroy$ = new Subject<void>();
  // Data source instance
  private dataSource = new DataSource();
  public recipes: recipes[] = [] as recipes[];
  router = inject(Router);
  recipe: recipes = {} as recipes;
  moreRecipe: recipes [] = [];
  // Pagination variables
  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 1;
  maxPageButtons = 5; // Maximum number of page buttons to display
  
  constructor() {
    // Initialize recipes from DataSource
    this.recipes = this.dataSource.getData();
    console.log('DetailRecipesComponent initialized with recipes:', this.recipes);
  }

  ngOnInit() {
    console.log('DetailRecipesComponent ngOnInit called');
    
    // Log initial state
    console.log('Initial recipe state:', this.recipe);
    console.log('Initial recipes array:', this.recipes);
    
    // Get the initial route parameters directly
    const root = this.router.routerState.root;
    let activeRoute = root;
    
    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }
    
    const id = activeRoute.snapshot.params['id'];
    if (id) {
      const numId = parseInt(id, 10);
      console.log('Initial route ID:', numId);
      
      // Force reload of recipe data
      this.recipes = this.dataSource.getData();
      console.log('Reloaded recipes:', this.recipes);
      
      const foundRecipe = this.recipes.find(recipe => recipe.id === numId);
      if (foundRecipe) {
        this.recipe = foundRecipe;
        this.getRecipe(numId);
      }
      console.log('Initial recipe found:', this.recipe);
    }
    
    // Also subscribe to future navigation events
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      console.log('Navigation event detected:', event);
      
      // ✅ Obtener información completa de la ruta activa
      const root = this.router.routerState.root;
      let activeRoute = root;

      while (activeRoute.firstChild) {
        activeRoute = activeRoute.firstChild;
      }

      // Obtener parámetros de la ruta activa
      const id = activeRoute.snapshot.params['id'];
      console.log('ID from route params:', id);
      
      // Force reload of recipe data
      this.recipes = this.dataSource.getData();
      console.log('Available recipes after reload:', this.recipes);
      
      // Convert id to number for strict comparison
      const numId = parseInt(id, 10);
      console.log('Converted ID (number):', numId);
      
      // Debug each recipe comparison
      this.recipes.forEach(recipe => {
        console.log(`Comparing recipe ID ${recipe.id} (${typeof recipe.id}) with route ID ${numId} (${typeof numId}): ${recipe.id === numId}`);
      });

      const foundRecipe = this.recipes.find(recipe => recipe.id === numId);
      if (foundRecipe) {
        this.recipe = foundRecipe;
      }
      this.getRecipe(numId);
      if (!this.recipe) {
        console.error('No recipe found with ID:', numId);
        console.log('Recipe object is:', this.recipe);
        // If no recipe found, you might want to navigate to an error page or recipes list
        // this.router.navigate(['/recipes']);
      } else {
        console.log('Recipe found:', this.recipe);
        console.log('Recipe title:', this.recipe.title);
        console.log('Recipe description:', this.recipe.description);
        console.log('Recipe image:', this.recipe.img);
        console.log('Recipe times:', this.recipe.listTime);
      }
    });

  }
  // Store filtered recipes to avoid redundant filtering
  public filteredRecipes: recipes[] = [];
  
  getRecipe(id: number) {
    // Filter recipes once and store the result
    this.filteredRecipes = this.recipes.filter(recipe => recipe.id !== id);
    this.totalPages = Math.ceil(this.filteredRecipes.length / this.itemsPerPage);
    this.currentPage = 1; // Reset to first page when loading new recipe
    this.updatePageContent();
    console.log('moreRecipe', this.moreRecipe);
    console.log('totalPages', this.totalPages);
    console.log('currentPage', this.currentPage);
  }
  
  updatePageContent() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.moreRecipe = [...this.filteredRecipes.slice(startIndex, startIndex + this.itemsPerPage)];
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePageContent();
    }
  }
  
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageContent();
    }
  }
  
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePageContent();
    }
  }
  
  // Generate an array of page numbers to display
  getPageNumbers(): number[] {
    // Handle edge case where there are no pages
    if (this.totalPages <= 0) {
      return [];
    }
    
    const pageNumbers: number[] = [];
    
    if (this.totalPages <= this.maxPageButtons) {
      // If total pages is less than max buttons, show all pages
      for (let i = 1; i <= this.totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Calculate start and end page numbers
      let startPage = Math.max(1, this.currentPage - Math.floor(this.maxPageButtons / 2));
      let endPage = startPage + this.maxPageButtons - 1;
      
      // Adjust if end page exceeds total pages
      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = Math.max(1, endPage - this.maxPageButtons + 1);
      }
      
      // Add page numbers
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
    
    return pageNumbers;
  }
  
  // Get the index of the first item on the current page
  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  
  // Get the index of the last item on the current page
  getEndIndex(): number {
    const endIndex = this.getStartIndex() + this.itemsPerPage;
    return Math.min(endIndex, this.filteredRecipes.length);
  }

  ngOnDestroy() {
    this.destroy$.next(); // Emite señal de destrucción
    this.destroy$.complete(); // Completa el Subject
  }

}
