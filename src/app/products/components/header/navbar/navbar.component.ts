import { Component } from '@angular/core';

import { CartService } from 'src/app/products/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  counterProduct: number
  showCart: boolean;

  constructor(private cartService: CartService) {
    this.cartService.showCart$
      .subscribe(showCart => this.showCart = showCart)

    this.cartService.products$
      .subscribe(products => this.counterProduct = products.length)
  }

  toggleShowCart(){
    this.cartService.toggleCartProduct()
  }
}
