import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { CardComponent } from './componentes/card.component';
import { DashboardComponent } from './modulos/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App-Angular');
  protected readonly active = signal('inicio');
  protected setActive(view: string) { this.active.set(view); }
}
