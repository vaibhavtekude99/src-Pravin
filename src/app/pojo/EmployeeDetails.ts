import { LoginDetails } from "./LoginDetails";

export class EmployeeDetails
{
      employeeId : number = 0;
	  employeeName : string = '';
	  dateOfBirth : Date = new Date();
	  address : string = '';
	  dateOfJoining : Date = new Date();
	  emailId : string = '';
	  managersNo : number = 0;
	  contactNo : number = 0;
	  designation : string ='';
	  loginDetails : LoginDetails = new LoginDetails();
}