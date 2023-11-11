import { Component } from '@angular/core';
import { Product } from 'src/app/products/interfaces/products';
import { CartService } from 'src/app/products/services/cart.service';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {

  products: Product[]

  constructor(private productService: ProductService, private cartService: CartService) {

    this.productService.getProducts()
      .subscribe(products => this.products = products)
  }

  addToCart(product: Product ){
    this.cartService.addProductCart(product)

  }

}
