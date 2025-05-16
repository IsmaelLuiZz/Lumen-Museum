import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MuseumMapComponent } from './views/home/map/museum-map/museum-map.component';
import { CalendarioEventosComponent } from './views/home/calendario-eventos/calendario-eventos.component'; // ajuste o caminho

@Component({
  selector: 'app-root',
  standalone: true,  // importante se você usa standalone
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MuseumMapComponent,
    CalendarioEventosComponent  // importe aqui o componente que tem o selector app-event-list
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-lumen-museum';
}
