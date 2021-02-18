import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-service/customer-service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService)  { }
  
  customers = [];
  
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((dataInjectedFromService: any[])=>{  
			console.log(dataInjectedFromService);  
			this.customers = dataInjectedFromService;  
		})  
  }

}
