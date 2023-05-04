import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { Buffer } from "buffer";

@Injectable({
  providedIn: "root",
})
export class AllservicesService {
  private apiServerUrl = environment.apiUrl;

  private basicAuth: string = `${environment.apiUserName}:${environment.apiPassword}`;

  private encoded: string = Buffer.from(this.basicAuth).toString("base64");

  constructor(private http: HttpClient) {}

  getFuelIndicatorlist(): Observable<Fuelindicator[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    //Get now date
    const date = this.formatDate(new Date());
    return this.http.get<Fuelindicator[]>(
      `${this.apiServerUrl}/Dashboard/Thumbs/${date}`,
      { headers }
    );
  }

  getAllTerminalStatus(): Observable<TerminalStatus[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<TerminalStatus[]>(`${this.apiServerUrl}/Terminals`, {
      headers,
    });
  }

  getAllPums(): Observable<Items[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<Items[]>(`${this.apiServerUrl}/Transactions/Pumps`, {
      headers,
    });
  }

  getAllFuelGrades(): Observable<Items[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<Items[]>(
      `${this.apiServerUrl}/Transactions/Products`,
      { headers }
    );
  }

  getAllTerminals(): Observable<Items[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<Items[]>(
      `${this.apiServerUrl}/Transactions/Terminals`,
      { headers }
    );
  }

  postTransactions(inputData: any): Observable<TrasnactionResponse[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.post<TrasnactionResponse[]>(
      `${this.apiServerUrl}/Transactions`,
      inputData,
      { headers }
    );
  }

  getSalesTotalReport(fromDate: any, toDate: any): Observable<TotalSalesReport[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<TotalSalesReport[]>(
      `${this.apiServerUrl}/Reports/GetSales?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }

  getPMWiseReport(fromDate: any, toDate: any): Observable<PayModeWiseSale[]>  {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get<PayModeWiseSale[]>(
      `${this.apiServerUrl}/Reports/PayModeWiseSales?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }
  getPumpWiseReport(fromDate: any, toDate: any): Observable<PumpWiseSale[]>  {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get<PumpWiseSale[]>(
      `${this.apiServerUrl}/Reports/PumpWiseSales?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }
  getTerminalWiseReport(fromDate: any, toDate: any): Observable<TerminalWiseSale[]>  {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get<TerminalWiseSale[]>(
      `${this.apiServerUrl}/Reports/TerminalWiseSales?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }
  getSalesComparison(fromDate: any, toDate: any) {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get(
      `${this.apiServerUrl}/Reports/SalesComparison?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }

  getAllDeliveryTotals(fromDate: any, toDate: any): Observable<DeliveryTotal[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    
    return this.http.get<DeliveryTotal[]>(`${this.apiServerUrl}/Transactions/DeliveryTotals?fromDate=${fromDate}&toDate=${toDate}`, {headers})
  }

  //format Date
  formatDate(date: Date) {
    const dateSring = date.toISOString();
    return dateSring.slice(0, 10);
  }

  formatDateNew(date: any):string {
    return date.substring(6, 10) + '-' + date.substring(3, 5) + '-' + date.substring(0, 2);
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

//Transaction Request
export interface TransactionRequest {
  fromDate: string;
  toDate: string;
  searchText: string;
  pumpID: string;
  terminalID: string;
  blendID: string;
}

// Trasaction Response
export interface TrasnactionResponse {
  transactionID: string;
  quantity: string;
  unitPrice: string;
  fuelGrade: string;
  pump: string;
  cardType: string;
  amount: string;
  result: string;
  cardNumber: string;
  receipt: string;
  transactionDate: string;
  terminalID: string;
}

// Items clas
export interface Items {
  id: string;
  itemName: string;
}

//Delivery Totals
export interface DeliveryTotal {
  deliveryID: number;
  pump: number;
  productID: number;
  productName: string;
  mode: string;
  limit: string;
  volume: string;
  price: string;
  amount: string;
  transDate: string;
  transTime: string;
}
//Total Sales Report
export interface TotalSalesReport {
  transactionNumber: string;
  quantity: string;
  unitPrice: string;
  pumpID: string;
  amount: string;
  dDate: string;
  dTime: string;
  terminalID: string;
  productName: string;
  cardType: string;
}

//Pay Mode Wise Sale report
export interface PayModeWiseSale {
  cardType: string;
  quantity: string;
  totalAmt: string;
  dDate: string;
}

//Pump Wise sale report
export interface PumpWiseSale {
  pumpID: string;
  quantity: string;
  totalAmount: string;
  dDate: string;
}

//Terminal Wise Sale Report
export interface TerminalWiseSale {
  terminalID: string;
  quantity: string;
  totalAmt: string;
  dDate: string;
}
