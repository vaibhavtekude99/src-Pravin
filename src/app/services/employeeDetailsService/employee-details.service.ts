import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeDetails } from 'src/app/pojo/EmployeeDetails';
import { TravelRequest } from 'src/app/pojo/TravelRequest';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  baseURL: string = "http://localhost:8080/employeedetails";
  constructor(private http: HttpClient,) {

  }



  getAllEmployees(): Observable<EmployeeDetails[]> {
    return this.http.get<EmployeeDetails[]>(this.baseURL + '/employee');
  }


  getEmployeeById(loginId: number): Observable<EmployeeDetails> {
    console.log("inside service get Singlelogin method")
    return this.http.get<EmployeeDetails>(this.baseURL + '/employeebyloginid/' + loginId);
  }
}
