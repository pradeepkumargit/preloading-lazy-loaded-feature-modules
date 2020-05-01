import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OrdersModule } from '../orders/orders.module';
import { CustomersModule } from '../customers/customers.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OrdersModule,
    CustomersModule
  ]
})
export class HomeModule { }
