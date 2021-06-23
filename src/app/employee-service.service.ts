import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  getEmployeeDetails():Observable<any>

  {
let url=  `http://localhost:8081/api/countries`;
return this.http.get(url);


  }
  deleteCountryDetails(code:string):Observable<any>
  {
    let url=`http://localhost:8081/api/countries/${code}`;
    return this.http.delete(url);
  }
  updateCountryDetails(code:string,value:string):Observable<any>
  {
    let url=`http://localhost:8081/api/countries/${code}`;
    return this.http.put(url,{"code":code,"name":value});
  }
  createCountryDetails(code:string,value:string):Observable<any>
  {
    let url=`http://localhost:8081/api/countries`;
    return this.http.post(url,{"code":code,"name":value});
  }
}
