import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/api/media')
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(new Error(error));
  }
}
