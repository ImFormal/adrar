import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { OneFriendComponent } from '../one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends',
  standalone: true,
  imports: [CommonModule, OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css']
})
export class ListFriendsComponent implements OnInit{
  friendName: string = ''; 
  statusMessage: string = 'Aucun ami'; 
  isDisabled: boolean = true; 

  onUpdateFriendsList(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.friendName = inputElement.value;
    this.isDisabled = this.friendName.trim() === '';
  }

  onAddFriend(): void {
    if (this.friendName.trim()) {
      this.statusMessage = `Votre ami "${this.friendName}" a été ajouté!`;
      this.friendName = ''; 
      this.isDisabled = true;
    }
  }

  ngOnInit(): void{
    setTimeout(() => {
      this.isDisabled = true;
    }, 3000);
  }

  friends = [
    { name: 'Kévin', age: 31, status: 'online', reputation: 8, bio: "Kévin est un passionné de musique classique et de JS.", passion : ["JS", "Musique Classique", "Podcast"], image: "assets/kevin.png"},
    { name: 'Flo', age: 27, status: 'offline', reputation: 3, bio: "Ouat ouat ouat Holy ! Ouat ! Holy ! Ouais j'capte ! Ouat !", passion : ["Ouat", "Holy", "JV", "Ouat", "Parapluie", "Ouat"], image: "assets/flo.png" },
    { name: 'Quentin', age: 29, status: 'online', reputation: 6, bio: "Quentin est un fan d'Arsenal et de Carlin !", passion : ["Carlin", "Arsenal", "Les Femmes"], image: "assets/quentin.png" },
  ];
}
