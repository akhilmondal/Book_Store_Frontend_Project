import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { BookdetailsComponent } from './Components/bookdetails/bookdetails.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderplacedComponent } from './Components/orderplaced/orderplaced.component';
import { authguardGuard } from './Components/auth/authguard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authguardGuard],
    children: [
      {
        path: 'getallbooks',
        component: GetallbooksComponent,
      },
      { path: 'getallbooks/:id', component: BookdetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'orderplaced', component: OrderplacedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
