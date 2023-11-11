import { Component, EventEmitter, Output } from '@angular/core';
import { Categories } from 'src/app/products/interfaces/products';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() categoriesEmitter = new EventEmitter<string[]>();
  categories: Categories[] = ['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature']
  categoriesCheck: string[] = []


  onChange($event: Event){
    const category: string = ($event.target as HTMLInputElement).name;
    
    if(this.categoriesCheck.includes(category)){
      this.categoriesCheck = this.categoriesCheck.filter(cat => cat !== category)
    }else {
      this.categoriesCheck.push(category)
    }

    this.categoriesEmitter.emit(this.categoriesCheck);
  }

}
