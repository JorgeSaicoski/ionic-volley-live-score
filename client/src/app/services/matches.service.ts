import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ensures this service is available application-wide
})
export class MatchService {
  private apiUrl = 'http://your-api-domain.com'; // Replace with your Golang API URL

  constructor(private http: HttpClient) {}

  getMatches(page: number = 1, pageSize: number = 10): Observable<any> {
    const url = `${this.apiUrl}/matches?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }

  getMatchById(id: string): Observable<any> {
    const url = `${this.apiUrl}/matches/${id}`;
    return this.http.get(url);
  }

  createMatch(match: any): Observable<any> {
    const url = `${this.apiUrl}/matches`;
    return this.http.post(url, match);
  }

  updateMatch(id: string, match: any): Observable<any> {
    const url = `${this.apiUrl}/matches/${id}`;
    return this.http.put(url, match);
  }
}
