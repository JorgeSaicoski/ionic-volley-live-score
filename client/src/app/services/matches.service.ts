import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Match } from '../models/match';  

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private apiUrl = 'http://localhost:8080';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);  
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  getMatches(page: number = 1, pageSize: number = 10): Observable<Match[]> {
    const url = `${this.apiUrl}/matches?page=${page}&pageSize=${pageSize}`;
    return this.http.get<Match[]>(url, this.httpOptions).pipe(
      map((response: Match[]) => response || []),  
      catchError(this.handleError)
    );
  }

  getMatchById(id: string): Observable<Match> {
    const url = `${this.apiUrl}/matches/${id}`;
    return this.http.get<Match>(url, this.httpOptions).pipe(
      map((response: Match) => response || null),
      catchError(this.handleError)
    );
  }

  createMatch(match: Match): Observable<Match> {
    const url = `${this.apiUrl}/matches`;
    return this.http.post<Match>(url, match, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateMatch(id: string, match: Match): Observable<Match> {
    const url = `${this.apiUrl}/matches/${id}`;
    return this.http.put<Match>(url, match, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
