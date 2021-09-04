import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer-model/customer-model.model';
import {CustomerService} from '../customer-service/customer-service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';




@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer = new Customer('','','');
  id;
  
  constructor(private customerService: CustomerService,private router: Router,private location: Location, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
      
    if (this.id) {
      this.customerService.getById(this.id).subscribe(res => {
        this.customer = res;
      }, ex => {
        console.log(ex);
      });
    }
  }

  update(): void {
      const data = {
        id:this.customer.id,
        userName: this.customer.userName,
        email: this.customer.email,
        phoneNumber: this.customer.phoneNumber
      };

  this.customerService.update(data)
        .subscribe(
          response => {
            console.log(this.customer);
            console.log(response);
            alert('Customer Edited successfully.');
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
