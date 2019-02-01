import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Doctor } from './doctor';


@Injectable()

export class DoctorService {
  private _doctorsUrl = './api/doctors.json';

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this._doctorsUrl).do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }

}
