import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginHomeComponent } from './components/loginDetails/login-home/login-home.component';
import { EmployeeDetailsHomeComponent } from './components/employeeDetails/employee-details-home/employee-details-home.component';
import { DirectorDetailsHomeComponent } from './components/directorDetails/director-details-home/director-details-home.component';
import { ProjectManagerDetailsHomeComponent } from './components/projectManagerDetails/project-manager-details-home/project-manager-details-home.component';
import { TravelAgentDetailsHomeComponent } from './components/travelAgentDetails/travel-agent-details-home/travel-agent-details-home.component';

import { CheckStatusComponent } from './components/employeeDetails/check-status/check-status.component';
import { LogOutComponent } from './components/employeeDetails/log-out/log-out.component';
import { EmployeeRaisedRequestComponent } from './components/employeeDetails/employee-raised-request/employee-raised-request.component';
import { BookingDetailsComponent } from './components/travelAgentDetails/booking-details/booking-details.component';
import { RequestViewComponent } from './components/travelAgentDetails/request-view/request-view.component';
import { ViewRequestsComponent } from './components/directorDetails/view-requests/view-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginHomeComponent,
    EmployeeDetailsHomeComponent,
    DirectorDetailsHomeComponent,
    ProjectManagerDetailsHomeComponent,
    TravelAgentDetailsHomeComponent,
    CheckStatusComponent,
    LogOutComponent,
    EmployeeRaisedRequestComponent,
    BookingDetailsComponent,
    RequestViewComponent,
    ViewRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
