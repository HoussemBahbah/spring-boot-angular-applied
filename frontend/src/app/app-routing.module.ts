import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer-list/customer.component'
import { CustomerShowComponent } from './customer/customer-show/customer-show.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';


const routes: Routes = [
{path: '', component: CustomerComponent} ,
{path: 'add', component:CustomerAddComponent},
{path: 'list', component:CustomerComponent},
{path: 'show/:id', component:CustomerShowComponent},
{path: 'edit/:id', component:CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
