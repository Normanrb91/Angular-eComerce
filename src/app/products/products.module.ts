import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/header/cart/cart.component';
import { CartItemComponent } from './components/header/cart/cart-item/cart-item.component';
import { FeaturedComponent } from './components/header/featured/featured.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CartComponent,
    CartItemComponent,
    FeaturedComponent,
    NavbarComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
