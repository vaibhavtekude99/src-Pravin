import { TravelAgentDetails } from "./TravelAgentDetails";
import { TravelRequest } from "./TravelRequest";

export class BookingDetails
{
      bookingId:number = 0  ;
	  travelRequest : TravelRequest = new TravelRequest();
	
	  agentDetails : TravelAgentDetails = new TravelAgentDetails();
	  startDate: Date = new Date();
	  endDate: Date = new Date();
	  staysIn: string= '';
	  costEstimation : number = 0;
    
}