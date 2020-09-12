import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployedataserviceService } from '../employedataservice.service';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upemploydetail',
  templateUrl: './upemploydetail.component.html',
  styleUrls: ['./upemploydetail.component.css']
})
export class UpemploydetailComponent implements OnInit {

  isAlert:boolean = true;
  isShow:boolean = false;

  @ViewChild('userForm') userForm: NgForm;

  private apiurl = "https://testproject1-ee0d4.firebaseio.com/employee_details.json";
  
  constructor(private eservice: EmployedataserviceService, private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  onAddEmployee(userData: User){
    this.http.post<User>(this.apiurl, userData).subscribe((res)=>{
      if(res){
        this.isShow = true;
        this.isAlert = true;
      } else {
        this.isShow = true;
        this.isAlert = false;
      }

    })
  }

}
