import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelRequest } from 'src/app/pojo/TravelRequest';
import { LoginDetails } from 'src/app/pojo/LoginDetails';
@Injectable({
  providedIn: 'root'
})
export class TravelRequestDetailsService 
{
  baseURL: string = "http://localhost:8080/travelRequestDetails";

  constructor(private http: HttpClient) { }


  getAllTravelRequestDetails(): Observable<TravelRequest[]>
   {
    return this.http.get<TravelRequest[]>(this.baseURL);
   }
  addNewTravelRequest(travelRequest: TravelRequest): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL + '/travelrequest', travelRequest);
  }

  getSingleTravelRequestDetailById(loginId: number): Observable<TravelRequest> {
    console.log(loginId);
    console.log("inside service get Single Employe by loginId method")
    return this.http.get<TravelRequest>(this.baseURL + '/travelrequest');
  }



}

