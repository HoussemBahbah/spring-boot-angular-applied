import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {CustomerComponent} from './customer/customer-list/customer.component'
import { CustomerShowComponent } from './customer/customer-show/customer-show.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerShowComponent,
    NavbarComponent,
    CustomerAddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
