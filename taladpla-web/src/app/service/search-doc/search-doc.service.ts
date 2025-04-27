import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDocService {

  private baseUrl = 'http://139.59.219.248:3000/api';
  // private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getVersion(): Observable<any> {
    return this.http.get(`${this.baseUrl}/version`);
  }
  getDB(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  onSearchByCriteria(req: { name: string; }): Observable<any> {
    return this.http.post(`${this.baseUrl}/onSearchByCriteria`, req);
  }
}
