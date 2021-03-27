import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer-model/customer-model.model';
import {CustomerService} from '../customer-service/customer-service';
import{Router} from'@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customer = new Customer('','','');
  
  constructor(private customerService: CustomerService,private router: Router,private location: Location){}

  ngOnInit(): void {
  }

  save(): void {
      const data = {
        userName: this.customer.userName,
        email: this.customer.email,
        phoneNumber: this.customer.phoneNumber
      };

  this.customerService.save(this.customer)
        .subscribe(
          response => {
            console.log(response);
            alert('Customer Added successfully.');
            //this.router.navigate(['/']);
            this.goBack();
          },
          error => {
            console.log(error);
          });

  }

  goBack(): void {
    this.location.back();
  }
}
