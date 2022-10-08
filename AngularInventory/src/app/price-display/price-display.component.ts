import { Component, Input } from '@angular/core';
import { Product } from "../product.model";


@Component({
  selector: 'price-display',
  template: `
  <div class="price-display">\${{ price }}</div>
  `
  //styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent {

  /*
  `
    <div class="price-display">\${{ price }}</div>
    `@Input()
  price!: number
  */
  @Input()
  price!: number;
}
