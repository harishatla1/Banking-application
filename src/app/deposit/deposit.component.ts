import { Component, OnInit } from '@angular/core';
import { Deposit } from '../shared/deposit';
import { OpenAccountService } from '../shared/open-account.service';
import { OpenAccount } from '../shared/openAccount';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depositDet:Deposit={
    deptId:'',
    amt:0
  }

  constructor(public openAccount: OpenAccountService) { }
  accDetailsresponse:OpenAccount[]=[]
  

  ngOnInit(): void {
    this.openAccount.getAccountDetails().subscribe((response)=>
    {
      this.accDetailsresponse=response;
      console.log(this.accDetailsresponse);
       
    });
  }

  loadBalance(event:any){
    this.depositDet.deptId=event.target.value
    console.log(this.depositDet.deptId)
    for(let i=0;i<this.accDetailsresponse.length;i++){
      if(this.accDetailsresponse[i].account_no==this.depositDet.deptId){
        this.depositDet.amt=this.accDetailsresponse[i].bal;
        console.log(this.depositDet.amt);
        break;
      }
    }
  }

  depositAmount(){
    this.openAccount
  }

}
