import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient}   from '@angular/common/http';
import { LoginDetails } from 'src/app/pojo/LoginDetails';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService
 {

  baseURL : string ="http://localhost:8080/logindetails/userlogin";
  constructor(private http: HttpClient)
   { 

   }
   
   getAllLoginDetails():Observable<LoginDetails[]>
   {
     return this.http.get<LoginDetails[]>(this.baseURL);
   }

  
   getSingleLoginDetails(loginId:number):Observable<LoginDetails>
   {
     console.log("inside service get Singlelogin method")
     return this.http.get<LoginDetails>(this.baseURL+'/'+loginId);
   }

   userLogin(logindetails:LoginDetails):Observable<LoginDetails>
   {
      return this.http.post<LoginDetails>(this.baseURL,logindetails);
   }
  
}



