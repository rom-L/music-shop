import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Instrument } from './instrument-list/Instrument';


const URL = "https://6339b5b066857f698fba7e8a.mockapi.io/instruments";

@Injectable({
  providedIn: 'root'
})
export class InstrumentDataService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Instrument[]>{
    //hace un fetch con get DEVUELVE UN OBSERVABLE
    return this.http.get<Instrument[]>(URL).pipe(tap((instruments: Instrument[]) => {
      for (const instrument of instruments) {
        instrument.quantity = 0;
      }
    }));  //el 'tap' toca lo q viene antes de emitirlo y lo podemos transformar
  }
}
