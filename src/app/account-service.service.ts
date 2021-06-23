import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http:HttpClient) { }
  getAccountDetails(amount:number):Observable<any>
  {
    let url:string =`http://localhost:8081/one/${amount} `;
    return this.http.post(url,undefined);
  }
}
