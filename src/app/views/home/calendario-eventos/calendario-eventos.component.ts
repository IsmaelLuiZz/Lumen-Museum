import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario-eventos.component.html',
  styleUrls: ['./calendario-eventos.component.css']
})
export class CalendarioEventosComponent {
  events = [
    { date: new Date(2025, 4, 1), title: 'Exposição Van gogh' },
    { date: new Date(2025, 4, 8), title: 'Exposição Artes Nordestina' },
    { date: new Date(2025, 4, 12), title: 'Exposição Artista Indepedentes' },
    { date: new Date(2025, 4, 18), title: 'Exposição Artista Indepedentes' },
    { date: new Date(2025, 4, 22), title: 'Exposição Artista Indepedentes' },
  ];
}
