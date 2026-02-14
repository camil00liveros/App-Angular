import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  protected readonly active = signal('inicio');
  protected setActive(view: string) { this.active.set(view); }
  protected activeValue() { return this.active(); }
}
