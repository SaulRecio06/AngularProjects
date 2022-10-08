import { Component, Input,HostBinding } from '@angular/core';
import {Product} from "../product.model";
@Component({
  selector: 'product-image',
  template: `
  <img src="{{ product.imageUrl }}">
  `

  //styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent{

 @Input()
 product!: Product;

 @HostBinding("attr.class") cssClass = "ui small image";

}
