import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../customer-model/customer-model.model';
import {environment} from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = environment.apiUrl + '/customer';

  constructor(private httpClient: HttpClient) { }

  public getAllCustomers(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public getById(idCustomer): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url + '/' + idCustomer);
  }
  public update(customer: Customer): Observable<any> {
    return this.httpClient.put(this.url, customer);
  }

  public delete(idCustomer): Observable<any> {
    return this.httpClient.delete(this.url + '/' + idCustomer);
  }

  public save(customer: Customer): Observable<any> {
    return this.httpClient.post(this.url, customer);
  }
}
