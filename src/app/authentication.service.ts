import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import  { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {tap, map, catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  apiUrl = "api/users"

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  signup(formData: NgForm){
    return this.http.post<any>(`${this.apiUrl}/signup`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('signup', []))
    )
  }

  login(formData: NgForm){
    return this.http.post<any>(`${this.apiUrl}/login`, formData).pipe(
      tap(user => {
        console.log(user);
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }),
      catchError(this.handleError('login', []))
    )
  }

  logout(){
    if(localStorage.getItem('currentUser')){
      localStorage.removeItem('currentUser');
      this.router.navigate(['/Home']);
    }
  }


}
