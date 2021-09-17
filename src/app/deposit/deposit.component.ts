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
    depId:'',
    amt:0
  }
  amount=0;

  printValues(){

    let newDeptId=this.depositDet.depId;
    let newAmt=this.depositDet.amt;
    console.log(newDeptId);
    console.log(newAmt);

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
    this.depositDet.depId=event.target.value
    console.log(this.depositDet.depId)
    for(let i=0;i<this.accDetailsresponse.length;i++){
      if(this.accDetailsresponse[i].account_no==this.depositDet.depId){
        this.amount=this.accDetailsresponse[i].bal;
        console.log(this.amount);
        break;
      }
    }
  }

  addAmount(){
    this.openAccount.depositAmount(this.depositDet).subscribe((response)=>{
      let newAddedAmount = response;
      console.log(newAddedAmount);
    });
  }

   

}
