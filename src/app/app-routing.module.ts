import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

 { path: 'productos', loadChildren: () => import('./modules/productos/productos.module').then(m => m.ProductosModule) },
 { path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule) },
//  { path: '**', redirectTo: '/productos', pathMatch: 'full'},
 { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
