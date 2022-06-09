import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/pojo/EmployeeDetails';
import { LoginDetails } from 'src/app/pojo/LoginDetails';
import { EmployeeDetailsService } from 'src/app/services/employeeDetailsService/employee-details.service';
import { LoginDetailsService } from 'src/app/services/loginDetailsService/login-details.service';


@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {
  loginDetails: LoginDetails = new LoginDetails();
  employeeDetails: EmployeeDetails = new EmployeeDetails();

  loginId: number = 0;
  loginIdDB: number = 0;
  passwordDB: string = '';
  constructor(private loginService: LoginDetailsService, private activatedRoute: ActivatedRoute, private employeeService: EmployeeDetailsService, private router: Router) { }

  ngOnInit(): void {


  }

  onClickLogin() {
    console.log(this.loginDetails);
    // this.submitted=true;

    this.employeeService.getEmployeeById(this.loginDetails.loginId).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        sessionStorage.setItem('employee', JSON.stringify(this.employeeDetails));
      }
    );

    this.loginService.userLogin(this.loginDetails).subscribe(data => {
      this.loginDetails = data;
      console.log(this.loginDetails);
      if (this.loginDetails.role === 'DIRECTOR') {
        this.router.navigate(['/directorhome']);
      }
      if (this.loginDetails.role === 'PROJECT_MANAGER') {
        this.router.navigate(['/projectmanager']);
      }
      if (this.loginDetails.role === 'EMPLOYEE') {
        this.router.navigate(['/employeehome']);
      }
      if (this.loginDetails.role === 'TRAVEL_AGENT') {
        this.router.navigate(['/agenthome']);
      }
    });
  }
}
