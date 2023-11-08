import { Component } from '@angular/core';
import { map } from 'rxjs';

import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  productFeatured: Product

  constructor(private service: ProductService) {

    this.service.getProducts()
      .pipe( map(items => items.find(product => product.featured === true)) )
      .subscribe(product => {
        if(product){
          this.productFeatured = product 
        }
      })
  }

}
