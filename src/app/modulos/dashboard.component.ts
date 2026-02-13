import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { CardComponent } from '../componentes/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  protected readonly active = signal('inicio');
  protected setActive(view: string) { this.active.set(view); }
  protected activeValue() { return this.active(); }
}
