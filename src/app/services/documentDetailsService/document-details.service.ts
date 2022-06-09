import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentDetails } from 'src/app/pojo/DocumentDetails';

@Injectable({
  providedIn: 'root'
})
export class DocumentDetailsService {

 
  baseURL : string ="http://localhost:8080/employeeDetails/employee";
  constructor(private http: HttpClient)
   { 

   }

   

   getAllDocuments():Observable<DocumentDetails[]>
   {
     return this.http.get<DocumentDetails[]>(this.baseURL);
   }

  
   getSingleDocumentById(documentId:number):Observable<DocumentDetails>
   {
     console.log("inside service get Singlelogin method")
     return this.http.get<DocumentDetails>(this.baseURL+'/'+ documentId);
   }

  
}
