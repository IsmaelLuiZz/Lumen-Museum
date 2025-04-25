import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { HomeComponent } from "./views/home/home.component";;
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  export class AppComponent {
    title = 'lumen-museum';
    constructor(private scroller: ViewportScroller) {}
  
    scrollTo(anchor: string) {
      this.scroller.scrollToAnchor(anchor);
    }
  }
