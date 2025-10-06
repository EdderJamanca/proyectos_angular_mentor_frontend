import {
  Component, inject, OnDestroy,
  OnInit, signal
} from '@angular/core';
import {Router, RouterLink,
  RouterLinkActive,NavigationEnd
} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
import { filter,takeUntil} from 'rxjs/operators'
import {Subject} from "rxjs";

enum Menu {
  HOME,
  ABOUT,
  RECIPES,
  RECIPESID,
  ERROR404
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent
    implements OnInit,OnDestroy {
  router = inject(Router);
  protected readonly Menu = Menu;
  selectMenu = signal(Menu.HOME);
  private destroy$ = new Subject<void>();

  isMenuOpen
      = signal(true);

// Para abrir/cerrar el menú móvil únicamente
  toggleMobileMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

// Para cerrar el menú móvil (cuando se selecciona una opción)
  closeMobileMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

// Método combinado para navegación desde menú móvil
  selectFromMobileMenu(item: Menu): void {
    this.nextMenu(item);
    this.closeMobileMenu();
  }

  nextMenu(item: Menu): void {
    switch (item) {
      case Menu.HOME:
        this.router.navigate(['home']);
        break;
      case Menu.ABOUT:
        this.router.navigate(['about']);
        break;
      case Menu.RECIPES:
        this.router.navigate(['recipes']);
        break;
    }
    this.selectMenu.set(item);
  }
  ngOnInit() {
    // Check current URL on component initialization
    const currentUrl = this.router.url;
    if (currentUrl.startsWith('/recipe/')) {
      this.selectMenu.set(Menu.RECIPESID);
    }
    
    // Listen for navigation events
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
    ).subscribe(event => {
      const navEvent = event as NavigationEnd;
      console.log('header', navEvent);
      if (navEvent.url.startsWith('/recipe/')) {
        this.selectMenu.set(Menu.RECIPESID);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(); // Emite señal de destrucción
    this.destroy$.complete(); // Completa el Subject
  }

}
