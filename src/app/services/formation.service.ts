import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/api/formations')
      .pipe(catchError(this.handleError));
  }

  getOne(id) {
    return this.http.get('http://localhost:3000/api/formations/' + id)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(new Error(error));
  }
}
