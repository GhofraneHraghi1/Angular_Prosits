import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Friends } from './components/friends/friends';
import { Navbar } from './components/navbar/navbar';
import { Notifications } from './components/notifications/notifications';
import { Profil } from './components/profil/profil';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Friends, Navbar, Notifications, Profil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
