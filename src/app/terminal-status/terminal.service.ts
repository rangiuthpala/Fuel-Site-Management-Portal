import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TerminalStatus } from './terminal-status';
import { Buffer } from 'buffer';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  private apiServerUrl = environment.apiUrl;
  

  constructor(private http: HttpClient) { 
  }



  getFuelIndicatorlist(): Observable<TerminalStatus[]>{
    
    const basicAuth: string = `${environment.apiUserName}:${environment.apiPassword}`;

    const encoded: string = Buffer.from(basicAuth).toString('base64');

    // Set the headers with the Authorization header
    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("Authorization", "Basic " + encoded);

    return this.http.get<TerminalStatus[]>(`${this.apiServerUrl}/Terminals`, {headers});
  }
}
