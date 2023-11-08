import { Component, Input } from '@angular/core';
import { Product } from 'src/app/products/interfaces/products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() productFeatured: Product
  
}
