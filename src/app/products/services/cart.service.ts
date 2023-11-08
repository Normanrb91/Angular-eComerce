import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';
import {  BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _showCartProduct : boolean = false
  private _cartProduct: Product[] = []

  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  private showCartSubject = new BehaviorSubject<boolean>(false)
  showCart$ = this.showCartSubject.asObservable();

  get products(){    
    return [...this._cartProduct]
  }

  getShowCartProduct(){
    return this._showCartProduct
  }

  addProductCart(product: Product){
    if(this._cartProduct.includes(product)) return
    this._cartProduct.push(product)
    this.productsSubject.next([...this._cartProduct])
  }

  deleteProductCart(id: string) {
    this._cartProduct = this._cartProduct.filter(p => p._id !== id)
    this.productsSubject.next([...this._cartProduct])
  }

  deleteAllProductCart() {
    this._cartProduct = []
    this._showCartProduct = false
    this.productsSubject.next([...this._cartProduct])
    this.showCartSubject.next(this._showCartProduct)
  }

  toggleCartProduct(){
    this._showCartProduct = !this._showCartProduct
    this.showCartSubject.next(this._showCartProduct)
  }
}
