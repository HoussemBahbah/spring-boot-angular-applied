import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer-list/customer.component'
import { CustomerShowComponent } from './customer/customer-show/customer-show.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
{path: '', component: CustomerComponent,canActivate:[AuthGaurdService] } ,
{path: 'add', component:CustomerAddComponent,canActivate:[AuthGaurdService] },
{path: 'list', component:CustomerComponent,canActivate:[AuthGaurdService] },
{path: 'show/:id', component:CustomerShowComponent,canActivate:[AuthGaurdService] },
{path: 'edit/:id', component:CustomerEditComponent,canActivate:[AuthGaurdService] },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
