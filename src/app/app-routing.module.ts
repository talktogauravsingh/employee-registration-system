import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpemploydetailComponent } from './upemploydetail/upemploydetail.component';
import { EmploydetailComponent } from './employdetail/employdetail.component';


const routes: Routes = [
  { path: 'updateemployedetails', component: UpemploydetailComponent },
  { path: 'employedetail', component: EmploydetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
