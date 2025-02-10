import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() status: string = '';
  @Input() reputation: number = 0; 
  @Input() bio: string = '';
  @Input() passion: string[] = [];
  @Input() image: string = '';

  getAge(): string {
    return `Age: ${this.age}`;
  }

  getStatus(): string {
    return this.status === 'online' ? 'En ligne' : 'Hors ligne';
  }

  getReputation(): string {
    return this.reputation >= 5 ? 'Cool' : 'Ringard';
  }

  getBio(): string {
    return `Bio: ${this.bio}`;
  }

  getPassion(): string {
    return `Passions: ${this.passion}`;
  }

  getImage(): string {
    return `${this.image}`;
  }

}
