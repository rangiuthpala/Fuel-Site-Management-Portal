import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiUrl;

  private basicAuth: string = `${environment.apiUserName}:${environment.apiPassword}`;

  private encoded: string = Buffer.from(this.basicAuth).toString('base64');


  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Login[]> {

    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    // Make the HTTP GET request to the /users endpoint
    return this.http.get<Login[]>(`${this.apiServerUrl}/User`, { headers });
  }

  public getUsersById(code:any): Observable<Login[]> {

    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    // Make the HTTP GET request to the /users endpoint
    return this.http.get<Login[]>(`${this.apiServerUrl}/User/${code}`, { headers });
  }

  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }

  //terminal service
  getFuelIndicatorlist(): Observable<TerminalStatus[]>{

    // Set the headers with the Authorization header
    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("Authorization", "Basic " + this.encoded);

    return this.http.get<TerminalStatus[]>(`${this.apiServerUrl}/Terminals`, {headers});
  }
}

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

export interface Login {
  id: string;
  userName: string;
  password: string;
  isActive: string;

}