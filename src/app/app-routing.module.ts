import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomePage } from './home/home.page';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    component:HomePage
  },{
    path:'my_account',
    component:MyAccountComponent
  },{
    path:'category',
    component:CategoriesComponent
  },{
    path:'my_order',
    component:MyOrdersComponent
  },{
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
