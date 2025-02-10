import { Component } from '@angular/core';
import { Composant4Component } from '../composant4/composant4.component';
import { Composant5Component } from '../composant5/composant5.component';

@Component({
  selector: 'app-composant2',
  imports: [Composant4Component, Composant5Component],
  templateUrl: './composant2.component.html',
  styleUrl: './composant2.component.css'
})
export class Composant2Component {

}
