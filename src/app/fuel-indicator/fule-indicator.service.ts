import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fuelindicator } from './fuelindicator';
import { Buffer } from 'buffer';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FuleIndicatorService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }



  getFuelIndicatorlist(): Observable<Fuelindicator[]>{
    const basicAuth: string = `${environment.apiUserName}:${environment.apiPassword}`;

    const encoded: string = Buffer.from(basicAuth).toString('base64');

    // Set the headers with the Authorization header
    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("Authorization", "Basic " + encoded);

    return this.http.get<Fuelindicator[]>(`${this.apiServerUrl}/flexapi/Dashboard/Thumbs/2024-04-25`, {headers});
  }
}
