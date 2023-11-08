import { Component, Input } from '@angular/core';
import { Product } from 'src/app/products/interfaces/products';
import { CartService } from 'src/app/products/services/cart.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  @Input() productFeatured: Product

  constructor(private cartService: CartService){}

  addToCart(product: Product ){
    this.cartService.addProductCart(product)

  }
}
