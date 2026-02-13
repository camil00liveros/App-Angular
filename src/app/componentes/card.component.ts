import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `:host{display:block;box-sizing:border-box;}`
  ]
})
export class CardComponent {}
