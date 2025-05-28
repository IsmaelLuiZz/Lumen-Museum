import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-art-showcases',
  imports: [CommonModule],
  templateUrl: './art-showcases.component.html',
  styleUrl: './art-showcases.component.scss'
})
export class ArtShowcasesComponent {
  activeTab: 'showcases' | 'programs' = 'showcases';

}
