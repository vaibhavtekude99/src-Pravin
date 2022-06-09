import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import { SlabMaster } from 'src/app/pojo/SlabMaster';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlabMasterService {

  baseURL : string ="http://localhost:8080/employeeDetails/employee";

  constructor(private http: HttpClient) { }

  getAllSlabDetails(): Observable<SlabMaster[]>
  {
    return this.http.get<SlabMaster[]>(this.baseURL);
  }

 
  getSingleSlabDetailById(slabId:number):Observable<SlabMaster>
  {
    console.log("inside service get Singlelogin method")
    return this.http.get<SlabMaster>(this.baseURL+'/'+slabId);
  }
}
