import { Component } from '@angular/core';
import { map } from 'rxjs';

import { Product } from 'src/app/products/interfaces/products';
import { CartService } from 'src/app/products/services/cart.service';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {

  productFeatured: Product

  constructor(private service: ProductService, private cartService: CartService) {

    this.service.getProductFeatured()
      .subscribe(product => {
        if(product){
          this.productFeatured = product 
        }
      })
  }

  addToCart(product: Product ){
    this.cartService.addProductCart(product)

  }
}
