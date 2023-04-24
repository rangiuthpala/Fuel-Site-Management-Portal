import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl = 'http://202.92.217.56:8182/ﬂexapi/User';

  constructor(private http: HttpClient) { }

  // getUserDetails(username: any, password: any) {

  //   return this.http.get(`${this.apiServerUrl}'+username+'/'+password`);

  // }

  public getUsers(): Observable<Login[]> {
    const url = 'http://202.92.217.56:8182/flexapi/User';

    const username = 'flexapiuser@felxapi.com';
    const password = 'f!3x@P1u8eRUt';
    const basicAuth: string = `${username}:${password}`;

    // const basicAuth: string = 'flexapiuser@felxapi.com:f!3x@P1u8eRUt'; 

    const encoded: string = Buffer.from(basicAuth).toString('base64');

    // Set the headers with the Authorization header
    const headers = new HttpHeaders().set("Content-Type", "application/json")
      .set("Authorization", "Basic " + encoded);

    // Make the HTTP GET request to the /users endpoint
    return this.http.get<Login[]>(url, { headers });
  }

}


