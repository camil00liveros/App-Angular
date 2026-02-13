import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: '/modulos/dashboard.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App-Angular');
  protected readonly active = signal('inicio');
  protected setActive(view: string) { this.active.set(view); }
}
