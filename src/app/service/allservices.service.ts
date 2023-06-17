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

  getSalesTotalReport(
    fromDate: any,
    toDate: any
  ): Observable<TotalSalesReport[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<TotalSalesReport[]>(
      `${this.apiServerUrl}/Reports/GetSales?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }

  getPMWiseReport(fromDate: any, toDate: any): Observable<PayModeWiseSale[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get<PayModeWiseSale[]>(
      `${this.apiServerUrl}/Reports/PayModeWiseSales?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }
  getPumpWiseReport(fromDate: any, toDate: any): Observable<PumpWiseSale[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get<PumpWiseSale[]>(
      `${this.apiServerUrl}/Reports/PumpWiseSales?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }
  getTerminalWiseReport(
    fromDate: any,
    toDate: any
  ): Observable<TerminalWiseSale[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get<TerminalWiseSale[]>(
      `${this.apiServerUrl}/Reports/TerminalWiseSales?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }
  getSalesComparison(fromDate: any, toDate: any): Observable<PriceBreak[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get<PriceBreak[]>(
      `${this.apiServerUrl}/Reports/SalesComparison?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }

  getPriceBreakData(fromDate: any, toDate: any): Observable<PriceBreak[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get<PriceBreak[]>(
      `${this.apiServerUrl}/Reports/PriceBreakReport?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }

  getGradeSalesData(fromDate: any, toDate: any): Observable<GradeSales[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    return this.http.get<GradeSales[]>(
      `${this.apiServerUrl}/Reports/GradeSalesReport?FromDate=${fromDate}&ToDate=${toDate}`,
      { headers }
    );
  }

  getAllDeliveryTotals(
    fromDate: any,
    toDate: any
  ): Observable<DeliveryTotal[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<DeliveryTotal[]>(
      `${this.apiServerUrl}/Transactions/DeliveryTotals?fromDate=${fromDate}&toDate=${toDate}`,
      { headers }
    );
  }

  // Charts Services
  getGradeProportion(): Observable<GradePropotion[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    //Get now date
    const date = this.formatDate(new Date());
    return this.http.get<GradePropotion[]>(
      `${this.apiServerUrl}/Dashboard/GradePropotion/${date}`,
      { headers }
    );
  }

  getProductSales(): Observable<ProductSales[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    //Get now date
    const date = this.formatDate(new Date());
    return this.http.get<ProductSales[]>(
      `${this.apiServerUrl}/Dashboard/ProductSales/${date}`,
      { headers }
    );
  }

  getTerminalSales(): Observable<TerminalSales[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    //Get now date
    const date = this.formatDate(new Date());
    return this.http.get<TerminalSales[]>(
      `${this.apiServerUrl}/Dashboard/TerminalSales/${date}`,
      { headers }
    );
  }

  getHourlySalesCurrent(): Observable<HourlySales[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    //Get now date
    const date = this.formatDate(new Date());
    return this.http.get<HourlySales[]>(
      `${this.apiServerUrl}/Dashboard/HourlySalesCurrent/${date}?uniqueID="AA"`,
      { headers }
    );
  }

  getAvgHourlySalesCurrent(): Observable<HourlySales[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);
    //Get now date
    const date = this.formatDate(new Date());
    return this.http.get<HourlySales[]>(
      `${this.apiServerUrl}/Dashboard/HourlySalesAvg/${date}?uniqueID="AA"`,
      { headers }
    );
  }

  getPumpIdleStatus(): Observable<PumpIdle[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<PumpIdle[]>(
      `${this.apiServerUrl}/Dashboard/PumpIdleStatus`,
      { headers }
    );
  }

  getTerminalIdleStatus(): Observable<TerminalIdle[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<TerminalIdle[]>(
      `${this.apiServerUrl}/Dashboard/TerminalsIdleStatus`,
      { headers }
    );
  }

  // Get Pricesign
  getPriceSign(): Observable<PriceSign[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<PriceSign[]>(`${this.apiServerUrl}/PriceSign`, {
      headers,
    });
  }

  // Update Pricesign
  updatePriceSign(data: any[]): Observable<PriceSignResponse> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.post<PriceSignResponse>(
      `${this.apiServerUrl}/PriceSign`,
      data,
      { headers }
    );
  }

  // Regulus Ext
  getRegulusAllPumps(): Observable<RegulusAllPumps[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<RegulusAllPumps[]>(
      `${this.apiServerUrl}/RegulusConfig/Pumps/AllPumps`,
      { headers }
    );
  }

  getRegulusHoses(pumpId: any): Observable<RegulusHoses[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<RegulusHoses[]>(
      `${this.apiServerUrl}/RegulusConfig/Hoses/${pumpId}`,
      { headers }
    );
  }

  getRegulusLoops(): Observable<RegulusLoops[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<RegulusLoops[]>(
      `${this.apiServerUrl}/RegulusConfig/Loops`,
      { headers }
    );
  }

  getRegulusBlends(): Observable<RegulusBlends[]> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<RegulusBlends[]>(
      `${this.apiServerUrl}/RegulusConfig/Blends`,
      { headers }
    );
  }

  //format Date
  formatDate(date: Date) {
    const dateSring = date.toISOString();
    return dateSring.slice(0, 10);
  }

  formatDateNew(date: any): string {

    var month = "0";
    var monthString: string = date.substring(4, 7);
    switch (monthString.toLowerCase()) {
      case "jan":
        month = "01";
        console.log(month);
        break;
      case "feb":
        month = "02";
        console.log(month);
        break;
      case "mar":
        month = "03";
        console.log(month);
        break;
      case "apr":
        month = "04";
        console.log(month);
        break;
      case "may":
        month = "05";
        console.log(month);
        break;
      case "jun":
        month = "06"
        console.log(month);
        break;
      case "jul":
        month = "07";
        console.log(month);
        break;
      case "aug":
        month = "08";
        console.log(month);
        break;
      case "sep":
        month = "09";
        console.log(month);
        break;
      case "oct":
        month = "10";
        console.log(month);
        break;
      case "nov":
        month = "11";
        console.log(month);
        break;
      case "dec":
        month = "12";
        console.log(month);
        break;
      default:
        console.log("Date formatter failed to get month");
    }
    console.log(date.substring(11, 15) +
    "-" +
    month +
    "-" +
    date.substring(8, 10));

    return (
      date.substring(11, 15) +
      "-" +
      month +
      "-" +
      date.substring(8, 10)
    );
  }

  getAllElectronicTotals(atDate: any): Observable<ElectronicTotals[]> {
    // Set the headers with the Authorization header
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<ElectronicTotals[]>(
      `${this.apiServerUrl}/Transactions/ElectronicTotals?atDate=${atDate}`,
      { headers }
    );
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

//Delivery Totals
export interface ElectronicTotals {
  terminal: number;
  pump: number;
  productID: number;
  productName: string;
  price: string;
  amount: string;
  volume: string;
  deliveries: number;
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

// Price break Report
export interface PriceBreak {
  gradeID: number;
  gradeName: string;
  unitPrice: number;
  totalAmount: number;
  totalQuantity: number;
}

export interface GradeSales {
  gradeID: number;
  gradeName: string;
  quantity: number;
  totalAmount: number;
}

// Grade Propotion
export interface GradePropotion {
  gradeID: string;
  gradeName: string;
  propotion: string;
  backColour: string;
  intR: string;
  intG: string;
  intB: string;
}
//Product Sales
export interface ProductSales {
  itemCode: string;
  productName: string;
  totalAmount: string;
  backColour: string;
}
export interface TerminalSales {
  terminalId: string;
  terminalName: string;
}

export interface HourlySales {
  ItemCode: number;
  ItemName: string;
  Sales: Sales[];
}
export interface Sales {
  SaleHour: string;
  TotalSales: string;
}

export interface PumpIdle {
  pumpID: string;
  lastTransTime: string;
  idleHours: string;
}

export interface TerminalIdle {
  terminalID: string;
  lastTransTime: string;
  idleHours: string;
}

//Get Price Details
export interface PriceSign {
  panalID: string;
  productID: string;
  productName: string;
  productPrice: string;
  updatedBy: string;
  updatedAt: string;
}

//Price Sign Response
export interface PriceSignResponse {
  isSucess: string;
  message: string;
}

// Rgulus Config
export interface RegulusAllPumps {
  lid: number;
  pid: number;
  loopID: string;
  prot: string;
  model: string;
  stSiz: string;
  iD_PMP_Model: number;
  iD_PMP_MK: number;
}

export interface RegulusHoses {
  pumpID: number;
  hoseid: number;
  blendID: string;
  priceID: number;
  priceLevelID: number;
  gradeName: string;
  price: number;
  hoseNumber: number;
  tankID: number;
}

export interface RegulusLoops {
  iD_PMP_LP: number;
  nM_PMP_MK: string;
  deviceType: string;
  networkProtsID: number;
  networkDeviceID: number;
  iD_PMP_MDL: number;
}

export interface RegulusBlends {
  blendID: number;
  blendName: string;
  blendPrice: number;
  priceID: number;
}
