import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-service/customer-service';
import {Customer} from '../customer-model/customer-model.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-show',
  templateUrl: './customer-show.component.html',
  styleUrls: ['./customer-show.component.css']
})
export class CustomerShowComponent implements OnInit {
  customer = new Customer('','','');
  id;

  constructor(private customerService: CustomerService,private router: Router,private location: Location, private activatedRoute: ActivatedRoute) { }

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

}
