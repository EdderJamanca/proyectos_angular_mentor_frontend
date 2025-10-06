import { Component } from '@angular/core';
import {CtaComponent} from "../cta/cta.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CtaComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export default class AboutComponent {

}
