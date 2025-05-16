import { Component } from '@angular/core';

@Component({
  selector: 'app-museum-map',
  templateUrl: './museum-map.component.html',
  styleUrls: ['./museum-map.component.css']
})
export class MuseumMapComponent {
  selectedRoom: string | null = null;

  selectRoom(room: string) {
    this.selectedRoom = room;
  }
}
