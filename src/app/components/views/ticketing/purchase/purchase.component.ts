import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-purchase',
  imports: [CommonModule , FormsModule],
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('500ms ease-in', style({ opacity: 1 }))]),
      transition(':leave', [animate('500ms ease-out', style({ opacity: 0 }))])
    ])
  ]
})
export class PurchaseComponent implements OnInit {
  exhibitions = ['Modern Art', 'Digital Tour', 'Installations'];
  exhibition = this.exhibitions[0];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('auth')) {
      this.router.navigate(['/login']);
    }
  }

  buy() {
    alert(`Ticket for "${this.exhibition}" purchased successfully!`);
  }
}
