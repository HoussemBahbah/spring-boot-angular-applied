import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerComponent} from './customer/customer-list/customer.component'
import { CustomerShowComponent } from './customer/customer-show/customer-show.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BasicAuthHtppInterceptorService} from './service/BasicAuthHtppInterceptorService';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerShowComponent,
    NavbarComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
