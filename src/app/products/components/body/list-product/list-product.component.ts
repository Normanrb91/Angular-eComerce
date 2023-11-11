import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/products/interfaces/products';
import { CartService } from 'src/app/products/services/cart.service';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {

  @Output() pageEmitter = new EventEmitter<number>();
  products: Product[]
  currentPage: number = 1
  totalPage: number = 0

  constructor(private productService: ProductService, private cartService: CartService) {

    this.productService.getProducts()
      .subscribe(products => {
        this.products = products.data.data
        this.totalPage = products.data.last_page
      })
  }

  addToCart(product: Product ){
    this.cartService.addProductCart(product)

  }

  onPageChange(page: number){
      this.currentPage = this.currentPage + page
      this.pageEmitter.emit(this.currentPage)
  }


}
