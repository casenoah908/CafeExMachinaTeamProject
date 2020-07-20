import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { StatusComponent } from './status/status.component';
import { OrderListPageComponent } from './order-list-page/order-list-page.component';
import { CategoryComponent } from './category/category.component';
import { FoodDescComponent } from './food-desc/food-desc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'food-description', component: FoodDescComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'order-list', component: OrderListPageComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'status', component: StatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
