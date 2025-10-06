import {Component, HostListener, signal} from '@angular/core';
import {HeaderComponent} from "../Components/header/header.component";
import {FooterComponent} from "../Components/footer/footer.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
      RouterOutlet,
      HeaderComponent,
      FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    // Señal para mostrar/ocultar el botón
    showScrollTop = signal(false);
    // Escuchar el evento de scroll
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(): void {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const triggerHeight = 300; // Mostrar después de 300px de scroll

        this.showScrollTop.set(scrollPosition > triggerHeight);
    }
    // Función para volver arriba
    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

}
