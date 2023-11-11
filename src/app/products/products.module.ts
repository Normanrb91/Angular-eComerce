import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/header/cart/cart.component';
import { CartItemComponent } from './components/header/cart/cart-item/cart-item.component';
import { FeaturedComponent } from './components/header/featured/featured.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { SidebarComponent } from './components/body/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { ListProductComponent } from './components/body/list-product/list-product.component';
import { SortComponent } from './components/body/sort/sort.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CartComponent,
    CartItemComponent,
    FeaturedComponent,
    NavbarComponent,
    SidebarComponent,
    BodyComponent,
    ListProductComponent,
    SortComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ]
})
export class ProductsModule { }
