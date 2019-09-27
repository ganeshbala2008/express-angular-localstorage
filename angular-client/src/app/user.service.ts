import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getusers (): Observable<User[]> {
    return this.http.get<User[]>(apiUrl)
      .pipe(
        tap(users => console.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );

  }

getuser (userId): Observable<User[]> {
  return this.http.get<User[]>(apiUrl+'/'+userId)
    .pipe(
      tap(users => console.log('fetched user')),
      catchError(this.handleError('getUser', []))
    );
  }

  deleteUser(userId): Observable<User[]> {
    return this.http.delete<User[]>(apiUrl+'/'+userId)
      .pipe(
        tap(users => console.log('user deleted')),
        catchError(this.handleError('deleteUser', []))
      );
  }

  save(data): Observable<User[]> {
    return this.http.post<User[]>(apiUrl,data)
      .pipe(
        tap(users => console.log('user saved')),
        catchError(this.handleError('save', []))
      );
  }


  private handleError<T> (operation = 'operation', result?: T) {
	return (error: any): Observable<T> => {

    	// TODO: send the error to remote logging infrastructure
    	console.error(error); // log to console instead
		// Let the app keep running by returning an empty result.
   		 return of(result as T);
  	};
  }
}

