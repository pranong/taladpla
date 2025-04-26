import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDocService {
  getDB(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  private baseUrl = 'http://backend:3000/api';

  constructor(private http: HttpClient) { }

  getMessage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/message`);
  }
}
