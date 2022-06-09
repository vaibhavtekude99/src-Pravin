import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/pojo/EmployeeDetails';
import { TravelRequest } from 'src/app/pojo/TravelRequest';
import { TravelRequestDetailsService } from 'src/app/services/travelRequestDetailsService/travel-request-details.service';

@Component({
  selector: 'app-employee-raised-request',
  templateUrl: './employee-raised-request.component.html',
  styleUrls: ['./employee-raised-request.component.css']
})
export class EmployeeRaisedRequestComponent implements OnInit {

  employeeDetails: EmployeeDetails = new EmployeeDetails();
  travelRequest: TravelRequest = new TravelRequest();
  submitted:boolean=false;

  constructor(private travelRequestService: TravelRequestDetailsService,private router:Router) { }

  loginId: number = 0;

  ngOnInit(): void {
    
    this.employeeDetails = JSON.parse(sessionStorage.getItem('employee') || '{}');
    console.log('inside employee raise request');
    console.log(this.employeeDetails);
    console.log(this.travelRequest);
    console.log('setting employee to travel request');
    this.travelRequest.employeeDetails = this.employeeDetails;
    console.log(this.travelRequest);
  }


  onClickLogin() {

     this.submitted=true;

    console.log('inside onClick Method');
    console.log(this.travelRequest);
    this.travelRequestService.addNewTravelRequest(this.travelRequest).subscribe(
      data => {
        console.log(data);
      }
    );

  }

  goToHome(){
    this.router.navigate(['/employeehome']);
  }
}

