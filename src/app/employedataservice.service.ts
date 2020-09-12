import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './upemploydetail/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmployedataserviceService {

  private apiurl = "https://testproject1-ee0d4.firebaseio.com/";
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<User>(this.apiurl + "employee_details.json");
 }


 
}
