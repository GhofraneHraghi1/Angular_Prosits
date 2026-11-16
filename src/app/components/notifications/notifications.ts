import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  // Variable d'état (faux par défaut = détails masqués)
  showDetails = false;

  // Liste des notifications
  notifications = [
    "Nouvelle conférence ajoutée : Angular 21",
    "Rappel : Web Conference demain à Sousse"
  ];

  // Méthode appelée lors du clic sur le bouton
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}