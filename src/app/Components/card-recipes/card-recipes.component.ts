import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {recipes} from "../recipes/Recipes";
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-recipes',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './card-recipes.component.html',
  styleUrl: './card-recipes.component.scss'
})
export class CardRecipesComponent {
  @Input() recipe: recipes = {} as recipes;

  constructor(private router: Router) {}

  viewRecipe(id: number) {
    console.log('Navigating to recipe with ID:', id);
    this.router.navigate(['/recipe', id]);
  }
  getTruncatedTitle(title: string, maxLength: number): string {
    if (title.length <= maxLength) {
      return title;
    }
    return title.substring(0, maxLength) + '...';
  }


}
