import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getlastThree() {
    return this.http.get('http://localhost:3000/api/events/lastThree')
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(new Error(error));
  }
}
