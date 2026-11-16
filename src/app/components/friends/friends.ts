import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friendList = [
    { name: 'Sami' },
    { name: 'Sarra' },
    { name: 'Amine' }
  ];

  // On utilise un signal pour la recherche
  friendName = signal('Sarra');

  // computed() se met à jour automatiquement quand friendName change
  filteredFriends = computed(() => {
    const search = this.friendName().toLowerCase();
    if (!search) return this.friendList;
    return this.friendList.filter(f => 
      f.name.toLowerCase().includes(search)
    );
  });
}