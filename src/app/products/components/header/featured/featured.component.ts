import { Component, Input } from '@angular/core';

import { Product } from 'src/app/products/interfaces/products';
import { CartService } from 'src/app/products/services/cart.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {

  @Input() productFeatured: Product

  constructor(private cartService: CartService){}

  addToCart(product: Product ){
    this.cartService.addProductCart(product)

  }
}
