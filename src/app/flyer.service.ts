import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlyerService {

  private baseUrl = 'http://localhost:8036/generated/flyer';

  constructor(private http: HttpClient) { }

  getFlyer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createFlyer(flyer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, flyer);
  }

  updateFlyer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFlyer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/id/${id}`, { responseType: 'text' });
  }

  getFlyersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
