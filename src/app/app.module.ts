import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpemploydetailComponent } from './upemploydetail/upemploydetail.component';
import { EmploydetailComponent } from './employdetail/employdetail.component';
import { EmployedataserviceService } from './employedataservice.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpemploydetailComponent,
    EmploydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployedataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
