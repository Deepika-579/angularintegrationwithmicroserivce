import { AccountServiceService } from './../account-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  amount:number=0;
  details:any | undefined=undefined;
  constructor(private service:AccountServiceService) { }

  ngOnInit(): void {
  }
  handleClick()
  {

    this.service.getAccountDetails(this.amount).subscribe(response=>{this.details=response});
  }

}
