import { Component } from '@angular/core';
import { Composant6Component } from '../composant6/composant6.component';
import { Composant7Component } from '../composant7/composant7.component';
import { Composant8Component } from '../composant8/composant8.component';

@Component({
  selector: 'app-composant3',
  imports: [Composant6Component, Composant7Component, Composant8Component],
  templateUrl: './composant3.component.html',
  styleUrl: './composant3.component.css'
})
export class Composant3Component {

}
