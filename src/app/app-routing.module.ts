import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';


const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
    data: { preload: true }
  },
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true,preloadingStrategy: SelectivePreloadingStrategyService})],
  exports: [RouterModule],
  providers:[SelectivePreloadingStrategyService]
})
export class AppRoutingModule { }
