import { Component, Input } from '@angular/core';

import { Product } from 'src/app/products/interfaces/products';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() product!: Product;

  constructor(private cartservice: CartService){}

  deleteProduct(id: string){
    this.cartservice.deleteProductCart(id)
  }
}
