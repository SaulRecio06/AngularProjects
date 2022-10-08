import { Component, EventEmitter } from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  
  productWasSelected(product: Product): void {
    console.log("Product clicked: ",product);
  }
  constructor()
  {
    this.products = [
      new Product(
        'MYSHOES',
        'Black running Shoes',
        '../assets/images/products/black-shoes.jpg',
        ["Men","Shoes","Running Shoes"],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '../assets/images/products/blue-jacket.jpg',
        ["Women","Appareal","Jackets & Vests"],
        238.99),
      new Product(
        'NICEHAT',
        'A nice black hat',
        '../assets/images/products/black-hat.jpg',
        ["Men","Accesories","Hats"],
        29.99)
      
    ];
  }

  
  
}
