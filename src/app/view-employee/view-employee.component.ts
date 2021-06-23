import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
  }
  handleClick()
  {
    this.service.getEmployeeDetails().subscribe(response=>{console.log(response)})
  }

}
