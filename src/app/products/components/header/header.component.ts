import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/products';
import { map } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  productFeatured: Product
  counterProduct: number
  showCart: boolean;

  constructor(private service: ProductService,
              private cartService: CartService) {

    this.service.getProducts()
      .pipe( map(items => items.find(product => product.featured === true)) )
      .subscribe(product => {
        if(product){
          this.productFeatured = product 
        }
      })
      
    this.cartService.showCart$
      .subscribe(showCart => this.showCart = showCart)

    this.cartService.products$
      .subscribe(products => this.counterProduct = products.length)
  }

  toggleShowCart(){
    this.cartService.toggleCartProduct()
  }

}
