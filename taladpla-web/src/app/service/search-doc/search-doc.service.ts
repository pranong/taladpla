import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchDocService {

  private baseUrl = environment.apiUrl;

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

  getMasterData(req: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/getMasterData`, req);
  }
}
