import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  code:string="";
  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
  }

  deleteCountry()
  {
    this.service.deleteCountryDetails(this.code).subscribe(response=>{console.log(response)});
  }
}
