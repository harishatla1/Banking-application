import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deposit } from './deposit';
import { OpenAccount } from './openAccount';
 

@Injectable({
  providedIn: 'root'
})
export class OpenAccountService {

  //baseUrl = 'https://w96qon5ww3.execute-api.us-east-1.amazonaws.com/live/OpenAccount?option=openaccount&name=${name}&mobile=${mobile}&address=${address}&dob=${dob}';
  // baseUrl = `https://xom5j58dsg.execute-api.us-east-1.amazonaws.com/default/OpenAccount?option=openaccount&name=${name}&mobile=${mobile}&address=${address}&dob=${dob}`;
  getAccountDetailsUrl=`https://xom5j58dsg.execute-api.us-east-1.amazonaws.com/default/OpenAccount?option=getaccounts`;
  addBaseUrl=`https://xom5j58dsg.execute-api.us-east-1.amazonaws.com/default/OpenAccount?option=openaccount`
  depositUrl=`https://xom5j58dsg.execute-api.us-east-1.amazonaws.com/default/OpenAccount?option=deposit`

  private name:string='';
  private address:string='';
  private mobile:string='';
  private dob:string='';

  constructor(public http:HttpClient) { }



  
  addAccountData(newAccount:OpenAccount): Observable<OpenAccount>{
    console.log(newAccount);
    // this.name = newAccount.name;
    // this.address = newAccount.address;
    // this.mobile = newAccount.mobile
    // this.dob = newAccount.dob;

    let name = newAccount.name;
    let address = newAccount.address;
    let mobile = newAccount.mobile;
    let dob = newAccount.dob;
    const baseUrl= `https://xom5j58dsg.execute-api.us-east-1.amazonaws.com/default/OpenAccount?option=openaccount&name=${name}&mobile=${mobile}&address=${address}&dob=${dob}`;
    return this.http.post<OpenAccount>(baseUrl, newAccount);
    }

    getAccountDetails(): Observable<OpenAccount[]>{
      return this.http.get<OpenAccount[]>(this.getAccountDetailsUrl);
    }

    depositAmount(newAmount:Deposit): Observable<Deposit>{
      let deptId=newAmount.depId
      let amt=newAmount.amt
      console.log(deptId)
      console.log(amt);
      const depositUrl=`https://xom5j58dsg.execute-api.us-east-1.amazonaws.com/default/OpenAccount?option=deposit&depId=${deptId}&amt=${amt}`
      return this.http.post<Deposit>(depositUrl,newAmount);

    }
}