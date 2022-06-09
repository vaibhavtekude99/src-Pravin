import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/pojo/EmployeeDetails';
import { TravelRequest } from 'src/app/pojo/TravelRequest';
import { TravelRequestDetailsService } from 'src/app/services/travelRequestDetailsService/travel-request-details.service';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {

  employeeDetails : EmployeeDetails =  new EmployeeDetails();
  constructor(private travelRequestService:TravelRequestDetailsService) { }

  ngOnInit(): void {
    this.employeeDetails = JSON.parse(sessionStorage.getItem('employee') || '{}');
  }
 allTravelRequests: TravelRequest []=[];

 




}
