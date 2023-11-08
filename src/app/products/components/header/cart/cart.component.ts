import { Component } from '@angular/core';
import { Product } from 'src/app/products/interfaces/products';
import { CartService } from 'src/app/products/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products: Product[] = []


  constructor(private cartService: CartService){
    this.cartService.products$
      .subscribe(product => this.products = product)
  }


  clearCart(){
    this.cartService.deleteAllProductCart()
  }

}
