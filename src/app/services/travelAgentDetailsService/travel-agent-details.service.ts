import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelAgentDetails } from 'src/app/pojo/TravelAgentDetails';

@Injectable({
  providedIn: 'root'
})
export class TravelAgentDetailsService {

  baseURL : string ="http://localhost:8080/employeeDetails/employee";

  constructor(private http: HttpClient) { }


  getAllTravelAgentDetails(): Observable<TravelAgentDetails[]>
  {
    return this.http.get<TravelAgentDetails[]>(this.baseURL);
  }

 
  getSingleTravelAgentDetailById(agentId:number):Observable<TravelAgentDetails>
  {
    console.log("inside service get Singlelogin method")
    return this.http.get<TravelAgentDetails>(this.baseURL+'/'+agentId);
  }
}
