import { Component, EventEmitter, Output } from '@angular/core';

export type IsAscendig = | 'ASC' | 'DESC'

export type SortEmitter =  {
  type: IsAscendig;
  key: string;
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})

export class SortComponent {

  @Output() sortEmit = new EventEmitter<SortEmitter>();
  type: boolean = true
  key: string = 'price'

  onSelect($event: Event){
    this.key = ($event.target as HTMLSelectElement).value
    this.sortEmit.emit({type: this.type ? 'ASC' : 'DESC', key: this.key});
  }

  toggleSort() {
    this.type = !this.type
    this.sortEmit.emit({type: this.type ? 'ASC' : 'DESC', key: this.key});
  }


}
