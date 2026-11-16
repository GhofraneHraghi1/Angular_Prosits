import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  // On définit les données de l'utilisateur
  user = {
    name: 'Ahmed',
    email: 'ahmed@email.com'
  };
}