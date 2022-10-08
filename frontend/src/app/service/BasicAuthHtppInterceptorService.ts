import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     const token = sessionStorage.getItem('token');
     console.log('here');
     if (token !== null ) {
      console.log('there is token');
       req = req.clone({
         setHeaders: {
           Authorization: token
         }
       });
     }
     return next.handle(req);
   }
}
