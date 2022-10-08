import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
  //styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  isSelected(product: Product): boolean {
    if(!product || !this.currentProduct)
    {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  clicked(product: Product): void 
  {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  
  @Input() productList: Product[] = [];
  
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct!: Product;
  constructor(){
    this.onProductSelected = new EventEmitter();
  }

}
