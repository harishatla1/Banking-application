import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenAccount } from './openAccount';


@Injectable({
  providedIn: 'root'
})
export class OpenAccountService {
  baseUrl = "https://w96qon5ww3.execute-api.us-east-1.amazonaws.com/live/OpenAccount?name=$%7Bname%7D&mobile=$%7Bmobile%7D&address=$%7Baddress%7D&dob=$%7Bdob%7D";


  constructor(public http:HttpClient) { }
  

  addAccountData(newAccount:OpenAccount): Observable<OpenAccount>{
    return this.http.post<OpenAccount>(this.baseUrl, newAccount);
  }
}
