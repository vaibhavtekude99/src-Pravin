import { DocumentDetails } from "./DocumentDetails";
import { EmployeeDetails } from "./EmployeeDetails";

export class TravelRequest
{
      travelRequestId : number = 0;
	  travelPurpose : string = '';
	  startDate : Date = new Date();
	  endDate : Date = new Date();
	  managerStatus : string = 'NEW';
	  agentStatus : string = 'NEW';
	  directorStatus : string = 'NEW';
	  destinationFrom : string = '';
	  destinationTo : string = '';
	  employeeDetails : EmployeeDetails = new EmployeeDetails();
	  documentDetails : DocumentDetails = new DocumentDetails();
}