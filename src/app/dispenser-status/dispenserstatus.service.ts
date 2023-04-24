import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Dispenser } from './dispenser';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})

export class DispenserstatusService {
  private apiServerUrl = 'http://202.92.217.56:8182';
  // private handleError: HandleError;

  constructor(private http: HttpClient){}

  getDispensers(): Observable<any>{

    return this.http.get(`${this.apiServerUrl}/flexapi/Dispenser`);
  }
    // httpErrorHandler: HttpErrorHandler) { }

  // public getDispenserStatus(): Observable<Dispenser[]> {
  //   return this.http.get<Dispenser[]>(`${this.apiServerUrl}/flexapi/Dispenser`
  //   );
  // }

  /** GET heroes from the server */
  // getHeroes(): Observable<Dispenser[]> {
  //   return this.http.get<Dispenser[]>(this.heroesUrl)
  //     .pipe(
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }



}
