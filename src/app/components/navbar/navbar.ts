import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  listItems = [
    {name:'Accueil', link:'/'},
    {name:'Profil', link:'/about'},
    {name:'Conferences', link:'/contact'},
    {name:'Amis', link:'/projects'}, // J'ai mis Amis au lieu de Friends pour coller à la capture
    {name:'Notifications', link:'/notif'},
    {name:'Admin', link:'/admin'},
  ]
}