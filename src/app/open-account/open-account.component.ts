import { Component, OnInit } from '@angular/core';
import { OpenAccountService } from '../shared/open-account.service';
import { OpenAccount } from '../shared/openAccount';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {

  constructor(public openAccount: OpenAccountService ) { }


  addAccountData: OpenAccount={

        'account_no': 0,
        'name': '',
        'mobile': 0,
        'address': '',
        'dateOfBirth': 0,
        'balance': 0
  }
  
  

  ngOnInit(): void {
  }

  addAccount(){
    this.openAccount.addAccountData(this.addAccountData).subscribe((response)=>
    {
      this.addAccountData=response;
    });
    

  }
}
