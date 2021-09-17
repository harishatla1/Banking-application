import { Component, OnInit } from '@angular/core';
import { OpenAccountService } from '../shared/open-account.service';
import { OpenAccount } from '../shared/openAccount';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
  myError: any;

  constructor(public openAccount: OpenAccountService ) { }


  addAccountData: OpenAccount={

    'account_no':'',
        'name': '',
        'mobile':'',
        'address': '',
        'dob': '' ,
        'bal':0  
  }

  ngOnInit(): void {
  }

  addAccount(){
    this.openAccount.addAccountData(this.addAccountData).subscribe((response)=>
    {
      let newAccountData=response;
      console.log(newAccountData);
    },
    (error) => {
      console.log(error.error.message);
      this.myError = error.error.message;
    });
  }

  // getAccount(){
  //   this.openAccount.getAccountData().subscribe((response)=>
  //   {
  //     let getresponse=response;
  //   });
  // }
}
