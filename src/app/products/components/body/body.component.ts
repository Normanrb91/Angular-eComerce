import { Component } from '@angular/core';
import { SortEmitter } from './sort/sort.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {

  sort: SortEmitter = {
    type: 'ASC',
    key: 'price'
  }
  categories: string[] | undefined = [] 
  page: number

  constructor(private productsService: ProductService){}

  onSortBy(sort: SortEmitter) {
    this.sort = sort
    this.onFetch()
  }

  onCheckCategories(categories: string[]) {
    this.categories = categories
    this.onFetch()
  }

  onChangePage(page: number) {
    this.page = page
    this.onFetch()
  }

  onFetch(){
    this.productsService.updateParams({
      categories: this.categories?.length ? this.categories : undefined, 
      key: this.sort.key, 
      type: this.sort.type,
      page: this.page
    })
  }


}
