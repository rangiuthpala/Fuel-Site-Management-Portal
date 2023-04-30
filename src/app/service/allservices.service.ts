import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Buffer } from 'buffer';

@Injectable({
  providedIn: "root",
})
export class AllservicesService {

  private apiServerUrl = environment.apiUrl;

  private basicAuth: string = `${environment.apiUserName}:${environment.apiPassword}`;

  private encoded: string = Buffer.from(this.basicAuth).toString("base64");
  
  constructor(private http: HttpClient) {}


  getFuelIndicatorlist(): Observable<Fuelindicator[]>{
    // Set the headers with the Authorization header
    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

      //Get now date
    const date = this.formatDate(new Date());
    return this.http.get<Fuelindicator[]>(`${this.apiServerUrl}/Dashboard/Thumbs/${date}`, {headers});
  }

  getAllTerminalStatus(): Observable<TerminalStatus[]>{

    // Set the headers with the Authorization header
    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<TerminalStatus[]>(`${this.apiServerUrl}/Terminals`, {headers});
  }

  //format Date
  formatDate(date: Date) {
    const dateSring = date.toISOString();
    return dateSring.slice(0,10);
  }
}

//Fuel Indicator Interface
export interface Fuelindicator {
  productId: string;
  itemName: string;
  backColour: string;
  noOfSales: string;
  totalAmount: string;
  productPrice: string;

}

//Terminal Status
export interface TerminalStatus {
  id: string;
  deviceType: string;
  serieal: string;
  ipAddress: string;
  printerStatus: string;
  paperLevel: string;
  status: string;
  audioVolume: string;
  lastUpdatedAt: string;
}

