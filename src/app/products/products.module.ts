import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { DetailsComponent } from './components/header/details/details.component';
import { CardComponent } from './components/header/card/card.component';
import { CartComponent } from './components/header/cart/cart.component';
import { CartItemComponent } from './components/header/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    DetailsComponent,
    CardComponent,
    CartComponent,
    CartItemComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
