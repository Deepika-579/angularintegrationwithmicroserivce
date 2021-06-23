import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
code:string="";
value:string="";
  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
  }
updateCountry()
{
  this.service.updateCountryDetails(this.code,this.value).subscribe(response=>{console.log(response)});
}
}
