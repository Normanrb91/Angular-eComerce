import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Products, Product } from '../interfaces/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.post<Products>(`${ this.baseUrl }/products`, {})
    .pipe(map (data => data.data.data));
  }


}
