import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { DisplaybooksComponent } from './Components/displaybooks/displaybooks.component';
import { BookdetailsComponent } from './Components/bookdetails/bookdetails.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderplacedComponent } from './Components/orderplaced/orderplaced.component';
import { SearchBookPipe } from './Pipe/filterBooks/search-book.pipe';
import { AuthguardService } from './Services/auth/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GetallbooksComponent,
    DisplaybooksComponent,
    BookdetailsComponent,
    CartComponent,
    OrderplacedComponent,
    SearchBookPipe,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
