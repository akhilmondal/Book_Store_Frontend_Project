import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { BookdetailsComponent } from './Components/bookdetails/bookdetails.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'getallbooks', component: GetallbooksComponent },
      { path: 'getallbooks/:id', component: BookdetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
