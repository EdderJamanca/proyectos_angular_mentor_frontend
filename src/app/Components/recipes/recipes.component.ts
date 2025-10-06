import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataSource} from "./DataSource";
import { Router } from '@angular/router';
import {recipes} from "./Recipes";
import {CardRecipesComponent} from "../card-recipes/card-recipes.component";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
      CommonModule,
    CardRecipesComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export default class RecipesComponent implements OnInit  {
  // Selected values for dropdowns
  prepTimeValues: string[] = [];
  cookTimeValues: string[] = [];
  
  // Default header texts
  readonly defaultPrepTimeHeader = 'Max Prep Time';
  readonly defaultCookTimeHeader = 'Max Cook Time';
  
  // Dropdown states
  prepTimeOpen: boolean = false;
  cookTimeOpen: boolean = false;
  // Data source instance
  private dataSource = new DataSource();
  public recipes: recipes[] = [];
  private allRecipes: recipes[] = [];

  router = inject(Router);
  // Pagination variables
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;
  maxPageButtons = 5; // Maximum number of page buttons to display
  constructor() {
    // Initialize recipes from DataSource
    this.allRecipes = this.dataSource.getData();

    //this.recipes = this.dataSource.getData();
  }


  ngOnInit() {
    // Add click handlers for custom dropdowns
    this.setupCustomDropdowns();
    this.setupSearchFilter();
    this.getRecipe();
  }
  
  setupSearchFilter() {
    // Get search input element
    const searchInput = document.getElementById('filter-search-input') as HTMLInputElement;
    
    // Add input event listener
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.applyFilters();
      });
    }
  }
  
  setupCustomDropdowns() {
    // Get all dropdown headers
    const dropdownHeaders = document.querySelectorAll('.custom-dropdown__header');
    
    // Add click event to toggle dropdown
    dropdownHeaders.forEach(header => {
      header.addEventListener('click', (event) => {
        const dropdown = (event.currentTarget as HTMLElement).closest('.custom-dropdown');
        
        // Toggle active class
        if (dropdown) {
          dropdown.classList.toggle('active');
          
          // Close other dropdowns
          document.querySelectorAll('.custom-dropdown.active').forEach(activeDropdown => {
            if (activeDropdown !== dropdown) {
              activeDropdown.classList.remove('active');
            }
          });
        }
      });
    });
    
    // Add click event for checkboxes
    const checkboxes = document.querySelectorAll('.custom-dropdown__option input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        const option = target.closest('.custom-dropdown__option');
        const dropdown = target.closest('.custom-dropdown');
        const header = dropdown?.querySelector('.custom-dropdown__header');
        
        if (option && header) {
          this.updateSelectedValues(target);
          this.updateHeaderText(dropdown);
        }
      });
    });
    
    // Add click event for clear options
    const clearOptions = document.querySelectorAll('.custom-dropdown__option.clear-option');
    clearOptions.forEach(clearOption => {
      clearOption.addEventListener('click', (event) => {
        const dropdown = (event.currentTarget as HTMLElement).closest('.custom-dropdown');
        
        if (dropdown) {
          // Uncheck all checkboxes in this dropdown
          const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
          checkboxes.forEach(element => {
            const checkbox = element as HTMLInputElement;
            checkbox.checked = false;
          });
          
          // Clear selected values
          if (dropdown.querySelector('.custom-dropdown__header')?.textContent?.includes('Prep Time')) {
            this.prepTimeValues = [];
            dropdown.querySelector('.custom-dropdown__header')!.textContent = this.defaultPrepTimeHeader;
          } else {
            this.cookTimeValues = [];
            dropdown.querySelector('.custom-dropdown__header')!.textContent = this.defaultCookTimeHeader;
          }
          
          // Apply filters after clearing
          this.applyFilters();
          
          // Close dropdown after clearing
          setTimeout(() => {
            dropdown.classList.remove('active');
          }, 300);
        }
      });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
      if (!(event.target as HTMLElement).closest('.custom-dropdown')) {
        document.querySelectorAll('.custom-dropdown.active').forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
    });
  }
  
  updateSelectedValues(checkbox: HTMLInputElement) {
    if (checkbox.name === 'filter-prep-time') {
      if (checkbox.checked) {
        this.prepTimeValues.push(checkbox.value);
      } else {
        this.prepTimeValues = this.prepTimeValues.filter(value => value !== checkbox.value);
      }
    } else if (checkbox.name === 'filter-cook-time') {
      if (checkbox.checked) {
        this.cookTimeValues.push(checkbox.value);
      } else {
        this.cookTimeValues = this.cookTimeValues.filter(value => value !== checkbox.value);
      }
    }
    
    // Apply filters whenever a checkbox value changes
    this.applyFilters();
  }
  
  applyFilters(preservePage: boolean = false) {
    // Get search input value
    const searchInput = document.getElementById('filter-search-input') as HTMLInputElement;
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    // Start with all recipes
    let filteredRecipes = [...this.allRecipes];
    
    // Apply search filter
    if (searchTerm) {
      filteredRecipes = filteredRecipes.filter(recipe => {
        // Search in title
        if (recipe.title.toLowerCase().includes(searchTerm)) {
          return true;
        }
        
        // Search in ingredients
        const hasIngredient = recipe.ingredients.some(ingredient => 
          ingredient.description.toLowerCase().includes(searchTerm)
        );
        
        return hasIngredient;
      });
    }
    
    // Apply prep time filter
    if (this.prepTimeValues.length > 0) {
      filteredRecipes = filteredRecipes.filter(recipe => {
        // Find prep time from listTime array
        const prepTimeItem = recipe.listTime.find(item => 
          item.description.toLowerCase().includes('prep:')
        );
        
        if (!prepTimeItem) return false;
        
        // Extract minutes from string like "Prep: 10 mins"
        const prepTimeMatch = prepTimeItem.description.match(/Prep: (\d+) min/);
        if (!prepTimeMatch) return false;
        
        const prepTimeMinutes = parseInt(prepTimeMatch[1], 10);
        
        // Check if prep time is within selected values
        return this.prepTimeValues.some(value => {
          // Map value to minutes
          let maxMinutes = 0;
          if (value === '1') maxMinutes = 0;
          else if (value === '2') maxMinutes = 5;
          else if (value === '3') maxMinutes = 10;
          
          return prepTimeMinutes <= maxMinutes;
        });
      });
    }
    
    // Apply cook time filter
    if (this.cookTimeValues.length > 0) {
      filteredRecipes = filteredRecipes.filter(recipe => {
        // Find cook time from listTime array
        const cookTimeItem = recipe.listTime.find(item => 
          item.description.toLowerCase().includes('cook:')
        );
        
        if (!cookTimeItem) return false;
        
        // Extract minutes from string like "Cook: 5 min"
        const cookTimeMatch = cookTimeItem.description.match(/Cook: (\d+) min/);
        if (!cookTimeMatch) return false;
        
        const cookTimeMinutes = parseInt(cookTimeMatch[1], 10);
        
        // Check if cook time is within selected values
        return this.cookTimeValues.some(value => {
          // Map value to minutes
          let maxMinutes = 0;
          if (value === '1') maxMinutes = 0;
          else if (value === '2') maxMinutes = 5;
          else if (value === '3') maxMinutes = 10;
          else if (value === '4') maxMinutes = 15;
          else if (value === '5') maxMinutes = 15;
          
          return cookTimeMinutes <= maxMinutes;
        });
      });
    }
    
    // Store filtered recipes for pagination
    const totalFilteredRecipes = filteredRecipes.length;
    
    // Update pagination with filtered recipes
    this.totalPages = Math.ceil(totalFilteredRecipes / this.itemsPerPage);
    
    // Reset to first page when filters change, unless preservePage is true
    if (!preservePage) {
      this.currentPage = 1;
    }
    
    // Ensure current page is valid
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
    
    // Update displayed recipes
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.recipes = [...filteredRecipes.slice(startIndex, startIndex + this.itemsPerPage)];
  }
  
  updateHeaderText(dropdown: Element | null) {
    if (!dropdown) return;
    
    const header = dropdown.querySelector('.custom-dropdown__header');
    if (!header) return;
    
    const isPrepTime = header.textContent?.includes('Prep Time');
    const selectedValues = isPrepTime ? this.prepTimeValues : this.cookTimeValues;
    
    if (selectedValues.length === 0) {
      // No selections, use default text
      header.textContent = isPrepTime ? this.defaultPrepTimeHeader : this.defaultCookTimeHeader;
    } else {
      // For Max Cook Time, always keep the default header text
      if (!isPrepTime) {
        header.textContent = this.defaultCookTimeHeader;
        return;
      }
      
      // Get labels for selected values (only for Prep Time)
      const selectedLabels: string[] = [];
      selectedValues.forEach(value => {
        const checkbox = dropdown.querySelector(`input[value="${value}"]`) as HTMLInputElement;
        if (checkbox) {
          const label = checkbox.nextElementSibling?.textContent;
          if (label) selectedLabels.push(label);
        }
      });
      
      // Update header with selected labels (only for Prep Time)
      if (selectedLabels.length > 0) {
        header.textContent = selectedLabels.join(', ');
      }
    }
  }
  getRecipe() {
    this.totalPages = Math.ceil(this.allRecipes.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePageContent();
  }

  updatePageContent() {
    // Apply any active filters first, preserving the current page
    this.applyFilters(true);
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
}
