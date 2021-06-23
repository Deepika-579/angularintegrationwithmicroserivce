import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  code:string="";
  value:string="";
  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
  }

createCountry()
{
  this.service.createCountryDetails(this.code,this.value).subscribe(response=>{console.log(response)});
}
}
