import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, switchMap } from 'rxjs';

import { Products, Product, Categories } from '../interfaces/products';
import { environment } from 'src/environments/environment';
import { IsAscendig } from '../components/body/sort/sort.component';

type ProductProps = {
  page?: number
  type?: IsAscendig
  key?: string
  categories?: string[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.baseUrl
  private paramsSubject = new BehaviorSubject<ProductProps>({});

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products> {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.paramsSubject.pipe(
      switchMap(params  => {
        const body = {
          sort: {
            key: params .key || 'price',
            type: params .type || 'ASC'
          },
          categories: params .categories || undefined
        };

        return this.http.post<Products>(`${this.baseUrl}/products?page=${params.page || 1}`, body, { headers })
      })
    )
  }

  updateParams(newParams: ProductProps): void {
    this.paramsSubject.next(newParams);
  }

  getProductFeatured(): Observable<Product | undefined>{
    return this.http.post<Products>(`${ this.baseUrl }/products`, {})
    .pipe( map(items => items.data.data.find(product => product.featured === true)) )
  }

}

