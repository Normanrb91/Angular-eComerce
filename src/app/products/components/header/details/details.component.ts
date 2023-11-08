import { Component, Input } from '@angular/core';
import { Product } from 'src/app/products/interfaces/products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() productFeatured: Product

}
