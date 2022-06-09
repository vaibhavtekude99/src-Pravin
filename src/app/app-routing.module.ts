import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorDetailsHomeComponent } from './components/directorDetails/director-details-home/director-details-home.component';
import { ViewRequestsComponent } from './components/directorDetails/view-requests/view-requests.component';
import { CheckStatusComponent } from './components/employeeDetails/check-status/check-status.component';
import { EmployeeDetailsHomeComponent } from './components/employeeDetails/employee-details-home/employee-details-home.component';

import { LoginHomeComponent } from './components/loginDetails/login-home/login-home.component';
import { EmployeeRaisedRequestComponent } from './components/employeeDetails/employee-raised-request/employee-raised-request.component';
import { ProjectManagerDetailsHomeComponent } from './components/projectManagerDetails/project-manager-details-home/project-manager-details-home.component';
import { BookingDetailsComponent } from './components/travelAgentDetails/booking-details/booking-details.component';
import { TravelAgentDetailsHomeComponent } from './components/travelAgentDetails/travel-agent-details-home/travel-agent-details-home.component';


const routes: Routes = [

  // {path:'',redirectTo:'goToLogin', pathMatch:'full'},
  { path: 'gotologin', component: LoginHomeComponent },
  {
    path: 'employeehome', component: EmployeeDetailsHomeComponent,
    children: [
      { path: 'raiserequest', component: EmployeeRaisedRequestComponent },
      { path: 'checkstatus', component: CheckStatusComponent }
    ]
  },
  {
    path: 'agenthome', component: TravelAgentDetailsHomeComponent,
    children: [
      { path: 'bookingdetails', component: BookingDetailsComponent },
      { path: 'viewrequests', component: ViewRequestsComponent }
    ]
  },
  {
    path: 'directorhome', component: DirectorDetailsHomeComponent,
    children: [
      { path: 'employeeraisedrequest', component: ViewRequestsComponent }
    ]
  },
  {
    path: 'projectmanager', component: ProjectManagerDetailsHomeComponent,
    children: [
      { path: 'employeeraisedreq', component: EmployeeRaisedRequestComponent },
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
