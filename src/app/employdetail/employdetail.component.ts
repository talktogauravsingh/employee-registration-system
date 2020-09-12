import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployedataserviceService } from '../employedataservice.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../upemploydetail/user.model';


@Component({
  selector: 'app-employdetail',
  templateUrl: './employdetail.component.html',
  styleUrls: ['./employdetail.component.css']
})
export class EmploydetailComponent implements OnInit {

  @ViewChild('userForm') userForm: NgForm;

  public employeedata = [];
  public upId : any;
  private apiurl = "https://testproject1-ee0d4.firebaseio.com/";

  constructor(private eService:EmployedataserviceService, private http: HttpClient) { }

  ngOnInit(): void {

    this.eService.getData()
    .pipe(map(resData=>{
      //console.log(resData);
      const userArray = [];
      for(const key in resData){
        //console.log(key);
        // console.log(resData[key]);
        if(resData.hasOwnProperty(key)){
          userArray.push({userId:key, ...resData[key]})
        }
        
      }
      return userArray
    }))
    .subscribe(users=>{
      //console.log(users);
      this.employeedata = users;
    })

    

  }


  onDeleteEmployee(userId){
    if(confirm('Do you want to delete this Employee Data?')){
         //console.log(userId);
         //console.log(this.apiurl+"employee_details/"+userId+".json")
        this.http.delete(this.apiurl+"employee_details/"+userId+".json")
        .subscribe(()=>{
          window.location.reload();
        })
    }
  }


  onUpdateEmployee(userId){
    
    this.upId = userId;
    
    // console.log(userId);
    //  console.log(this.apiurl+"employee_details/"+userId+".json")
    //  this.http.delete(this.apiurl+"employee_details/"+userId+".json")
    //  .subscribe(()=>{
    //    window.location.reload();
    //  })
  

  }

  onUpdateEmployeeData(userForm: User){
    //console.log(this.upId);
    this.http.put<User>(this.apiurl+"employee_details/"+this.upId+".json", userForm)
    .subscribe(()=>{
      window.location.reload();
    })
  }


}
