import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { FoodDescComponent } from './food-desc/food-desc.component';
import { CategoryComponent } from './category/category.component';
import { OrderListPageComponent } from './order-list-page/order-list-page.component';
import { PaymentComponent } from './payment/payment.component';
import { StatusComponent } from './status/status.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodDescComponent,
    CategoryComponent,
    OrderListPageComponent,
    PaymentComponent,
    StatusComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    NoopAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
