import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteVisiteService {

  private baseUrl = 'http://localhost:8036/generated/carteVisite';

  constructor(private http: HttpClient) { }

  getCarteVisite(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createCarteVisite(carteVisite: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, carteVisite);
  }

  updateCarteVisite(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, value);
  }

  deleteCarteVisite(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/id/${id}`, { responseType: 'text' });
  }

  getCarteVisitesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
