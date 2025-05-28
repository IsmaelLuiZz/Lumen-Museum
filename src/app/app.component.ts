import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/views/home/home.component';
import { ExhibitionComponent } from './components/views/home/exhibition/exhibition.component';
import { FooterComponent } from './components/views/home/footer/footer.component';
import { ArtShowcasesComponent } from './components/views/home/art-showcases/art-showcases.component';
import { LoginComponent } from './components/views/ticketing/login/login.component';
import { PurchaseComponent } from './components/views/ticketing/purchase/purchase.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HomeComponent, ExhibitionComponent, FooterComponent, ArtShowcasesComponent, LoginComponent, PurchaseComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lumen-museum';
}
