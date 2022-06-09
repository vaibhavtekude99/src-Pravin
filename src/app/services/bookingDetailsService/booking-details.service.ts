import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetails } from 'src/app/pojo/BookingDetails';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

      
  baseURL : string ="http://localhost:8080/employeeDetails/employee";
  constructor(private http: HttpClient)
   { 

   }

   

   getAllBookingDetails():Observable<BookingDetails[]>
   {
     return this.http.get<BookingDetails[]>(this.baseURL);
   }

  
   getBookingDetailsId(bookingId:number):Observable<BookingDetails>
   {
     console.log("inside service get Singlelogin method")
     return this.http.get<BookingDetails>(this.baseURL+'/'+bookingId);
   }

}
