import { Component } from '@angular/core';
import { Composant1Component } from '../composant1/composant1.component';
import { Composant2Component } from '../composant2/composant2.component';
import { Composant3Component } from '../composant3/composant3.component';

@Component({
  selector: 'app-nesting',
  imports: [Composant1Component, Composant2Component, Composant3Component],
  templateUrl: './nesting.component.html',
  styleUrl: './nesting.component.css'
})
export class NestingComponent {

}
