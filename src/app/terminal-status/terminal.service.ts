import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TerminalStatus } from './terminal-status';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  private apiServerUrl = 'http://202.92.217.56:8182';

  constructor(private http: HttpClient) { }



  getFuelIndicatorlist(): Observable<TerminalStatus[]>{
    const username = 'flexapiuser@felxapi.com';
    const password = 'f!3x@P1u8eRUt';
    const basicAuth: string = `${username}:${password}`;

    // const basicAuth: string = 'flexapiuser@felxapi.com:f!3x@P1u8eRUt'; 

    const encoded: string = Buffer.from(basicAuth).toString('base64');

    // Set the headers with the Authorization header
    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("Authorization", "Basic " + encoded);

    return this.http.get<TerminalStatus[]>(`${this.apiServerUrl}/flexapi/Terminals`, {headers});
  }
}
