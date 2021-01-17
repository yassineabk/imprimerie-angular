import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private baseUrl = 'http://localhost:8036/generated/agenda';

  constructor(private http: HttpClient) { }

  getAgenda(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createAgenda(agenda: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, agenda);
  }

  updateAgenda(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/`, value);
  }

  deleteAgenda(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/id/${id}`, { responseType: 'text' });
  }

  getAgendasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
